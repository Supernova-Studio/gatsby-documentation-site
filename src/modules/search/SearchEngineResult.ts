//
//  SearchEngineResult.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Search result

export type SearchEngineResult = {
    item: SupernovaTypes.SearchIndexEntry,
    page: SupernovaTypes.DocumentationPage | null,
    group: SupernovaTypes.DocumentationGroup | null,
    startIndex: number
    endIndex: number
}

