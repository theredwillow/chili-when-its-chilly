import React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/Section'

import Competition from '../components/Competition'
import Slideshow from '../components/Slideshow'

const toHTML = value =>
  remark()
    .use(remarkHTML)
    .processSync(value)
    .toString()
    .replace(/\\$/gm, '<br />')

export const PageTemplate = ({ helmet, slideshowImages, sections }) => {
  const PostContent = HTMLContent || Content
  return (
    <div id="sections">
      {helmet || ''}
      <Slideshow images={slideshowImages} />
      {
        sections.map((section, i) => (
          <Section
            key={`section-${i}`}
            isFirst={i === 0}
          >
            <PostContent content={toHTML(section)} />
          </Section>
        ))
      }
      <Section isLast={true}>
        {/* <Sponsors sponsors={sponsors} /> */}
        TEST OF COMPETITION { /* FIXME */ }
        <Competition name="Homebrew" />
        <span className="contact-us">
          Contact us at info@chiliwhenitschilly.com
        </span>
        <span id="website-by-jared">
          Website by <a href="https://jared-weide-portfolio.web.app/" target="_blank" rel="noreferrer">Jared Weide</a>
        </span>
      </Section>
    </div>
  )
}

PageTemplate.propTypes = {
  helmet: PropTypes.object,
  slideshowImages: PropTypes.array,
  sections: PropTypes.array
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  const titleTemplate =
    (post.frontmatter.title === "Home Page")
    ? "Chili When It's Chilly"
    : "%s - Chili When It's Chilly"

  return (
    <Layout>
      <PageTemplate
        helmet={
          <Helmet titleTemplate={titleTemplate}>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        slideshowImages={post.frontmatter.slideshowImages}
        sections={post.frontmatter.sections}
      />
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
        slideshowImages {
          src {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          description
        }
        sections
      }
    }
  }
`
