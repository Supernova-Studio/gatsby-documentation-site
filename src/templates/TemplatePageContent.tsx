//
//  TemplatePageContent.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import { graphql } from "gatsby"
import Sidebar from "./components/structure/Sidebar"
import Topbar from "./components/structure/Topbar"
import Head from "./components/structure/Head"
import Title from "./components/structure/Title"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import ContentMenu from "./components/structure/ContentMenu"
import ContentBlockLevel from "./components/blocks/ContentBlockLevel"
import Onload from "./components/structure/Onload"
import Footer from "./components/structure/Footer"
import PreviousNext from "./components/structure/PreviousNext"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

function TemplatePageContent(props: any) {
  const page = props.data.documentationItem as SupernovaTypes.DocumentationPage

  return (
    <Onload
      tree={
        <>
          <Head key="head" />
          <div id="main-wrapper" key="content">
            <div id="content" role="main">
              {/* Page top bar */}
              <Topbar pageId={page.id} />
              {page.configuration!.showSidebar ? <Sidebar pageId={page.id} /> : null}
              <div className={`docs-content ${!page.configuration!.showSidebar ? "fullscreen" : ""}`}>
                {/* Page title section, including tabs */}
                <Title pageId={page.id} />
                {/* Page Content */}
                <div className="container">
                  <section id="section-content-page">
                    <ContentBlockLevel blockIds={page.blockIds} />
                    <PreviousNext pageId={page.id} />
                  </section>
                  <ContentMenu pageId={page.id} />
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </>
      }
    />
  )
}

export default TemplatePageContent

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Default template query

export const query: any = graphql`
  query TemplatePageContent($slug: String!) {
    documentationItem(slug: { eq: $slug }, itemType: { eq: "Page" }) {
      id
      persistentId
      itemType
      slug
      firstPageSlug
      parentGroupId
      parentGroupChain
      title
      blockIds
      configuration {
        header {
          backgroundImageAssetId
          backgroundImageAssetUrl
          backgroundImageScaleType
          alignment
          foregroundColor
          description
          minHeight
          showBackgroundOverlay
          showCoverText
        }
        showSidebar
      }
    }
  }
`
