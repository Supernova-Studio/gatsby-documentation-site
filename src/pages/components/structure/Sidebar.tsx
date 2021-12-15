//
//  Sidebar.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { graphql, useStaticQuery } from "gatsby";
import { get } from "lodash";
import React from "react";
import QueryConfiguration from "../../../model/queries/query_configuration"
import SidebarFull from "./SidebarFull";
import SidebarTabbed from "./SidebarTabbed";

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Sidebar() {
  const configuration = QueryConfiguration()

  return (
    <div className="docs-navigation bg-sidebar">
      {configuration.tabbedNavigation ? <SidebarTabbed /> : <SidebarFull />}
    </div>
  );
}
