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
import SidebarFull from "./SidebarFull";
import SidebarTabbed from "./SidebarTabbed";

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Sidebar() {
  const configuration =
    useStaticQuery<GatsbyTypes.DocumentationConfiguration>(graphql`
      query SidebarQuery {
        documentationConfiguration {
          tabbedNavigation
        }
      }
    `);

  return (
    <div className="docs-navigation bg-sidebar">
      {configuration.tabbedNavigation ? <SidebarTabbed /> : <SidebarFull />}
    </div>
  );
}
