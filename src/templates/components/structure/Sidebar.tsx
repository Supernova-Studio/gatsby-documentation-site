//
//  Sidebar.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import QueryConfiguration from "../../../model/queries/configuration/query_configuration"
import SidebarFull from "./SidebarFull"
import SidebarTabbed from "./SidebarTabbed"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Sidebar(props: { pageId: string }) {
  const configuration = QueryConfiguration()

  return (
    <div className="docs-navigation bg-sidebar">
      {configuration.tabbedNavigation ? (
        <SidebarTabbed pageId={props.pageId} groupId={null} />
      ) : (
        <SidebarFull pageId={props.pageId} groupId={null} />
      )}
    </div>
  )
}
