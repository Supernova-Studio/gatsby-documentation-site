//
//  PreviousNext.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import { UtilExporterCustomization } from "../../../helpers/UtilExporterCustomization"
import QueryPageById from "../../../model/queries/structure/query_pageById"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function PreviousNext(props: { pageId: string }) {
  // If enabled in documentation editor / configuration, will show previous / next navigation
  let shouldShowPreviousNext = UtilExporterCustomization.configurationBooleanValue("advancedCustomizationShowNextPreviousNavigation")
  if (shouldShowPreviousNext) {
    let page = QueryPageById(props.pageId)
    let previousPage = page.previousPageId ? QueryPageById(page.previousPageId) : null
    let nextPage = page.nextPageId ? QueryPageById(page.nextPageId) : null

    return <div className="previous-next row">
        { previousPage !== null ?
        <a href={ previousPage.slug } className={ nextPage !== null ? "col left" : "col-6 left" }>
        <div className="segment">
            <div className="arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.65004 5.15039L9.35004 5.86039L5.21004 10.0004H16V11.0004H5.21004L9.35004 15.1504L8.65004 15.8604L3.29004 10.5004L8.65004 5.15039Z" fill="#141618" fill-opacity="0.5"/>
                </svg>
            </div>
            <div className="segment-text">
                <div className="direction">Previous</div>
                <div className="pagename">{ previousPage.title }</div>
            </div>
            </div>
        </a>
        : null }

        { nextPage !== null ?
        <a href={ nextPage.slug } className={ previousPage !== null ? "col right" : "offset-md-6 col-6 right" }>
        <div className="segment">
            <div className="segment-text">
                <div className="direction">Next</div>
                <div className="pagename">{ nextPage.title }</div>
            </div>
            <div className="arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 5.14648L16.7071 10.5L11.3536 15.8536L10.6464 15.1465L14.7929 11H4V10H14.7929L10.6464 5.85359L11.3536 5.14648Z" fill="#141618" fill-opacity="0.5"/>
                </svg>
            </div>
            </div>
        </a>
        : null }
    </div>
  } else {
    // Previous / Next disabled
    return <></>
  }
}