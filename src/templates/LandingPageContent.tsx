//
//  LandingPageContent.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import QueryRootGroup from "../model/queries/structure/query_rootGroup"
import Head from "./components/structure/Head"
import Onload from "./components/structure/Onload"
import Topbar from "./components/structure/Topbar"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function LandingPageContent(props: any) {
  // Fetch root group and get link to the first page that exists in that tree
  const root = QueryRootGroup()
  const link = root?.firstPageSlug ? root.firstPageSlug : null

  return (
    <Onload
      tree={
        <>
          <Head key="head" />
          <div id="main-wrapper" key="content">
            <div id="content" role="main">
              {/* Page top bar */}
              <Topbar pageId={null} />
              {/* Heading part */}
              <IndexHeader link={link} />
              <div className={`docs-content fullscreen index`}>
                {/* Page Content */}
                <div className="container">
                  <div className="row no-gutter">
                    <h1>Getting Started</h1>
                  </div>
                </div>
                <div className="container">
                  {/* Crossroads tile grid */}
                  <div className={`tile-container natural`}>
                    <div className={`grid c2`}>
                      <IndexTile
                        title="⭐ Visit your doc content!"
                        subtitle=" This documentation has been generated using the content you have created. Let's see it in action!"
                        number="1"
                        link={link}
                        blank={false}
                      />
                      <IndexTile
                        title="📚 See what all is possible"
                        subtitle="With Supernova, you get entire design system platform at your fingertips. Learn about all the possibilities here!"
                        number="2"
                        link="https://learn.supernova.io/"
                        blank={true}
                      />
                      <IndexTile
                        title="⚒️ Build new tooling"
                        subtitle="Our SDK allows programmatic access to all information you have in your design system. See how you can build new tools on top of Supernova!"
                        number="3"
                        link="https://github.com/Supernova-Studio/sdk-typescript"
                        blank={true}
                      />
                      <IndexTile
                        title="🌐 Support us!"
                        subtitle="We do what we do because we would love to see the community thrive. We would be eternally grateful if you could talk about us publicly!"
                        number="4"
                        link="https://twitter.com/supernova_io"
                        blank={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  )
}

function IndexHeader(props: { link: string | null }) {
  const title = "GATSBY ❤️ SUPERNOVA"
  const subtitle =
    "We are excited that you are trying Supernova's Gatsby integration. We have made everything easy for you - customization, usage and experience."
  const banner = "This documentation site has been created using\nSupernova to show what all is possible. Enjoy!"

  return (
    <div className="index-header">
      <div className="container index-slider">
        <div className="slider">
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <a className="btn btn-primary" href={props.link ? props.link : "#"} role="button">
            VISIT YOUR DOCUMENTATION
          </a>
        </div>
        <div className="index-infobanner-float">
          <div className="index-infobanner">
            <div>
              <span>{banner}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IndexTile(props: { title: string; subtitle: string; link: string | null; number: string; blank: boolean }) {
  return (
    <a href={props.link ? props.link : "#"} target={props.blank ? "_blank" : undefined}>
      <div className="index-tile">
        <div className="content">
          <p className="title">{props.title}</p>
          <p className="subtitle">{props.subtitle}</p>
        </div>
        <div className="number">{props.number}</div>
      </div>
    </a>
  )
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Default template query

/*
// Note: Using this query you can fetch any information for this page
export const query: any = graphql`
  query TemplatePageIndexExperimentalQuery {
    allDocumentationItem {
      nodes {
        id
        slug
        title
        itemType
      }
    }
  }
`
*/
