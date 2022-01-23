//
//  SidebarFull.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React, { ReactElement } from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryFirstPageOfGroup from "../../../model/queries/query_firstPageOfGroup"
import QueryGroupById from "../../../model/queries/query_groupById"
import QueryItemsByIds from "../../../model/queries/query_itemsByIds"
import QueryPageById from "../../../model/queries/query_pageById"
import QueryRootGroup from "../../../model/queries/query_rootGroup"
import SidebarLogo from "./SidebarLogo"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function SidebarFull(props: { pageId: string; groupId: string | null }): ReactElement<any, any> {
  let rootGroup: SupernovaTypes.DocumentationGroup | null = null
  let groupChildren: Array<SupernovaTypes.DocumentationItem> = []
  let page = QueryPageById(props.pageId)

  if (props.groupId) {
    // If groupid is provided, we are generating sub-level of already existing menu and only care about this group
    rootGroup = QueryGroupById(props.groupId)
  } else {
    // If we are not showing tabbar at the top, then we want to generate from true root, and show all categories
    rootGroup = QueryRootGroup()
  }

  if (rootGroup?.subitemIds) {
    groupChildren = QueryItemsByIds(rootGroup.subitemIds as string[])
  }

  return (
    <>
      {/* Generate one level of the menu */}
      <ul className="nav flex-column full">
        {groupChildren.map((c) => {
          let isActive =
            page.parentGroupChain?.indexOf(c.id) !== -1 ||
            page.parentGroupChain?.indexOf(c.persistentId) !== -1 ||
            page.id === c.id ||
            page.id === c.persistentId
          let activeClass = isActive ? "active" : ""
          if (c.itemType === "Page") {
            return (
              <li className="nav-item">
                <a className={`nav-link typographyDocsViewNavigation ${activeClass} `} href={c.slug}>
                  {" "}
                  {c.title}
                </a>
              </li>
            )
          } else {
            const firstPageFromTop = QueryFirstPageOfGroup(c.id)
            return (
              <li className="nav-item">
                <a
                  className={`nav-link typographyDocsViewNavigation group ${activeClass}`}
                  href={`${firstPageFromTop ? firstPageFromTop.slug : undefined}`}
                >
                  {c.title}
                </a>
                {isActive ? <SidebarFull pageId={props.pageId} groupId={c.id} /> : null}
              </li>
            )
          }
        })}
      </ul>
      <SidebarLogo />
    </>
  )
}
