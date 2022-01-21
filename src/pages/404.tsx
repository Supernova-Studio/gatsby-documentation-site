//
//  404.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from 'react'
import Topbar from '../templates/components/structure/Topbar'
import Head from '../templates/components/structure/Head'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

function Template404(props: any) {

  return [
    <Head />,
    <div id="main-wrapper">
      <div id="content" role="main">
        Not found yo! (<a href="/">back to index</a>)
      </div>
    </div>
  ]
}


export default Template404


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Default template query

