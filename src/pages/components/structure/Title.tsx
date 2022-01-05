//
//  Title.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../plugins/supernova-gatsby-source/build/exports"
import QueryGroupById from "../../../model/queries/query_groupById"
import QueryPageById from "../../../model/queries/query_pageById"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Title(props: { pageId: string }) {
  
  const page = QueryPageById(props.pageId)
  
  // Get containing group. If the group represents tab, then use that group configuration to build header, 
  // and use its title as well. For non-tabbed pages, configuration is taken from the page object
  const group = QueryGroupById(page.parentGroupId!) // Page is always part of the group
  const groupIsTabContainer = group?.groupBehavior === "Tabs"
  const configuration = groupIsTabContainer ? group.configuration : page.configuration
  const header = configuration.header

  // Class / configuration for styling
  const title = groupIsTabContainer ? group.title : page.title
  const centeredClass = header.alignment === "Center" ? "centered" : ""
  const flexedClass = header.minHeight ? "flexed" : ""
  
  // Render header depending on configuration
  if (header.backgroundImageAssetUrl) {
    // Background image overrides everything if provided
    return <>
        <div className={`container-title ${centeredClass} ${flexedClass}`} style={{
            height: header.minHeight ? header.minHeight : "auto",
            background: `url(${header.backgroundImageAssetUrl}) no-repeat center center`,
            backgroundSize: header.backgroundImageScaleType === "AspectFill" ? "cover" : "contain"
        }}>
            <TitleContent page={page} title={title} header={configuration.header} />
        </div>
        <Tabs page={page} isTabContainer={groupIsTabContainer} group={group} />
    </>
  } else if (header.backgroundColor) {
    // Background color overrides transparent default is provided
    return <>
        <div className={`container-title ${centeredClass} ${flexedClass}`} style={{
            height: header.minHeight ? header.minHeight : "auto",
            backgroundColor: header.backgroundColor
        }}>
            <TitleContent page={page} title={title} header={configuration.header} />
        </div>
        <Tabs page={page} isTabContainer={groupIsTabContainer} group={group} />
    </>
  } else {
      // Default without any background configuration
    return <>
        <div className={`container-title ${centeredClass} ${flexedClass}`} style={{
            height: header.minHeight ? header.minHeight : "auto"
        }}>
            <TitleContent page={page} title={title} header={configuration.header} />
        </div>
        <Tabs page={page} isTabContainer={groupIsTabContainer} group={group} />
    </>
  }
}


function TitleContent(props: { page: SupernovaTypes.DocumentationPage, title: string, header: SupernovaTypes.DocumentationItemHeader }) {
    
    return <>
        {/* Show background overlay if enabled */}
        {props.header.showBackgroundOverlay ? <div className="container-title-overlay"></div> : null}
        <div className="slider">
            {/* Show title and descriptionif enabled */}
            { props.header.showCoverText ? <h1 style={{color: props.header.foregroundColor ? props.header.foregroundColor : undefined}}>{ props.title }</h1> : null }
            { props.header.description ? <p className="subtitle" style={{color: props.header.foregroundColor ? props.header.foregroundColor : undefined}}>{ props.header.description }</p> : null }
        </div>
    </>
}


function Tabs(props: { page: SupernovaTypes.DocumentationPage, isTabContainer: boolean, group: SupernovaTypes.DocumentationGroup }) {

    if (props.isTabContainer) {
        let pages = props.group.subpageIds.map(subpageId => {
            return QueryPageById(subpageId)
        })
        return <div className="container-tabs">    
            <div className="tabbed-navigation">
                <ul className="nav nav-tabs" id="page-tab" role="tablist">
                    { pages.map(p => {
                        return <li className="nav-item" key={`tab-${p.id}`}>
                            <a className={`nav-link ${props.page.id === p.id ? "active" : ""}`} id={`tab-${p.id}`} href={p.slug} role="tab" aria-controls="home" aria-selected="true">{p.title}</a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    } else {
        return <div className="no-container-tabs"></div>
    }
}
