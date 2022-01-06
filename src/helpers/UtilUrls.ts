//
//  UtilsUrls.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

import { SupernovaTypes } from "../../plugins/supernova-gatsby-source/build/exports"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Utilities

export class UtilsUrls {

    // --- Conveniences

    static plainTextFromRichText(text: SupernovaTypes.DocumentationPageBlockTextRich): string {
        return text.spans.map((s) => s.text).join("")
    }

    static slugifyRichText(text: SupernovaTypes.DocumentationPageBlockTextRich): string {
        let str = UtilsUrls.plainTextFromRichText(text)

        if (!str) {
            return ""
        }

        // Thanks to https://gist.github.com/codeguy/6684588
        str = str.replace(/^\s+|\s+$/g, "")
        str = str.toLowerCase()

        // remove accents, swap ñ for n, etc
        var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;"
        var to = "aaaaaeeeeiiiioooouuuunc------"

        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
        }

        str = str
            .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
            .replace(/\s+/g, "-") // collapse whitespace and replace by -
            .replace(/-+/g, "-") // collapse dashes

        return str
    }
}