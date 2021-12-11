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


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

class TemplatePageContent extends React.Component {
  render() {
    const content = get(this, 'props.data.documentationPage') as GatsbyTypes.DocumentationPage

    return (
      <div>Content of page {content.title} at url {content.slug}</div>
    )
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
    }
  }
`
