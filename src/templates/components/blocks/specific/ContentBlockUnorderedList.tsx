//
//  ContentBlockUnorderedList.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import ContentRichText from "./partials/ContentRichText"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockUnorderedList(props: { block: SupernovaTypes.DocumentationPageBlockUnorderedList }) {
  return (
    <li>
      <p>
        <ContentRichText text={props.block.text} />
      </p>
    </li>
  )
}
