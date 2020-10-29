import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/Section'


const Page = ({ data }) => {
  const { markdownRemark: post } = data

  const titleTemplate =
    (post.frontmatter.title === "Home Page")
    ? "Chili When It's Chilly"
    : "%s - Chili When It's Chilly"
  
  const PostContent = HTMLContent || Content
  const sections = post.frontmatter.sections.map((section, i) => (
    <Section isFirst={i === 0}>
      <PostContent content={section} />
    </Section>
  ))

  return (
    <Layout>
      <Helmet titleTemplate={titleTemplate}>
        <title>{`${post.frontmatter.title}`}</title>
        <meta
          name="description"
          content={`${post.frontmatter.description}`}
        />
      </Helmet>
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {post.frontmatter.title}
            </h1>
            {sections}
          </div>
        </div>
      </div>
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Page

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        sections
      }
    }
  }
`
