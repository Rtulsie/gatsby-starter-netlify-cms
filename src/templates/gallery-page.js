import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GalleryImageFeatures from '../components/GalleryImageFeatures'
import {Container, Row} from 'react-bootstrap'

export const GalleryPageTemplate = ({
    title,
    image,
    imgcaption,
    intro,
}) => (
        <Container>
            <Row>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url(${
                        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                        })`,
                        backgroundPosition: `top left`,
                        backgroundAttachment: `fixed`,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            height: '150px',
                            lineHeight: '1',
                            justifyContent: 'space-around',
                            alignItems: 'left',
                            flexDirection: 'column',
                          }}
                    >
                        <h2
                            className="has-text-weight-bold is-size-1 text-center"
                            style={{
                            //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                            //backgroundColor: '#f40',
                            color: 'pink',
                            padding: '1rem',
                            }}
                        >
                        {title}
                        </h2>
                        <h3
                            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                            style={{
                                //boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                                //backgroundColor: 'rgb(255, 68, 0)',
                                color: 'white',
                                lineHeight: '1',
                                padding: '0.25em',
                            }}
                            >
                            {imgcaption}
                        </h3>
                    </div>
                </div>
            </Row>
            <Row>
                <GalleryImageFeatures gridItems={intro.blurbs} />
            </Row>
        </Container>
        
)

GalleryPageTemplate.propTypes = {
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    imgcaption: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
}

const GalleryPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <GalleryPageTemplate
                title={frontmatter.title}
                image={frontmatter.image}
                imgcaption={frontmatter.imgcaption}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

GalleryPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }

  export default GalleryPage

  export const galleryPageQuery = graphql`
    query GalleryPage($id: String!) {
        markdownRemark(id: {eq: $id }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imgcaption
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        heading
                        text
                    }
                }
            }
        }
    }
  `