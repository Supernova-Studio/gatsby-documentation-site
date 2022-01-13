//
//  ContentBlockLink.ts
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

export default function ContentBlockLink(props: { block: SupernovaTypes.DocumentationPageBlockLink }) {

    // Ignore empty links
    if (!props.block.url) {
        return null
    }
    console.log(props.block)
    
    return <a href={props.block.url} target="_blank">
    <div className="embed-url row">
        <div className="content col-8">
            {props.block.title ? <p className="title">{props.block.title}</p> : null}
            {props.block.description ? <p className="description">{props.block.description}</p> : null}
            <p className="link">{props.block.url}</p>
        </div>
        {props.block.thumbnailUrl ?
        <div className="preview col-4" style={{background: `url(${props.block.thumbnailUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}></div> : null }
    </div>
    </a>
}