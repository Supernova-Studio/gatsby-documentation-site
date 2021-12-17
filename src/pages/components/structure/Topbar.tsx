//
//  Topbar.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import QueryConfiguration from "../../../model/queries/query_configuration"
import QueryFirstPageOfGroup from "../../../model/queries/query_firstPageOfGroup"
import QueryItemsByIds from "../../../model/queries/query_itemsByIds"
import QueryPageById from "../../../model/queries/query_pageById"
import QueryRootGroup from "../../../model/queries/query_rootGroup"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Topbar(props: { pageId: string}) {

    const configuration = QueryConfiguration()
    const rootGroup = QueryRootGroup()
    let rootChildren: GatsbyTypes.DocumentationItem[] = []
    if (rootGroup?.subitemIds) {
        rootChildren = QueryItemsByIds(rootGroup.subitemIds as string[])
    }
    console.log(`root children`)
    console.log(rootChildren)
    console.log(rootGroup?.subitemIds)

    const currentPage = QueryPageById(props.pageId)
    const topPage = QueryFirstPageOfGroup(rootGroup!.id)
    const logoSlug = topPage?.slug ?? null
 
    return <header id="header" className="sticky-top"> 
        <nav className="primary-menu navbar navbar-expand-lg navbar-text-dark">
            <button id="sidebarCollapse" className="toggle-navbar" type="button" />
            <a href={logoSlug ? logoSlug : undefined}>
                <div className="logo-wrapper">
                    <img className="default" src={"logos/logo-main.svg"} alt="Documentation" />
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
                { configuration.tabbedNavigation! ? 
                    rootChildren.map(c => {
                        return <li><a className="typographyDocsViewNavigation TODO" href={c.firstPageSlug ? c.firstPageSlug : undefined}>{c.title}</a></li>
                    })
                : null}
            </ul>

            <div className="utility-nav">
                { configuration.tabbedNavigation! ?
                <div id="mobile-menu-container" className="dropdown">
                    <button className="btn btn-secondary btn-outlined" type="button" id="mobile-menu-selector" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">   
                        TODO ACTIVE TITLE
                    </button>
                    <div className="dropdown-menu pull-right" aria-labelledby="mobile-menu-selector">

                    { rootChildren.map(c => {
                            return <a className="dropdown-item TODO" href={c.slug}>{ c.title }</a>
                    }) }
                </div>

                <div id="version-container" className="dropdown">
                    <button className="btn btn-secondary btn-outlined" type="button" id="version-selector" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Loading
                    </button>
                    <div className="dropdown-menu pull-right" aria-labelledby="version-selector">
                    </div>
                </div>
                <i className="fas fa-search search"></i>
                </div> : null }
            </div>
        </div>
        </div>
        </nav>
    </header>
  
}
