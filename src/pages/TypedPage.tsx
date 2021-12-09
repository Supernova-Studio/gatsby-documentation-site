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

    const data = useStaticQuery<GatsbyTypes.TypedPageQuery>(graphql`
      query TypedPage {
        all
      }
    `)


    return (
      <div>Template Content page</div>
    )
}

export default TypedPage