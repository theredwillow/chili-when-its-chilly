import React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/Section'

const toHTML = value =>
  remark()
    .use(remarkHTML)
    .processSync(value)
    .toString()
    .replace(/\\$/gm, '<br />')

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  const titleTemplate =
    (post.frontmatter.title === "Home Page")
    ? "Chili When It's Chilly"
    : "%s - Chili When It's Chilly"
  
  const PostContent = HTMLContent || Content

  return (
    <Layout>
      <Helmet titleTemplate={titleTemplate}>
        <title>{`${post.frontmatter.title}`}</title>
        <meta
          name="description"
          content={`${post.frontmatter.description}`}
        />
      </Helmet>
      {
        post.frontmatter.sections.map((section, i) => (
          <Section key={`section-${i}`} isFirst={i === 0}>
            <PostContent content={toHTML(section)} />
          </Section>
        ))
      }
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
