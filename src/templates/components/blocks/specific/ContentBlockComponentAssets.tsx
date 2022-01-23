//
//  ContentBlockComponentAssets.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import ContentComponentAsset from "./partials/ContentComponentAsset"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockComponentAssets(props: { block: SupernovaTypes.DocumentationPageBlockAssets }) {
  let forceNaturalHeight =
    props.block.properties.alignment === SupernovaTypes.FrameAlignment.frameHeight ||
    props.block.properties.layout == SupernovaTypes.FrameLayout.c1 ||
    props.block.properties.layout == SupernovaTypes.FrameLayout.c175

  return (
    <div className={`tile-container ${forceNaturalHeight ? "natural" : ""}`}>
      <div className={`grid ${props.block.properties.layout.toLowerCase()}`}>
        {props.block.assets.map((a) => (
          <ContentComponentAsset asset={a} />
        ))}
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
      </div>
    </div>
  )
}
