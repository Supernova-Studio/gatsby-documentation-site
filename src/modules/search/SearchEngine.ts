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
import QueryAllGroups from "../../model/queries/structure/query_allGroups"
import QueryAllPages from "../../model/queries/structure/query_allPages"
import { SearchEngineResult } from "./SearchEngineResult"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Search implementation

export class SearchEngine {

  // --- Properties

  private static instance: SearchEngine
  private fuseEngine: Fuse<SupernovaTypes.SearchIndexEntry>

  private indexedPages: Map<string, SupernovaTypes.DocumentationPage>
  private indexedGroups: Map<string, SupernovaTypes.DocumentationGroup>


  // --- Singleton & Constructor

  private constructor(
    engine: Fuse<SupernovaTypes.SearchIndexEntry>,
    pages: Array<SupernovaTypes.DocumentationPage>,
    groups: Array<SupernovaTypes.DocumentationGroup>
  ) {
    this.fuseEngine = engine

    this.indexedGroups = new Map()
    this.indexedPages = new Map()
    pages.forEach((p) => this.indexedPages.set(p.id, p))
    groups.forEach((g) => this.indexedGroups.set(g.id, g))
  }

  public static getInstance() {

    if (!SearchEngine.instance) {
      // Fetch index and data from GQL which was built by Supernova search engine
      let searchEntries = QueryAllSearchEntries()
      let groups = QueryAllGroups()
      let pages = QueryAllPages()

      // Change behavior of search by tweaking the attributes. This settings is quite strict, but you can make it more fuzzy if you want to
      // https://fusejs.io/api/options.html for more details
      let fuseOptions = {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        ignoreLocation: true,
        keys: ["text"],
      }
      let engine = new Fuse(searchEntries, fuseOptions)

      // Create singleton
      SearchEngine.instance = new SearchEngine(engine, pages, groups)
    }

    return SearchEngine.instance
  }

  // --- Search

  search(query: string): Array<SearchEngineResult> {

    // Search using Fuse
    let pattern = `${query}`
    let entries = this.fuseEngine.search(pattern)
    return this.entriesIntoResults(query, entries)
  }

  private entriesIntoResults(query: string, results: Array<Fuse.FuseResult<SupernovaTypes.SearchIndexEntry>>): Array<SearchEngineResult> {

    return results.map((r) => {
      let startIndex = r.item.text.toLowerCase().indexOf(query.toLowerCase())
      let endIndex = startIndex + query.length
      return {
        item: r.item,
        page: this.entryOriginIfPage(r.item.origin),
        group: this.entryOriginIfGroup(r.item.origin),
        startIndex: startIndex,
        endIndex: endIndex,
      }
    })
  }

  private entryOriginIfPage(origin: SupernovaTypes.SearchIndexOrigin): SupernovaTypes.DocumentationPage | null {

    if (origin.pageId) {
      return this.indexedPages.get(origin.pageId)! // Guaranteed to be present or data model has some bigger issues :)
    }
    return null
  }

  private entryOriginIfGroup(origin: SupernovaTypes.SearchIndexOrigin): SupernovaTypes.DocumentationGroup | null {

    if (origin.groupId) {
      return this.indexedGroups.get(origin.groupId)! // Guaranteed to be present or data model has some bigger issues :)
    }
    return null
  }
}
