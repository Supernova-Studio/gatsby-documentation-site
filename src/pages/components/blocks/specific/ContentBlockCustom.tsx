//
//  ContentBlockCustom.ts
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

export default function ContentBlockCustom(props: { block: SupernovaTypes.DocumentationPageBlockCustom }) {

    return <p>Custom block</p>
}
