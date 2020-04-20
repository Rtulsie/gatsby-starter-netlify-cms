import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import {Container, Col, Row} from 'react-bootstrap'

export const ServicePageTemplate = ({
    image,
    title,
    caption,
    heading,
    services,
    serviceone,
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
                        <Col xs={12} md="auto"><a href="#firstService">{services.item1}</a></Col>
                        <Col xs={12} md="auto"><a href="#secondService">{services.item2}</a></Col>
                        <Col xs={12} md="auto"><a href="#thirdService">{services.item3}</a></Col>
                        <Col xs={12} md="auto"><a href="#fourthService">{services.item4}</a></Col>
                        <Col xs={12} md="auto"><a href="#fifthService">{services.item5}</a></Col>
                        <Col xs={12} md="auto"><a href="#sixthService">{services.item6}</a></Col>
                        <Col xs={12} md="auto"><a href="#seventhService">{services.item7}</a></Col>
                        <Col xs={12} md="auto"><a href="#eighthService">{services.item8}</a></Col>
                        <Col xs={12} md="auto"><a href="#ninthService">{services.item9}</a></Col>
                    </Row>
                </Container>
                <Container>
                    <Row id='firstService' className="justify-content-center content-padding">
                        <h1 class>{services.item1}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                        <Col xs={12} md={9}>
                            <Row style={{paddingTop: '15px'}}>
                                <h5>{serviceone.type1}</h5>
                                <p>{serviceone.text1}</p>
                            </Row>
                            <Row>
                                <Col xs={4} md="auto">
                                <h5>Price:</h5>
                                </Col>
                                <Col xs={4} md="auto">
                                    <p>Female: {serviceone.price1.female}</p>
                                </Col> 
                                <Col xs={4} md="auto">
                                    <p>Male: {serviceone.price1.male}</p>
                                </Col> 
                            </Row><br/>
                            <Row>
                                <h5>{serviceone.type2}</h5>
                                <p>{serviceone.text2}</p>
                            </Row>
                            <Row>
                                <Col xs={4} md="auto">
                                <h5>Price:</h5>
                                </Col>
                                <Col xs={4} md="auto">
                                    <p>Female: {serviceone.price2.female}</p>
                                </Col> 
                                <Col xs={4} md="auto">
                                    <p>Male: {serviceone.price2.male}</p>
                                </Col> 
                            </Row>                
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h4>{serviceone.extra.name}</h4>
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{serviceone.extra.add1}</Col><Col xs={6} md={2}>{serviceone.extra.price1}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add2}</Col><Col xs={6} md={2}>{serviceone.extra.price2}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add3}</Col><Col xs={6} md={2}>{serviceone.extra.price3}</Col>        
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{serviceone.extra.add4}</Col><Col xs={6} md={2}>{serviceone.extra.price4}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add10}</Col><Col xs={6} md={2}>{serviceone.extra.price10}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add6}</Col><Col xs={6} md={2}>{serviceone.extra.price6}</Col>        
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{serviceone.extra.add5}</Col ><Col xs={6} md={2}>{serviceone.extra.price5}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add8}</Col><Col xs={6} md={2}>{serviceone.extra.price8_1}<br/>{serviceone.extra.price8_2}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add9}</Col><Col xs={6} md={2}>{serviceone.extra.price9_1}<br/>{serviceone.extra.price9_2}</Col>        
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>{serviceone.extra.add7}</Col><Col xs={6} md={2}>{serviceone.extra.price7}</Col>
                    </Row>        
                </Container>
                <Container>
                    <Row id='secondService' className="justify-content-center content-padding" >
                        <h1>{services.item2}</h1>
                    </Row>
                    <Row>
                        <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                        <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}>
                            <h5>{serviceone.type1}</h5>
                            <p>{serviceone.text1}</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row id='thirdService' className="justify-content-center content-padding" >
                        <h1>{services.item3}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row id='fourthService' className="justify-content-center content-padding" >
                        <h1>{services.item4}</h1>
                    </Row>
                    <Row>
                        <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                        <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}>
                            <h5>{serviceone.type1}</h5>
                            <p>{serviceone.text1}</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row id='fifthService' className="justify-content-center content-padding" >
                        <h1>{services.item5}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row id='sixthService' className="justify-content-center content-padding" >
                        <h1>{services.item6}</h1>
                    </Row>
                    <Row>
                        <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                        <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}>
                            <h5>{serviceone.type1}</h5>
                            <p>{serviceone.text1}</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row id='seventhService' className="justify-content-center content-padding" >
                        <h1>{services.item7}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row id='eighthService' className="justify-content-center content-padding" >
                        <h1>{services.item8}</h1>
                    </Row>
                    <Row>
                        <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                        <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}>
                            <h5>{serviceone.type1}</h5>
                            <p>{serviceone.text1}</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row id='ninthService' className="justify-content-center content-padding" >
                        <h1>{services.item9}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                    </Row>
                </Container>
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
    serviceone: PropTypes.shape({
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
        extra: PropTypes.shape({
            name: PropTypes.string,
            add1: PropTypes.string,
            price1: PropTypes.string,
            add2: PropTypes.string,
            price2: PropTypes.string,
            add3: PropTypes.string,
            price3: PropTypes.string,
            add4: PropTypes.string,
            price4: PropTypes.string,
            add5: PropTypes.string,
            price5: PropTypes.string,
            add6: PropTypes.string,
            price6: PropTypes.string,
            add7: PropTypes.string,
            price7: PropTypes.string,
            add8: PropTypes.string,
            price8_1: PropTypes.string,
            price8_2: PropTypes.string,
            add9: PropTypes.string,
            price9_1: PropTypes.string,
            price9_2: PropTypes.string,
            add10: PropTypes.string,
            price10: PropTypes.string,
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
                serviceone={frontmatter.serviceone}
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
                serviceone {
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
                    extra {
                        name
                        add1
                        price1
                        add2
                        price2
                        add3
                        price3
                        add4
                        price4
                        add5
                        price5
                        add6
                        price6
                        add7
                        price7
                        add8
                        price8_1
                        price8_2
                        add9
                        price9_1
                        price9_2
                        add10
                        price10
                    }
                }
            }
        }
    }
`