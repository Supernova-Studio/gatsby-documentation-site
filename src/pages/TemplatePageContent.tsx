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


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

function TemplatePageContent(props: any) {

  const page = props.data.documentationItem as GatsbyTypes.DocumentationItem

  return [
    <Head />,
    <div id="main-wrapper">
      <div id="content" role="main">
        <Topbar pageId={page.id} />
        {page.configuration!.showSidebar ? <Sidebar /> : null}
        <div className={`docs-content ${!page.configuration!.showSidebar ? "fullscreen" : ""}`}>

          {/* page_body_structure_title */}

          <div className="container">
            <section id="section-content-page">
              <div className="tab-content" id="page-tab-content">

                {/* inject page blocks here @ page_body_structure_block for each block */}
              </div>
            </section>

            {/* page_body_structure_content */}
          </div>
        </div>
      </div>
    </div>
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
      slug
      title
      parentGroupId
      itemType
      configuration {
        showSidebar
      }
    }
  }
`
