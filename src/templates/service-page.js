import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import {Container, Col, Row, Media} from 'react-bootstrap'

export const ServicePageTemplate = ({
    image,
    title,
    caption,
    heading,
    services,
    main,
}) => (
    <div className="content">
        <div
            className="full-width-image-container margin-top-0"
            style={{
                backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
            }}>
            <div 
                style={{
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                        //backgroundColor: '#E3217C',
                        color: 'pink',
                        padding: '1rem',
                        //fontSize: '5rem',
                    }}
                >
                    {title}
                </h1>
                <h4
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                    style={{
                        color: 'white',
                        lineHeight: '1',
                        padding: '0.25em',
                    }}
                >
                    {caption}
                </h4>
            </div>               
        </div>
        <div>
                <Container>
                    <h3>{heading}</h3>
                    <Row>
                        <Col sm="auto"><a href="#firstService">{services.item1}</a></Col>
                        <Col sm="auto"><a href="#secondService">{services.item2}</a></Col>
                        <Col sm="auto">{services.item3}</Col>
                        <Col sm="auto">{services.item4}</Col>
                        <Col sm="auto">{services.item5}</Col>
                        <Col sm="auto">{services.item6}</Col>
                        <Col sm="auto">{services.item7}</Col>
                        <Col sm="auto">{services.item8}</Col>
                        <Col sm="auto">{services.item9}</Col>
                    </Row>
                </Container>
                    <Container>
                        <h1 id='firstService'>{services.item1}</h1>
                        <Row>
                            <Col xs={3}>
                                <PreviewCompatibleImage imageInfo={main.image1} />
                            </Col>
                            <Col>
                                <h5>{main.type1}</h5>
                                <p>{main.text1}</p>
                            <Row>
                                <Col xs="auto">
                                    <p>Female: {main.price1.female}</p>
                                </Col> 
                                <Col xs="auto">
                                    <p>Male: {main.price1.female}</p>
                                </Col> 
                            </Row>                                    
                            </Col>
                        </Row>
                    </Container>
                    
                    <Media>
                        <Container>
                            <h1 id='secondService'>{services.item2}</h1>
                            <Row>
                                <Col>
                                </Col>
                                <Media.Body>
                                </Media.Body>
                            </Row>
                        </Container>
                    </Media>
                </div>
        </div>
)
ServicePageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    caption: PropTypes.string,
    heading: PropTypes.string,
    services: PropTypes.shape({
        item1: PropTypes.string,
        item2: PropTypes.string,
        item3: PropTypes.string,
        item4: PropTypes.string,
        item5: PropTypes.string,
        item6: PropTypes.string,
        item7: PropTypes.string,
        item8: PropTypes.string,
        item9: PropTypes.string,
    }),
    main: PropTypes.shape({
        type1: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text1: PropTypes.string,
        price1: PropTypes.shape({
            female: PropTypes.string,
            male: PropTypes.string,
        }),
        text2: PropTypes.string,
        price2: PropTypes.shape({
            female: PropTypes.string,
            male: PropTypes.string,
        }),
    }),
}

const ServicePage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return(
        <Layout>
            <ServicePageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                caption={frontmatter.caption}
                heading={frontmatter.heading}
                services={frontmatter.services}
                main={frontmatter.main}
            />
        </Layout>
    )
}

ServicePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default ServicePage

export const servicePageQuery = graphql`
    query ServicePage($id: String!){
        markdownRemark(id : {eq: $id}) {
            html
            frontmatter{
                title
                caption
                image{
                    childImageSharp{
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                services {
                    item1
                    item2
                    item3
                    item4
                    item5
                    item6
                    item7
                    item8
                    item9
                }
                main {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    type1
                    text1
                    price1 {
                        female
                        male
                    }
                    type2
                    text2
                    price2 {
                        female
                        male
                    }
                }
            }
        }
    }
`