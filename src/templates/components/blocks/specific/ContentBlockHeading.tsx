//
//  ContentBlockHeading.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import { UtilsUrls } from "../../../../helpers/UtilUrls"
import ContentRichText from "./partials/ContentRichText"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockHeading(props: { block: SupernovaTypes.DocumentationPageBlockHeading }) {
  let id = UtilsUrls.slugifyRichText(props.block.text)
  let text = <ContentRichText text={props.block.text} />
  switch (props.block.headingType) {
    case SupernovaTypes.HeadingType.h1:
      return <h1 id={id}>{text}</h1>
    case SupernovaTypes.HeadingType.h2:
      return <h2 id={id}>{text}</h2>
    case SupernovaTypes.HeadingType.h3:
      return <h3 id={id}>{text}</h3>
  }
}
