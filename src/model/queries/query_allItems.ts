//
//  query_allItems.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";
import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"

const QueryAllDocumentationItems = (): Array<SupernovaTypes.DocumentationItem> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllItemsQuery>(graphql`
  query QueryAllItems {
    allDocumentationItem {
      nodes {
        id
        persistentId
        itemType
        slug
        firstPageSlug
        parentGroupId
        parentGroupChain
        title
        configuration {
          header {
            backgroundImageAssetId
            backgroundImageAssetUrl
            backgroundImageScaleType
            alignment
            foregroundColor
            description
            minHeight
            showBackgroundOverlay
            showCoverText
          }
          showSidebar
        }
      }
    }
  }
  `);

  return data.allDocumentationItem.nodes as any
};

export default QueryAllDocumentationItems;