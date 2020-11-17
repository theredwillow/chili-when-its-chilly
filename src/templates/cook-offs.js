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
}) => {
  competitions = competitions.reduce((memo, x) => {
    if (!memo[x.day]) {
      memo[x.day] = []
    }
    memo[x.day].push(x)
    return memo
  }, {})
  return (
    <>
      {helmet || ''}
      <div id="sections">
        <Section isFirst>
          <div className="content">
            <h1>Cook-Off's</h1>
            {
              Object.entries(competitions).map(([day, values]) => (
                <React.Fragment key={day}>
                  <h2>{day}</h2>
                  { values.map(info => <Competition key={info.contestName} info={info} />) }
                </React.Fragment>
              ))
            }
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
}

CookOffsTemplate.propTypes = {
  helmet: PropTypes.object,
  competitions: PropTypes.array,
  rules: PropTypes.string
}

const CookOffs = ({ data }) => {
  const { markdownRemark: post } = data 

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
        competitions={post.frontmatter.competitions}
        rules={post.frontmatter.rules}
      />
    </Layout>
  )
}

CookOffs.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CookOffs

export const cookOffsQuery = graphql`
  query CookOffsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        competitions {
          contestName
          image {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
          day
          years {
            year
            sponsor {
              sponsorName
              sponsorUrl
            }
            winners {
              firstPlace {
                winnersName
                winnersPicture {
                  childImageSharp {
                    fixed(width: 350) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              secondPlace {
                winnersName
                winnersPicture {
                  childImageSharp {
                    fixed(width: 350) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              thirdPlace {
                winnersName
                winnersPicture {
                  childImageSharp {
                    fixed(width: 350) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
        rules
      }
    }
  }
`
