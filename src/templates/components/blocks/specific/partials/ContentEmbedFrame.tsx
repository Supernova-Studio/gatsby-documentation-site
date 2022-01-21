//
//  ContentEmbedFrame.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentEmbedFrame(props: { block: SupernovaTypes.DocumentationPageBlockEmbedGeneric }) {

    // Ignore empty embeds
    if (!props.block.url) {
        return null
    }

    return <div style={{height: props.block.size.height ?? 500}} className="embed-url">
        <iframe className="embed-responsive-item" src={props.block.url} allowFullScreen={true} loading="lazy" />
        { props.block.caption ? <p className="caption">{ props.block.caption }</p> : null}
    </div>
}