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
import QueryPageById from "../../../model/queries/query_pageById"
import QueryRootGroup from "../../../model/queries/query_rootGroup"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Topbar(pageId: string) {

    const configuration = QueryConfiguration()
    const rootGroup = QueryRootGroup()
    const currentPage = QueryPageById(pageId)
    const topPage = QueryFirstPageOfGroup(rootGroup!.id)
    const logoSlug = topPage?.slug ?? null
 
    return <header id="header" className="sticky-top"> 
        <nav className="primary-menu navbar navbar-expand-lg navbar-text-dark">
            <button id="sidebarCollapse" className="toggle-navbar" type="button" />
        <a href={logoSlug}>
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
            <ul class="navbar-nav">
                {[ if shouldShowTabbar ]}
                    {[ for item in rootGroup.children ]}
                        {* Re-enable if we only want to show groups *}
                        {* {[ if item.type.equals("Group") ]} *}
                            {[ let activeClass = (pageOrGroupActiveInContext(page, item) === true ? "active" : "") /]}
                            <li><a class="typographyDocsViewNavigation {{ activeClass }}" href="{{ pageUrl(item, ds.documentationDomain()) }}">{{ item.title }}</a></li>
                        {* {[/]} *}
                    {[/]}
                {[/]}
            </ul>


            <div class="utility-nav">
            
            {[ if shouldShowTabbar ]}
            <div id="mobile-menu-container" class="dropdown">
                <button class="btn btn-secondary btn-outlined" type="button" id="mobile-menu-selector" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">   
                    
                        {[ for item in rootGroup.children ]}
                            {* Re-enable if we only want to show groups *}
                            {* {[ if item.type.equals("Group") ]} *}
                                {[ let isActive = pageOrGroupActiveInContext(page, item) /]}
                                {[ if isActive ]}
                                    {{ item.title }}
                                {[/]}
                            {* {[/]} *}
                        {[/]}
                </button>
                <div class="dropdown-menu pull-right" aria-labelledby="mobile-menu-selector">
                    {[ for item in rootGroup.children ]}
                        {* Re-enable if we only want to show groups *}
                        {* {[ if item.type.equals("Group") ]} *}
                            {[ let activeClass = (pageOrGroupActiveInContext(page, item) === true ? "checked" : "") /]}
                            <a class="dropdown-item {{ activeClass }}" href="{{ pageUrl(item, ds.documentationDomain()) }}">{{ item.title }}</a>
                        {* {[/]} *}
                    {[/]}
                </div>
            </div>
            {[/]}

            <div id="version-container" class="dropdown">
                <button class="btn btn-secondary btn-outlined" type="button" id="version-selector" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Loading
                </button>
                <div class="dropdown-menu pull-right" aria-labelledby="version-selector">
                </div>
            </div>
            <i class="fas fa-search search"></i>
            {* {[ if exportConfiguration().showVisualModeSwitch ]} - hard-disabled for now, until full customization is in place *}
            {[ if false ]}
            <i class="far fa-moon switch-theme"></i>
            {[/]}
            </div>
            
        </div>
    </nav>
</header>
<!-- Header End -->
  );
}*/
