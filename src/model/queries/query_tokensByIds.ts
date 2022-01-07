//
//  query_tokensByIds.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"
import QueryAllTokens from "./query_allTokens"

const QueryTokensByIds = (ids: Array<string>): Array<SupernovaTypes.Token> => {
  return QueryAllTokens().filter(t => ids.includes(t.id))
};

export default QueryTokensByIds;