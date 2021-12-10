//
//  TypedPage.tsx
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

const TypedPage = () => {

  /*
  let docs: GatsbyType
  const data = useStaticQuery<GatsbyTypes.TypedPageQuery>(graphql`
    query TypedPage {
      all
    }
  `)*/
  let page: GatsbyTypes.DocumentationPage

    return (
      <div>Template Content page</div>
    )
}

export default TypedPage