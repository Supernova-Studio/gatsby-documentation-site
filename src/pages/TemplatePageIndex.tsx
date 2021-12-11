//
//  TemplatePageIndex.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { graphql } from 'gatsby'
import { get } from 'lodash'
import React from 'react'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

class TemplatePageIndex extends React.Component {
  render() {

    const pages = get(this, 'props.data.allDocumentationPage.nodes') as Array<GatsbyTypes.DocumentationPage>
    console.log(pages)

    return (
      <div>Index page. Here is all generated pages:
      <ul>
      {pages.map(p => {
        const slug = `/docs/${p.slug}`
        return <a href={slug}><li key={p.id}>{p.title} ({p.slug})</li></a>
      })}
      </ul>
      </div>
    )
  }
}

export default TemplatePageIndex

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Default template query

export const query: any = graphql`
  query TemplatePageIndexQuery {
    allDocumentationPage {
      nodes {
        id
        slug
        title
      }
    }
  }
`