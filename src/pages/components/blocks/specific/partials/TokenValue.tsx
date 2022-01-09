//
//  TokenValue.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../../../plugins/supernova-gatsby-source/build/exports"
import { UtilFormatting } from "../../../../../helpers/UtilFormatting"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function TokenValue(props: { token: SupernovaTypes.Token }) {

    const cssDefinitions = UtilFormatting.cssTokenValue(props.token)
    const newlinedAttributes = cssDefinitions.map((definition, index) => {
        const isLast = cssDefinitions.length === (index + 1);
        return !isLast ? <>{definition}<br/></> : definition;
    })
    
    return <span className="value">{newlinedAttributes}</span>
}

