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
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAssetById from "../../../../../model/queries/query_assetById"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentComponentAsset(props: { asset: SupernovaTypes.DocumentationPageBlockAsset }) {

    let asset = QueryAssetById(props.asset.assetId)

    // Ignore assets that don't exist
    if (!asset.thumbnailUrl) {
        return null
    }

    // Configure background and title properties
    let backgroundColor = "transparent"
    let showChecker = true
    let title = props.asset.title ? props.asset.title : asset.name
    let description  = props.asset.description ? props.asset.description : asset.description

    // TODO: Engine should provide null for transparent, not default color. This is SDK limitation
    if (props.asset.backgroundColor && props.asset.backgroundColor !== "#f9f9faff") {
        backgroundColor = props.asset.backgroundColor
        showChecker = false
    }
    
    return <div>      
        <div className={`preview frame ${showChecker ? "checkered-background-light" : ""}`} style={{backgroundColor: backgroundColor}}>
            <img src={asset.thumbnailUrl} />
        </div>
        { title ? <p className="title">{title}</p> : null}
        { description ? <p className="description">{description}</p> : null}
    </div>
}