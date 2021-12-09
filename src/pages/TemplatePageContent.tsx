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


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

class TemplatePageContent extends React.Component {
  render() {
    return (
      <div>Template Content page</div>
    )
  }
}

export default TemplatePageContent


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Default template query

export const query = graphql`
 query PageQuery {
   site {
     siteMetadata {
       description
     }
   }
 }`