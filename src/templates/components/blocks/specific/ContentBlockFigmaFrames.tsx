//
//  ContentBlockFigmaFrames.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import ContentFigmaFrame from "./partials/ContentFigmaFrame"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockFigmaFrames(props: { block: SupernovaTypes.DocumentationPageBlockFrames }) {

    let forceNaturalHeight = props.block.properties.alignment === SupernovaTypes.FrameAlignment.frameHeight || 
                             props.block.properties.layout == SupernovaTypes.FrameLayout.c1 || 
                             props.block.properties.layout == SupernovaTypes.FrameLayout.c175
                             
    return <div className={`tile-container ${ forceNaturalHeight ? "natural" : ""}`}>
        <div className={`grid ${props.block.properties.layout.toLowerCase()}`}>
            {props.block.frames.map(f => <ContentFigmaFrame frame={f} />)}
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
        </div>
    </div>
}