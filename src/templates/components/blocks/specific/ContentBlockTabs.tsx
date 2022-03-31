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
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockTabs(props: { block: SupernovaTypes.DocumentationPageBlockTabs }) {

  // Tabs are variant enabled, so we have different rendering for each mode
  console.log(`variant key: ${props.block.variantKey}`)
  if (props.block.variantKey === "pills") {
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

  return <Tabs id={blockId} className="nav nav-tabs nav-tabs-inline">
    { blocks.map((block, index) => {
      let tabBlock = block as SupernovaTypes.DocumentationPageBlockTabItem
      let id = `TI${tabBlock.id}`
      return <Tab eventKey={id} title={tabBlock.caption} className="tab-content tab-content-block">
        <ContentBlockLevel blockIds={tabBlock.blockIds} />
      </Tab>
    })}

  </Tabs>
}

function TabVariantPills(props: { block: SupernovaTypes.DocumentationPageBlockTabs }) {

  let block = props.block
  let blockId = `T${block.id}`
  let blocks = block.blockIds.map((blockId) => QueryBlockById(blockId))

  return <Tab.Container id={blockId}>
  <Row className="row no-gutters tab-pills">
    <Col sm={3}>
      <Nav variant="pills" className="nav nav-pills flex-sm-column">
        { blocks.map((block, index) => {
          let tabBlock = block as SupernovaTypes.DocumentationPageBlockTabItem
          let id = `TI${tabBlock.id}`
          return <Nav.Item>
            <Nav.Link eventKey={id} className={"nav-item"}>{tabBlock.caption}</Nav.Link>
          </Nav.Item>
        })}
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content className="tab-content tab-content-block">
        { blocks.map((block, index) => {
          let tabBlock = block as SupernovaTypes.DocumentationPageBlockTabItem
          let id = `TI${tabBlock.id}`
          return <Tab.Pane eventKey={id} className="tab-pane fade">
            <ContentBlockLevel blockIds={tabBlock.blockIds} />
          </Tab.Pane>
        })}
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
}