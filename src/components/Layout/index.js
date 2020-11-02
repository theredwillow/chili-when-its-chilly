import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Helmet } from 'react-helmet'
import './index.css'
import Footer from '../Footer'
import Header from '../Header'
import Section from '../Section'
import useSiteMetadata from '../SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  let [scrollPos, setScrollPos] = useState(0)
  const { title, description } = useSiteMetadata()
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPos(currPos.y)
    // console.log(prevPos, currPos)
  })
  return (
    <div>
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
      </Helmet>
      <div id="app" scroll={scrollPos}>
        <Header />
        {children}
        <Section isLast={true}>
          {/* <Sponsors sponsors={sponsors} /> */}
          <span className="contact-us">
            Contact us at info@chiliwhenitschilly.com
          </span>
          <span id="website-by-jared">
            Website by <a href="https://jared-weide-portfolio.web.app/" target="_blank" rel="noreferrer">Jared Weide</a>
          </span>
        </Section>
        <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
