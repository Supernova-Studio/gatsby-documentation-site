//
//  ContentBlockText.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import { UtilStrings } from "../../../../helpers/UtilStrings"
import { UtilsUrls } from "../../../../helpers/UtilUrls"
import ContentRichText from "./partials/ContentRichText"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockText(props: { block: SupernovaTypes.DocumentationPageBlockText }) {

    // Force newline from the editor when used just as newline without any text. 
    // Remove this condition if you don't want this behavior
    if (UtilsUrls.plainTextFromRichText(props.block.text).length === 0) {
        return <p>&nbsp;</p>
    } else {
        return <p><ContentRichText text={props.block.text} /></p>
    }
}
