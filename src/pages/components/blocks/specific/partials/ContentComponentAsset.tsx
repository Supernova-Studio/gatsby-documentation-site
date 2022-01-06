//
//  ContentComponentAsset.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../../../plugins/supernova-gatsby-source/build/exports"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentComponentAsset(props: { asset: SupernovaTypes.DocumentationPageBlockAsset }) {

    let asset: any = {} // TODO: Fetch proper asset from list of all assets available in the system

    // Ignore assets that don't exist
    if (!asset) {
        return null
    }

    // Configure background and title properties
    let backgroundColor = "transparent"
    let showChecker = true
    // TODO: Engine should provide null for transparent, not default color. This is SDK limitation
    if (props.asset.backgroundColor && props.asset.backgroundColor !== "#f9f9faff") {
        backgroundColor = props.asset.backgroundColor
        showChecker = false
    }
    // Background and title can fallback to asset names if there is nothing provided by the user in editor
    let title = props.asset.title ? props.asset.title : "Asset Name TODO"
    let description = props.asset.description ? props.asset.description : "Asset Description TODO"
    return <div>      
        <div className={`preview frame ${showChecker ? "checkered-background-light" : ""}`} style={{backgroundColor: backgroundColor}}>
            { asset.thumbnailUrl ? <img src={asset.thumbnailUrl} /> : null }    
        </div>
        { title ? <p className="title">{title}</p> : null}
        { description ? <p className="desciption">{description}</p> : null}
    </div>
}