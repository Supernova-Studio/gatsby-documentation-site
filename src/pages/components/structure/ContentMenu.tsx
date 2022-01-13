//
//  ContentMenu.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import { UtilsUrls } from "../../../helpers/UtilUrls"
import QueryBlockById from "../../../model/queries/query_blockById"
import QueryPageById from "../../../model/queries/query_pageById"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentMenu(props: { pageId: string }) {
    const page = QueryPageById(props.pageId)
    return (
        <div id="content-nav-container">
            <nav id="content-nav">
                <span className="content-nav-header">CONTENTS</span>
                <ul>
                    {page.blockIds.map(blockId => {
                        let block = QueryBlockById(blockId)
                        if (block.blockType === SupernovaTypes.DocumentationPageBlockType.heading) {
                            let headingBlock = block as SupernovaTypes.DocumentationPageBlockHeading
                            return <li key={block.id} className={headingBlock.headingType === SupernovaTypes.HeadingType.h3 ? "sub" : ""}>
                                <a href={`#${UtilsUrls.slugifyRichText(headingBlock.text)}`}>{UtilsUrls.plainTextFromRichText(headingBlock.text)}</a>
                            </li>
                        }
                    })}
                </ul>
            </nav>
        </div>
    )
}