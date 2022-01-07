//
//  query_tokenById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"
import QueryTokenGroupById from "./query_tokenGroupById"
import QueryTokensByIds from "./query_tokensByIds"

const QueryTokensByGroupId = (groupId: string): Array<SupernovaTypes.Token> => {
    return QueryTokensByIds(QueryTokenGroupById(groupId).tokenIds)
};

export default QueryTokensByGroupId;