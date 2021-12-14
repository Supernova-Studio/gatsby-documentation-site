//
//  UtilsUrls.ts
//  Supernova Gatsby Source
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { DocumentationGroup } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationGroup"
import { DocumentationPage } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationPage"

import slugify from 'slugify'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export class UtilsUrls {

    // --- Conveniences

    static documentationObjectSlug(d: DocumentationPage | DocumentationGroup): string {

        if (!d) {
            return ""
        }

        let pageSlug: string
        if (d instanceof DocumentationPage) {
            pageSlug = d.userSlug ?? d.slug
        } else if (d instanceof DocumentationGroup) {
            pageSlug = d.title // Eventually we will introduce slugs for groups as well
        } else {
            throw new Error("Unsupported documentation slug entity")
        }

        let subpaths: Array<string> = []

        // Construct group path segments
        let parent: DocumentationGroup | null = d.parent
        while (parent) {
            subpaths.push(slugify(parent.title))
            parent = parent.parent
        }

        // Remove last segment added, because we don't care about root group
        subpaths.pop()

        // Retrieve url-safe path constructed as [group-slugs][path-slug]
        let path = [...subpaths.reverse(), pageSlug].join("/")
        return path.toLowerCase()
    }
}