//
//  ContentFigmaFrame.ts
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

export default function ContentFigmaFrame(props: { frame: SupernovaTypes.DocumentationPageBlockFrame }) {

    // Configure background and title properties
    let backgroundColor = "transparent"
    let showChecker = true

    // TODO: Engine should provide null for transparent, not default color. This is SDK limitation
    if (props.frame.backgroundColor && props.frame.backgroundColor !== "#f9f9faff") {
        backgroundColor = props.frame.backgroundColor
        showChecker = false
    }
    
    return <div>      
        <div className={`preview frame ${showChecker ? "checkered-background-light" : ""}`} style={{backgroundColor: backgroundColor}}>
            <img src={props.frame.previewUrl ?? undefined} />
        </div>
        { props.frame.title ? <p className="title">{props.frame.title}</p> : null}
        { props.frame.description ? <p className="description">{props.frame.description}</p> : null}
    </div>
}