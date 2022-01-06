//
//  ContentBlockYoutubeEmbed.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../../plugins/supernova-gatsby-source/build/exports"
import ContentEmbedFrame from "./partials/ContentEmbedFrame"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockYoutubeEmbed(props: { block: SupernovaTypes.DocumentationPageBlockEmbedYoutube }) {

    return <ContentEmbedFrame block={props.block} />
}
