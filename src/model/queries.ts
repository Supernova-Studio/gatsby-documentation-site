//
//  queries.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

import { graphql } from "gatsby"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

interface CreateBlogPostPagesQuery {
    stuff: string
}

export class QueryEngine {

    static async queryPages() {
        /*
        const result = await graphql`
            query {
                allDocumentationPage {
                nodes {
                    id
                    persistentId
                    slug
                    title
                    type
                    children {
                        id
                    }
                }
            }     
        `

        return data.allDocumentationPage.nodes
        */
    }
}


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Implementation

export async function exportStuff() {

}