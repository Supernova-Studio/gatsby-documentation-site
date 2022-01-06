//
//  ContentBlock.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../plugins/supernova-gatsby-source/build/exports"
import QueryBlockById from "../../../model/queries/query_blockById"
import ContentBlockCallout from "./specific/ContentBlockCallout"
import ContentBlockCode from "./specific/ContentBlockCode"
import ContentBlockComponentAssets from "./specific/ContentBlockComponentAssets"
import ContentBlockCustom from "./specific/ContentBlockCustom"
import ContentBlockDivider from "./specific/ContentBlockDivider"
import ContentBlockFigmaEmbed from "./specific/ContentBlockFigmaEmbed"
import ContentBlockFigmaFrames from "./specific/ContentBlockFigmaFrames"
import ContentBlockGenericEmbed from "./specific/ContentBlockGenericEmbed"
import ContentBlockHeading from "./specific/ContentBlockHeading"
import ContentBlockImage from "./specific/ContentBlockImage"
import ContentBlockLink from "./specific/ContentBlockLink"
import ContentBlockOrderedList from "./specific/ContentBlockOrderedList"
import ContentBlockQuote from "./specific/ContentBlockQuote"
import ContentBlockRenderCode from "./specific/ContentBlockRenderCode"
import ContentBlockShortcuts from "./specific/ContentBlockShortcuts"
import ContentBlockStorybookEmbed from "./specific/ContentBlockStorybookEmbed"
import ContentBlockText from "./specific/ContentBlockText"
import ContentBlockToken from "./specific/ContentBlockToken"
import ContentBlockTokenGroup from "./specific/ContentBlockTokenGroup"
import ContentBlockTokenList from "./specific/ContentBlockTokenList"
import ContentBlockUnorderedList from "./specific/ContentBlockUnorderedList"
import ContentBlockYoutubeEmbed from "./specific/ContentBlockYoutubeEmbed"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlock(props: { blockId: string }) {

    let block = QueryBlockById(props.blockId)
    switch (block.blockType) {
      case SupernovaTypes.DocumentationPageBlockType.text: return <ContentBlockText block={block as SupernovaTypes.DocumentationPageBlockText} />
      case SupernovaTypes.DocumentationPageBlockType.heading: return <ContentBlockHeading block={block as SupernovaTypes.DocumentationPageBlockHeading} />
      case SupernovaTypes.DocumentationPageBlockType.code: return <ContentBlockCode block={block as SupernovaTypes.DocumentationPageBlockCode} />
      case SupernovaTypes.DocumentationPageBlockType.unorderedList: return <ContentBlockUnorderedList block={block as SupernovaTypes.DocumentationPageBlockUnorderedList} />
      case SupernovaTypes.DocumentationPageBlockType.orderedList: return <ContentBlockOrderedList block={block as SupernovaTypes.DocumentationPageBlockOrderedList} />
      case SupernovaTypes.DocumentationPageBlockType.quote: return <ContentBlockQuote block={block as SupernovaTypes.DocumentationPageBlockQuote} />
      case SupernovaTypes.DocumentationPageBlockType.callout: return <ContentBlockCallout block={block as SupernovaTypes.DocumentationPageBlockCallout} />
      case SupernovaTypes.DocumentationPageBlockType.divider: return <ContentBlockDivider block={block as SupernovaTypes.DocumentationPageBlockDivider} />
      case SupernovaTypes.DocumentationPageBlockType.image: return <ContentBlockImage block={block as SupernovaTypes.DocumentationPageBlockImage} />
      case SupernovaTypes.DocumentationPageBlockType.token: return <ContentBlockToken block={block as SupernovaTypes.DocumentationPageBlockToken} />
      case SupernovaTypes.DocumentationPageBlockType.tokenList: return <ContentBlockTokenList block={block as SupernovaTypes.DocumentationPageBlockTokenList} />
      case SupernovaTypes.DocumentationPageBlockType.tokenGroup: return <ContentBlockTokenGroup block={block as SupernovaTypes.DocumentationPageBlockTokenGroup} />
      case SupernovaTypes.DocumentationPageBlockType.shortcuts: return <ContentBlockShortcuts block={block as SupernovaTypes.DocumentationPageBlockShortcuts} />
      case SupernovaTypes.DocumentationPageBlockType.link: return <ContentBlockLink block={block as SupernovaTypes.DocumentationPageBlockLink} />
      case SupernovaTypes.DocumentationPageBlockType.figmaEmbed: return <ContentBlockFigmaEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedFigma} />
      case SupernovaTypes.DocumentationPageBlockType.youtubeEmbed: return <ContentBlockYoutubeEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedYoutube} />
      case SupernovaTypes.DocumentationPageBlockType.storybookEmbed: return <ContentBlockStorybookEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedStorybook} />
      case SupernovaTypes.DocumentationPageBlockType.genericEmbed: return <ContentBlockGenericEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedGeneric} />
      case SupernovaTypes.DocumentationPageBlockType.figmaFrames: return <ContentBlockFigmaFrames block={block as SupernovaTypes.DocumentationPageBlockFrames} />
      case SupernovaTypes.DocumentationPageBlockType.custom: return <ContentBlockCustom block={block as SupernovaTypes.DocumentationPageBlockCustom} />
      case SupernovaTypes.DocumentationPageBlockType.renderCode: return <ContentBlockRenderCode block={block as SupernovaTypes.DocumentationPageBlockRenderCode} />
      case SupernovaTypes.DocumentationPageBlockType.componentAssets: return <ContentBlockComponentAssets block={block as SupernovaTypes.DocumentationPageBlockAssets} />
      default: throw new Error(`Unsupported block type ${block.blockType}`)
    }
}
