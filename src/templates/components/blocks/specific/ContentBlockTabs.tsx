//
//  ContentBlockTabs.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryBlockById from "../../../../model/queries/blocks/query_blockById"
import ContentBlockLevel from "../ContentBlockLevel"
import { Tab, Tabs } from "react-bootstrap"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockTabs(props: { block: SupernovaTypes.DocumentationPageBlockTabs }) {

  // Tabs are variant enabled, so we have different rendering for each mode
  if (props.block.variantKey === "Pills") {
    // Pills
    return <TabVariantPills block={props.block} />
  } else {
    // Default Tabs
    return <TabVariantTabs block={props.block} />
  }
}

function TabVariantTabs(props: { block: SupernovaTypes.DocumentationPageBlockTabs }) {

  let block = props.block
  let blockId = `T${block.id}`
  let blocks = block.blockIds.map((blockId) => QueryBlockById(blockId))

  console.log("creating tabs")
  return <Tabs id={blockId} className="nav nav-tabs nav-tabs-inline">
    { blocks.map((block, index) => {
      let tabBlock = block as SupernovaTypes.DocumentationPageBlockTabItem
      let id = `TI${tabBlock.id}`
      console.log("creating tab xxx")
      return <Tab eventKey={id} title={tabBlock.caption} className="tab-content tab-content-block">
        <ContentBlockLevel blockIds={tabBlock.blockIds} />
      </Tab>
    })}

  </Tabs>
}

function TabVariantPills(props: { block: SupernovaTypes.DocumentationPageBlockTabs }) {

  return <div></div>
}

/*
return <>
<ul className="nav nav-tabs nav-tabs-inline" id={blockId} role="tablist">
{ blocks.map((block, index) => {
  let tabBlock = block as SupernovaTypes.DocumentationPageBlockTabItem
  let id = `TI${tabBlock.id}`
  return <li className="nav-item" role="presentation">
    <a className={`nav-link ${index === 0 ? "active" : ""}`} id={`${id}-tab`} data-toggle="tab" href={`#${id}`} role="tab" aria-controls={id} aria-selected={index === 0 ? true : false}>{tabBlock.caption ?? ""}</a>
  </li>
})}
</ul>

<div className="tab-content tab-content-block" id={`${blockId}-content`}>
{ blocks.map((block, index) => {
  let tabBlock = block as SupernovaTypes.DocumentationPageBlockTabItem
  let id = `TI${tabBlock.id}`
  return <div className={`tab-pane fade ${index === 0 ? "active show" : ""}`} id={`${id}`} role="tabpanel" aria-labelledby={`${id}-tab`}>
    <ContentBlockLevel blockIds={tabBlock.blockIds} />
  </div>
})}
</div>
</>
*/