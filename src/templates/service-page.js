import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'

export const ServicePageTemplate = ({
    image,
    title,
    heading,
    services,
}) => (
    <div className="content">
        <div
            className="full-width-image-container margin-top-0"
            style={{
                backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundPosition: `top left`,
            }}
            >
                <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                        backgroundColor: '#f40',
                        color: 'white',
                        padding: '1rem',
                    }}
                >
                    {title}
                </h2>
        </div>
    </div>
)
ServicePageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
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
}

const ServicePage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return(
        <Layout>
            <ServicePageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                services={frontmatter.services}
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
            }
        }
    }
`