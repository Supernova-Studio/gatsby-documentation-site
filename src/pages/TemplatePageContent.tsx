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


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

class TemplatePageContent extends React.Component {
  render() {
    const page = get(this, 'props.data.documentationPage') as GatsbyTypes.DocumentationPage
    return <div id="main-wrapper"> 
      <div id="content" role="main">
      {/* page_body_structure_header */}
      { page.configuration!.showSidebar ? <Sidebar /> : null }
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
  }
}

export default TemplatePageContent


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Default template query

export const query: any = graphql`

    query TemplatePageContentQuery(
      $slug: String!
    ) {
    documentationPage(slug: { eq: $slug }) {
      id
      slug
      title
      parentGroupId
      configuration {
        showSidebar
      }
    }
  }
`
