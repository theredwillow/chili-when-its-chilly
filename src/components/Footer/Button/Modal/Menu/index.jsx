import React from 'react'
import { navigate } from 'gatsby'
import './index.css'
import LinkIcon from './LinkIcon'
import { graphql, useStaticQuery } from 'gatsby'

function Menu(){

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query AllPages {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                description
                externalLinks {
                  description
                  title
                  url
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const internalLinks = allMarkdownRemark.edges.map(edge => (
    {
      title: edge.node.frontmatter.title,
      description: edge.node.frontmatter.description,
      link: edge.node.fields.slug
    }
  ))
  const externalLinks = allMarkdownRemark.edges
    .find(edge => edge.node.frontmatter.externalLinks)
    .node.frontmatter.externalLinks
  const options = [ ...internalLinks, ...externalLinks ]

  const goTo = (option) => {
    if (option.link) {
      navigate(option.link)
    }
    else if (option.url) {
      window.open(option.url)
    }
  }
  return (
    <>
      {
        options.map(option => (
          <button
            key={`menu-${option.url || option.link}`}
            title={option.description}
            className="menu-link"
            onClick={() => goTo(option)}
          >
            {option.title}
            {option.url && <LinkIcon />}
          </button>
        )) 
      }
    </>
  )
}

export default Menu
