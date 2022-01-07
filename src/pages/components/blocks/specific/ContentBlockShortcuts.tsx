//
//  CotnentBlockShortcuts.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../../plugins/supernova-gatsby-source/build/exports"
import ContentShortcut from "./partials/ContentShortcut"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockShortcuts(props: { block: SupernovaTypes.DocumentationPageBlockShortcuts }) {

    return <div className={`tile-container`}>
        <div className={`grid c4 shortcuts`}>
            {props.block.shortcuts.map(s => <ContentShortcut shortcut={s} />)}
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