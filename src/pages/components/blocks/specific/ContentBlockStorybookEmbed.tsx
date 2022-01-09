//
//  ContentBlockStorybookEmbed.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React, { useEffect } from "react";
import { SupernovaTypes } from "../../../../../plugins/supernova-gatsby-source/build/exports"
import QueryConfiguration from "../../../../model/queries/query_configuration"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockStorybookEmbed(props: { block: SupernovaTypes.DocumentationPageBlockEmbedStorybook }) {

    // Ignore empty embeds
    if (!props.block.url) {
        return null
    }

    let storybookError = QueryConfiguration().storybookError

    return <>
    <div className="storybook-state-wrapper" style={{height: props.block.size.height ? props.block.size.height : 500}}>
        <div className="storybook-container">
            <iframe className="embed-responsive-item storybook" src={props.block.url} allowFullScreen loading="lazy"></iframe>
        </div>
        <div className="storybook-error">
            <span>{ storybookError ? storybookError : "Storybook failed to load" }</span>
        </div>
    </div>
    { props.block.caption ? <p className="caption">{props.block.caption}</p> : null}
    </>
}