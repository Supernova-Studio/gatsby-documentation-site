//
//  query_topmostGroupOfPage.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryGroupById from "./query_groupById"

const QueryTopmostGroupOfPage = (page: SupernovaTypes.DocumentationPage): SupernovaTypes.DocumentationGroup | null => {
    if (page.parentGroupChain && page.parentGroupChain.length > 1) {
        // We are not interested in root, but rather the group one below. The root is only virtual group that contains everything
        let parentId = page.parentGroupChain[page.parentGroupChain.length - 2]
        if (parentId) {
            return QueryGroupById(parentId)
        }
    } else {
        // Page is directly under root, and so we treat it as if it didn't have any group. Root is only virtual group that contains everything
        return null
    }

  return null
};

export default QueryTopmostGroupOfPage;