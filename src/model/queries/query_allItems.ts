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
import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/gql_types/SupernovaTypes"

const QueryAllItems = (): Array<SupernovaTypes.DocumentationItem> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllItemsQuery>(graphql`
    query QueryAllItems {
      allDocumentationItem {
        nodes {
            parent {
              id
            }
            internal {
              contentDigest
            }
            children {
              id
            }
            id
            slug
            title
            itemType
            firstPageSlug
            blockIds
            isRoot
            parentGroupChain
            parentGroupId
            subgroupIds
            subitemIds
            subpageIds

        }
      }
    }
  `);

  return data.allDocumentationItem.nodes as any
};

export default QueryAllItems;