
//
//  UtilsStrings.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Utilities

export class UtilStrings {

    /** Escape special characters in the given string of text. Encoding part taken from https://github.com/component/escape-html */
    static highlightSafeText(text: SupernovaTypes.DocumentationPageBlockTextRich) {
        let string = text.spans.map((s) => s.text).join("")
        return UtilStrings.escapeHtml(string)
    }

    static escapeHtml(string: string) {
        var matchHtmlRegExp = /["'&<>]/
        var str = "" + string
        var match = matchHtmlRegExp.exec(str)

        if (!match) {
            return str
        }

        var escape
        var html = ""
        var index = 0
        var lastIndex = 0

        for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
                case 34: // "
                    escape = "&quot;"
                    break
                case 38: // &
                    escape = "&amp;"
                    break
                case 39: // '
                    escape = "&#39;"
                    break
                case 60: // <
                    escape = "&lt;"
                    break
                case 62: // >
                    escape = "&gt;"
                    break
                default:
                    continue
            }

            if (lastIndex !== index) {
                html += str.substring(lastIndex, index)
            }

            lastIndex = index + 1
            html += escape
        }

        return lastIndex !== index ? html + str.substring(lastIndex, index) : html
    }
}







