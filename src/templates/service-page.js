import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServicePageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
            <div>
                <h1>{title}</h1>
                <br/>
                <PageContent className="content" content={content} />
                <br/>
            </div>        
    )
}

ServicePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const ServicePage = ({data}) => {
    const {markdownRemark: post} = data

    return(
        <Layout>
            <ServicePageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
}

ServicePage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ServicePage

export const servicePageQuery = graphql`
    query ServicePage($id: String!){
        markdownRemark(id : {eq: $id}) {
            html
            frontmatter{
                path
                title
            }
        }
    }
`