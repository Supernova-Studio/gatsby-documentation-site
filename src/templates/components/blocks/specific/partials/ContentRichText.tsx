//
//  ContentRichText.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentRichText(props: { text: SupernovaTypes.DocumentationPageBlockTextRich }) {

    return <>{props.text.spans.map(s => {
        let object = <>{s.text}</>
        for (let attribute of s.attributes) {
            switch (attribute.type) {
                case SupernovaTypes.RichTextSpanAttributeType.link: object = <RichAttributeWrapper attribute={children => <a href={attribute.link ?? undefined}>{children}</a>} children={object} />; break;
                case SupernovaTypes.RichTextSpanAttributeType.bold: object = <RichAttributeWrapper attribute={children => <strong>{children}</strong>} children={object} />; break;
                case SupernovaTypes.RichTextSpanAttributeType.italic: object = <RichAttributeWrapper attribute={children => <i>{children}</i>} children={object} />; break;
                case SupernovaTypes.RichTextSpanAttributeType.strikethrough: object = <RichAttributeWrapper attribute={children => <s>{children}</s>} children={object} />; break;
                case SupernovaTypes.RichTextSpanAttributeType.code: object = <RichAttributeWrapper attribute={children => <mark>{children}</mark>} children={object} />; break;
            }
        }
        return object
    })}</>
}

const RichAttributeWrapper = ({ attribute, children }: { attribute: (children: JSX.Element) => JSX.Element, children: JSX.Element}) => {
    return attribute(children)
}