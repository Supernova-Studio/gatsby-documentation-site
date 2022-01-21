//
//  ContentBlockDivider.ts
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

export default function ContentBlockDivider(props: { block: SupernovaTypes.DocumentationPageBlockDivider }) {

    return <hr className="divider" />
}
