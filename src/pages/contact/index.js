import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

import {Container, Row, Col} from 'react-bootstrap'

import mainImage from "../../img/contactPage1.jpeg"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('https://stilltestingsite.netlify.app/contact/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (  
      <Layout>
        <Container className="themeColor">
          <Row>
            <Col md={3}>
            </Col>
            <Col md={5}>
              <img src={mainImage} alt="Large Interior" />
            </Col>
            <Col md={4}>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <h5>ADDRESS</h5>
              <br/>
              <p>
                98e Endeavour Road, Chaguanas,
                <br/>
                Trinidad and Tobago.
              </p>
            </Col>
            <Col md={5}>
             <h5>HOURS</h5>
             <br/>
              <p>Monday: Closed
                <br/>Tuesday - Friday: 10:30am - 7:00pm
                <br/>Saturday: 10:00am - 7:00pm
                <br/>Sunday: 10:00am - 3:00pm
              </p>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
        <section className="section">
          <div className="container">
            <div className="content">              
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
