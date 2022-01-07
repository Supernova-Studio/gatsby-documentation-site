//
//  ContentBlockLevel.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../plugins/supernova-gatsby-source/build/exports"
import QueryBlockById from "../../../model/queries/query_blockById"
import ContentBlock from "./ContentBlock"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockLevel(props: { blockIds: Array<string> }) {

    let blocks = props.blockIds.map(blockId => QueryBlockById(blockId))
    let resultingElements: Array<JSX.Element> = []
    console.log("c")
    while (blocks.length > 0) {
        console.log(`starting blocks: ${blocks.length}`)
        let subblocks = seekAllBlocksOfUniqueType(blocks)
        // Handle special situations where blocks need to be contained
        if (subblocks[0].blockType === SupernovaTypes.DocumentationPageBlockType.unorderedList) {
            // Contain blocks of the same level as <ul>
            resultingElements.push(<ul>
                {subblocks.map(b => <ContentBlock blockId={b.id}/>)}
            </ul>)
        } else if (subblocks[0].blockType === SupernovaTypes.DocumentationPageBlockType.orderedList) {
            // Contain blocks of the same level as <ol>
            resultingElements.push(<ol>
                {subblocks.map(b => <ContentBlock blockId={b.id}/>)}
            </ol>)
        } else {
            // No containment for blocks that are of different type, such as paragraphs etc.
            resultingElements.push(<>
                {subblocks.map(b => <ContentBlock blockId={b.id}/>)}
            </>)
        }
        blocks.splice(0, subblocks.length)
        console.log(`ending blocks: ${blocks.length}`)
    }

    return <>
        {resultingElements}
    </>
}

function seekAllBlocksOfUniqueType(blocks: Array<SupernovaTypes.DocumentationPageBlock>): Array<SupernovaTypes.DocumentationPageBlock> {
    let resultingBlocks: Array<SupernovaTypes.DocumentationPageBlock> = []
    for (let block of blocks) {
        resultingBlocks.push(block)
        if (block.endsTypeChain) {
            console.log(`block batch`)
            console.log(resultingBlocks)
            return resultingBlocks
        }
    }
    return resultingBlocks
}
