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
import Fuse from "fuse.js"
import QueryAllSearchEntries from "../../model/queries/search/query_allSearchIndexEntries"
import { SearchEngineResult } from "./SearchEngineResult"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Search implementation

export class SearchEngine {

  // --- Singleton & Constructor

  private static instance: SearchEngine
  private fuseEngine: Fuse<SupernovaTypes.SearchIndexEntry>

  private constructor(engine: Fuse<SupernovaTypes.SearchIndexEntry>) {
    this.fuseEngine = engine
  }
  
  public static getInstance() {
    if (!SearchEngine.instance) {
      // Fetch index from GQL which was built by Supernova search engine
      let searchEntries = QueryAllSearchEntries()
      let engine = new Fuse(searchEntries, {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        ignoreLocation: true,
        keys: ["text"]
    })

      // Create singleton
      SearchEngine.instance = new SearchEngine(engine)
    }
    return SearchEngine.instance
  }


  // --- Search

  search(query: string): Array<SearchEngineResult> {
    let pattern = `${query}`
    let results = this.fuseEngine.search(pattern)
    console.log(results)
    return []
  }
}
