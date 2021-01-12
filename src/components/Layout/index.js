import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './index.css'
import Footer from '../Footer'
import Header from '../Header'
import useSiteMetadata from '../SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(0)

  const storeScroll = (e) => {
    if (!e || !e.target || !e.target.scrollTop) {
      return
    }
    setScrollPos(e.target.scrollTop)
  }

  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      </Helmet>

      <div id="app" scroll={scrollPos}>
        <Header />
        <main onScroll={storeScroll}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default TemplateWrapper