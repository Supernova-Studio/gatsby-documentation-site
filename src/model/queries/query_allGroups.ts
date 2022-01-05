//
//  query_allPages.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";
import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"

const QueryAllGroups = (): Array<SupernovaTypes.DocumentationGroup> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllGroupsQuery>(graphql`
    query QueryAllGroups {
      allDocumentationItem(filter: {itemType: {eq: "Group"}}) {
        nodes {
          id
          persistentId
          itemType
          slug
          firstPageSlug
          parentGroupId
          parentGroupChain
          title
          isRoot
          subpageIds
          subitemIds
          subgroupIds
          groupBehavior
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

  let groups: Array<SupernovaTypes.DocumentationGroup> = []
  for (let item of data.allDocumentationItem.nodes) {
    if (item.itemType === "Group") {
      groups.push(item as any)
    }
  }
  return groups
};

export default QueryAllGroups;