import React from 'react'
import { navigate } from 'gatsby'
import './index.css'
import LinkIcon from './LinkIcon'
import { graphql, useStaticQuery } from 'gatsby'

// FIXME Retrieve from CMS
// const options = [
//   {
//     title: 'Home Page',
//     link: '/'
//   },
//   {
//     title: 'Shop / Tickets',
//     link: '/shop'
//   },
//   {
//     title: `Cook Off's`,
//     link: '/cook-offs'
//   },
//   {
//     title: 'Live Music',
//     link: '/music'
//   },
//   {
//     title: 'Videos',
//     link: '/videos'
//   },
//   {
//     title: 'Lodging',
//     url: 'https://lonestarjellystone.com/lodging/'
//   }
// ]

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
  const options = [ ...internalLinks ]

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
