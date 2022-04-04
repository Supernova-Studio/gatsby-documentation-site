//
//  UtilSearch.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import Fuse from 'fuse.js'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Utilities

export class UtilSearch {

    // --- Singleton & Constructor

    private static instance: UtilSearch

    private constructor() {}

    public static getInstance() {

        if (!UtilSearch.instance) {
            UtilSearch.instance = new UtilSearch()
        }

        this.instance.refreshIndex()

        return UtilSearch.instance
    }

    // --- Search
    
    private refreshIndex() {

        // Fetch index from GQL
    }
}