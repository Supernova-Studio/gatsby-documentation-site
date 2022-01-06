//
//  ContentBlockImage.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../../plugins/supernova-gatsby-source/build/exports"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockImage(props: { block: SupernovaTypes.DocumentationPageBlockImage }) {

    // Ignore images that don't have URL set in the editor
    if (!props.block.url) {
        return null
    }

    // Images can be aligned differently, so handle it
    let imgClass = ""
    let alignClass = ""

    switch (props.block.alignment) {
        case SupernovaTypes.Alignment.left: imgClass = "img-fluid"; alignClass = "text-left"; break
        case SupernovaTypes.Alignment.center: imgClass = "img-fluid"; alignClass = "text-center"; break
        case SupernovaTypes.Alignment.stretch: imgClass = "img-fluid max"; alignClass = "text-center"; break
    }
    
    return <div className={`image-container ${alignClass}`}>
        <img src={props.block.url} className={imgClass} alt="" />
        { props.block.caption ? <p>{props.block.caption}</p> : null}
    </div>
}