//
//  ContentBlockQuote.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../../plugins/supernova-gatsby-source/build/exports"
import ContentRichText from "./partials/ContentRichText"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockQuote(props: { block: SupernovaTypes.DocumentationPageBlockQuote }) {
    return <p className="lead"><ContentRichText text={props.block.text} /></p>
}
