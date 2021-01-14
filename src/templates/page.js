import React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Section from '../components/Section'

import Slideshow from '../components/Slideshow'
import Sponsors from '../components/Sponsors'

const toHTML = value =>
  remark()
    .use(remarkHTML)
    .processSync(value)
    .toString()
    .replace(/\\$/gm, '<br />')

export const PageTemplate = ({
  helmet,
  slideshowImages,
  sections,
  sponsorImages,
  contactCopy
}) => {
  return (
    <>
      {helmet || ''}
      <Slideshow images={slideshowImages} />
      <div id="sections">
        {
          sections.map((section, i) => (
            <Section
              key={`section-${i}`}
              isFirst={i === 0}
            >
              <HTMLContent className="content" content={toHTML(section)} />
            </Section>
          ))
        }
        <Section isLast={true}>
          <div className="content">
            <Sponsors images={sponsorImages} />
            <br />
            <HTMLContent className="contact-us" content={toHTML(contactCopy)} />
            <br />
            <span id="website-by-jared">
              Website by <a href="https://jared-weide-portfolio.web.app/" target="_blank" rel="noreferrer">Jared Weide</a>
            </span>
          </div>
        </Section>
      </div>
    </>
  )
}

PageTemplate.propTypes = {
  helmet: PropTypes.object,
  slideshowImages: PropTypes.array,
  sections: PropTypes.array,
  sponsorImages: PropTypes.array,
  contactCopy: PropTypes.string
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
        sponsorImages={post.frontmatter.sponsorImages}
        contactCopy={post.frontmatter.contactCopy}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
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
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
        sections
        sponsorImages {
          src {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          url
        }
        contactCopy
      }
    }
  }
`
