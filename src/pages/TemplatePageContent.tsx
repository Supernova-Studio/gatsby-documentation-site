//
//  TemplatePageContent.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Sidebar from './components/structure/Sidebar'
import Topbar from './components/structure/Topbar'
import Head from './components/structure/Head'
import useScript from '../model/hooks/hook_useScript'
import Title from './components/structure/Title'
import { SupernovaTypes } from '../../plugins/supernova-gatsby-source/build/exports'
import ContentBlock from './components/blocks/ContentBlock'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

function TemplatePageContent(props: any) {

  const page = props.data.documentationItem as SupernovaTypes.DocumentationPage

  return [
    <Head key="head" />,
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
              <div className="tab-content" id="page-tab-content">
                {page.blockIds.map(b => <ContentBlock blockId={b}/>)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>,
    useScript("/scripts/sandbox.js"),
    useScript("/scripts/fn.js")
  ]
}


export default TemplatePageContent


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Default template query

export const query: any = graphql`
    query TemplatePageContent(
      $slug: String!
    ) {
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
