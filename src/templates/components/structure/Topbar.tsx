//
//  Topbar.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryConfiguration from "../../../model/queries/query_configuration"
import QueryFirstPageOfGroup from "../../../model/queries/query_firstPageOfGroup"
import QueryItemsByIds from "../../../model/queries/query_itemsByIds"
import QueryPageById from "../../../model/queries/query_pageById"
import QueryRootGroup from "../../../model/queries/query_rootGroup"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Topbar(props: { pageId: string | null }) {
  const configuration = QueryConfiguration()
  const rootGroup = QueryRootGroup()
  let rootChildren: SupernovaTypes.DocumentationItem[] = []
  if (rootGroup?.subitemIds) {
    rootChildren = QueryItemsByIds(rootGroup.subitemIds as string[])
  }

  let currentPage: SupernovaTypes.DocumentationPage | null = null
  if (props.pageId) {
    currentPage = QueryPageById(props.pageId)
  }
  let activeChild: SupernovaTypes.DocumentationItem | null = null
  if (props.pageId) {
    for (let child of rootChildren) {
      if (
        currentPage?.parentGroupChain?.indexOf(child.id) !== -1 ||
        currentPage?.parentGroupChain?.indexOf(child.persistentId) !== -1 ||
        currentPage.id === child.id ||
        currentPage.id === child.persistentId
      ) {
        activeChild = child
      }
    }
  }

  return (
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg navbar-text-dark">
        <button id="sidebarCollapse" className="toggle-navbar" type="button" />
        <a href="/">
          <div className="logo-wrapper">
            <img className="default" src={"/logos/logo-main.svg"} alt="Documentation" />
            {/* TODO: Dynamic logo */}
            {/*
          {[ if (exportConfiguration().headerLogo && exportConfiguration().headerLogo.assetUrl) ]}
              <img class="default" src="{{ exportConfiguration().headerLogo.assetUrl }}" alt="Our Documentation" />
          {[ else ]}
              <img class="default" src="{{ assetUrl("logos/logo-main.svg", domain) }}" alt="Our Documentation" />
          {[/]}
          */}
          </div>
        </a>

        <div className="container-fluid">
          <div id="header-nav" className="navbar-collapse">
            <ul className="navbar-nav">
              {configuration.tabbedNavigation!
                ? rootChildren.map((c) => {
                    const visualClasses = `typographyDocsViewNavigation ${
                      activeChild?.id === c.id || activeChild?.id === c.persistentId ? "active" : ""
                    }`
                    const href = c.firstPageSlug ? c.firstPageSlug : undefined
                    return (
                      <li key={`link-${c.id}`}>
                        <a className={visualClasses} href={href}>
                          {c.title}
                        </a>
                      </li>
                    )
                  })
                : null}
            </ul>

            <div className="utility-nav">
              {configuration.tabbedNavigation! ? (
                <div id="mobile-menu-container" className="dropdown">
                  <button
                    className="btn btn-secondary btn-outlined"
                    type="button"
                    id="mobile-menu-selector"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {activeChild?.title ?? ""}
                  </button>
                  <div className="dropdown-menu pull-right" aria-labelledby="mobile-menu-selector">
                    {rootChildren.map((c) => {
                      const visualClasses = `dropdown-item ${
                        activeChild?.id === c.id || activeChild?.id === c.persistentId ? "active" : ""
                      }`
                      const href = c.firstPageSlug ? c.firstPageSlug : undefined
                      return (
                        <a className={visualClasses} href={href} key={`link-${c.id}-mobile`}>
                          {c.title}
                        </a>
                      )
                    })}
                  </div>
                </div>
              ) : null}
              <div id="version-container" className="dropdown">
                {/* Currently not used - future version dropdown
                  <button className="btn btn-secondary btn-outlined" type="button" id="version-selector" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Loading
                  </button>
                */}
                <div className="dropdown-menu pull-right" aria-labelledby="version-selector"></div>
              </div>
              <i className="fas fa-search search"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
