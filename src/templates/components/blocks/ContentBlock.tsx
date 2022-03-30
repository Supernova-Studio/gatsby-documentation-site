//
//  ContentBlock.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryBlockById from "../../../model/queries/blocks/query_blockById"
import ContentBlockLevel from "./ContentBlockLevel"
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
  let contentBlock: JSX.Element
  switch (block.blockType) {
    case SupernovaTypes.DocumentationPageBlockType.text:
      contentBlock = <ContentBlockText block={block as SupernovaTypes.DocumentationPageBlockText} />
      break
    case SupernovaTypes.DocumentationPageBlockType.heading:
      contentBlock = <ContentBlockHeading block={block as SupernovaTypes.DocumentationPageBlockHeading} />
      break
    case SupernovaTypes.DocumentationPageBlockType.code:
      contentBlock = <ContentBlockCode block={block as SupernovaTypes.DocumentationPageBlockCode} />
      break
    case SupernovaTypes.DocumentationPageBlockType.unorderedList:
      contentBlock = <ContentBlockUnorderedList block={block as SupernovaTypes.DocumentationPageBlockUnorderedList} />
      break
    case SupernovaTypes.DocumentationPageBlockType.orderedList:
      contentBlock = <ContentBlockOrderedList block={block as SupernovaTypes.DocumentationPageBlockOrderedList} />
      break
    case SupernovaTypes.DocumentationPageBlockType.quote:
      contentBlock = <ContentBlockQuote block={block as SupernovaTypes.DocumentationPageBlockQuote} />
      break
    case SupernovaTypes.DocumentationPageBlockType.callout:
      contentBlock = <ContentBlockCallout block={block as SupernovaTypes.DocumentationPageBlockCallout} />
      break
    case SupernovaTypes.DocumentationPageBlockType.divider:
      contentBlock = <ContentBlockDivider block={block as SupernovaTypes.DocumentationPageBlockDivider} />
      break
    case SupernovaTypes.DocumentationPageBlockType.image:
      contentBlock = <ContentBlockImage block={block as SupernovaTypes.DocumentationPageBlockImage} />
      break
    case SupernovaTypes.DocumentationPageBlockType.token:
      contentBlock = <ContentBlockToken block={block as SupernovaTypes.DocumentationPageBlockToken} />
      break
    case SupernovaTypes.DocumentationPageBlockType.tokenList:
      contentBlock = <ContentBlockTokenList block={block as SupernovaTypes.DocumentationPageBlockTokenList} />
      break
    case SupernovaTypes.DocumentationPageBlockType.tokenGroup:
      contentBlock = <ContentBlockTokenGroup block={block as SupernovaTypes.DocumentationPageBlockTokenGroup} groupId={undefined} />
      break
    case SupernovaTypes.DocumentationPageBlockType.shortcuts:
      contentBlock = <ContentBlockShortcuts block={block as SupernovaTypes.DocumentationPageBlockShortcuts} />
      break
    case SupernovaTypes.DocumentationPageBlockType.link:
      contentBlock = <ContentBlockLink block={block as SupernovaTypes.DocumentationPageBlockLink} />
      break
    case SupernovaTypes.DocumentationPageBlockType.figmaEmbed:
      contentBlock = <ContentBlockFigmaEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedFigma} />
      break
    case SupernovaTypes.DocumentationPageBlockType.youtubeEmbed:
      contentBlock = <ContentBlockYoutubeEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedYoutube} />
      break
    case SupernovaTypes.DocumentationPageBlockType.storybookEmbed:
      contentBlock = <ContentBlockStorybookEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedStorybook} />
      break
    case SupernovaTypes.DocumentationPageBlockType.genericEmbed:
      contentBlock = <ContentBlockGenericEmbed block={block as SupernovaTypes.DocumentationPageBlockEmbedGeneric} />
      break
    case SupernovaTypes.DocumentationPageBlockType.figmaFrames:
      contentBlock = <ContentBlockFigmaFrames block={block as SupernovaTypes.DocumentationPageBlockFrames} />
      break
    case SupernovaTypes.DocumentationPageBlockType.custom:
      contentBlock = <ContentBlockCustom block={block as SupernovaTypes.DocumentationPageBlockCustom} />
      break
    case SupernovaTypes.DocumentationPageBlockType.renderCode:
      contentBlock = <ContentBlockRenderCode block={block as SupernovaTypes.DocumentationPageBlockRenderCode} />
      break
    case SupernovaTypes.DocumentationPageBlockType.componentAssets:
      contentBlock = <ContentBlockComponentAssets block={block as SupernovaTypes.DocumentationPageBlockAssets} />
      break
    default:
      throw new Error(`Unsupported block type ${block.blockType}`)
  }

  // Return the generated block content, and additionally generate block children, if any
  return (
    <>
      {contentBlock}
      {block.blockIds.length > 0 ? (
        <div className="block-children">
          <ContentBlockLevel blockIds={block.blockIds} />
        </div>
      ) : null}
    </>
  )
}
