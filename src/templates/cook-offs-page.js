import React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Section from '../components/Section'
import Competition from '../components/Competition'

const toHTML = value =>
  remark()
    .use(remarkHTML)
    .processSync(value)
    .toString()
    .replace(/\\$/gm, '<br />')

export const CookOffsTemplate = ({
  helmet,
  competitions,
  rules
}) => (
  <>
    {helmet || ''}
    <div id="sections">
      <Section isFirst>
        <div className="content">
          <h1>Cook-Off's</h1>
            <h2>Friday</h2>
            {
              competitions
                .filter(cO => cO.day === "Friday")
                .map(cO => <Competition key={cO.title} {...cO} />)
            }
            <h2>Saturday</h2>
            {
              competitions
                .filter(cO => cO.day === "Saturday")
                .map(cO => <Competition key={cO.title} {...cO} />)
            }
            <h2>Sunday</h2>
            {
              competitions
                .filter(cO => cO.day === "Sunday")
                .map(cO => <Competition key={cO.title} {...cO} />)
            }
            {/* FIXME Handle Unknown's */}
        </div>
      </Section>
      <Section>
        <div className="content">
          <h1>Rules</h1>
          <HTMLContent content={toHTML(rules)} />
        </div>
      </Section>
      <Section isLast>
        <div className="content">
          {/* <Sponsors sponsors={sponsors} /> */}
          <span className="contact-us">
            Contact us at info@chiliwhenitschilly.com
          </span>
          <span id="website-by-jared">
            Website by <a href="https://jared-weide-portfolio.web.app/" target="_blank" rel="noreferrer">Jared Weide</a>
          </span>
        </div>
      </Section>
    </div>
  </>
)

CookOffsTemplate.propTypes = {
  helmet: PropTypes.object,
  competitions: PropTypes.array,
  rules: PropTypes.string
}

const CookOffs = ({ data }) => {
  const { markdownRemark: post, allMarkdownRemark } = data
  const competitions = allMarkdownRemark.edges.map(c => {
    const cookOut = c.node.frontmatter
    return (
      {
        ...cookOut,
        day: (post.frontmatter.friday.includes(cookOut.title))
          ? "Friday"
          : (post.frontmatter.saturday.includes(cookOut.title))
            ? "Saturday"
            : (post.frontmatter.sunday.includes(cookOut.title))
              ? "Sunday"
              : "Unknown"
      }
    )
  })

  return (
    <Layout>
      <CookOffsTemplate
        helmet={
          <Helmet titleTemplate="%s - Chili When It's Chilly">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        competitions={competitions}
        rules={post.frontmatter.rules}
      />
    </Layout>
  )
}

CookOffs.propTypes = {
  data: PropTypes.object.isRequired
}

export default CookOffs

export const cookOffsQuery = graphql`
  query CookOffsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        friday
        saturday
        sunday
        rules
      }
    }
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "cook-off" } } }) {
      edges {
        node {
          frontmatter {
            title
            image {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            prevYears {
              year
              winners {
                firstPlace {
                  winnersName
                  winnersPicture {
                    publicURL
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                secondPlace {
                  winnersName
                  winnersPicture {
                    publicURL
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                thirdPlace {
                  winnersName
                  winnersPicture {
                    publicURL
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
