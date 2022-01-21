//
//  ContentBlockCallout.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import ContentRichText from "./partials/ContentRichText"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockCallout(props: { block: SupernovaTypes.DocumentationPageBlockCallout }) {

    let alertClass=""
    switch (props.block.calloutType) {
        case SupernovaTypes.CalloutType.info: alertClass = "alert-info"; break
        case SupernovaTypes.CalloutType.success: alertClass = "alert-success"; break
        case SupernovaTypes.CalloutType.warning: alertClass = "alert-warning"; break
        case SupernovaTypes.CalloutType.error: alertClass = "alert-danger"; break
    }
    return <div className={`alert ${alertClass}`}><ContentRichText text={props.block.text} /></div>
}