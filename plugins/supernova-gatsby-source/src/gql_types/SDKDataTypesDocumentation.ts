import { SNCalloutType, SNContentAlignment, SNDocumentationItemType, SNDocumentationPageBlockCodeLiveSandboxType, SNDocumentationPageBlockType, SNFrameAlignment, SNFrameLayout, SNHeaderAlignment, SNHeadingType, SNRichTextSpanAttributeType, SNShortcutType } from "./SDKDataTypesEnums"
import { SNGraphQLNode } from "./SDKDataTypesGraphQL"

export type SNDocumentationItem = SNGraphQLNode & {
    id: string
    persistentId: string
    title: string
    type: SNDocumentationItemType
}

export type SNDocumentationGroup = SNDocumentationItem & {
    isRoot: boolean
    childrenIds: Array<string>
    children: Array<SNDocumentationItem>
    parent: SNDocumentationGroup | null
}

export type SNDocumentationPage = SNGraphQLNode & SNDocumentationItem & {
    slug: string
    userSlug: string | null
    blocks: Array<SNDocumentationPageBlock>
    parent: SNDocumentationGroup
}

export type SNDocumentationPageStyle = {
    title: string
    textAlignment: SNHeaderAlignment
    description: string | null
    backgroundColor: string | null
    backgroundImage: string | null
    headerHeight: number | null
    hideSidebar: boolean
    invertHeader: boolean
}


export type SNDocumentationConfiguration = {
    tabbedNavigation: boolean
}

//
// Data Types
// Subcategory: SNDocumentation Text

export type SNDocumentationRichText = {
    spans: Array<SNDocumentationRichTextSpan>
}

export type SNDocumentationRichTextSpan = {
    text: string
    attributes: Array<SNDocumentationRichTextSpanAttribute>
}

export type SNDocumentationRichTextSpanAttribute = {
    type: SNRichTextSpanAttributeType
    link: string | null
}

//
// Data Types
// Subcategory: SNDocumentation Blocks

export type SNDocumentationPageBlock = SNGraphQLNode & {
    id: string
    children: Array<SNDocumentationPageBlock>
    type: SNDocumentationPageBlockType
}

export type SNDocumentationPageBlockCallout = SNDocumentationPageBlockText & {
    calloutType: SNCalloutType
}

export type SNDocumentationPageBlockCode = SNDocumentationPageBlockText & {
    codeLanguage: string | null
    caption: string | null
}

export type SNDocumentationPageBlockCodeLive = SNDocumentationPageBlock & {
    alignment: SNContentAlignment
    backgroundColor: string | null
    showCode: boolean
    code: string
    sandboxData: string
    sandboxType: SNDocumentationPageBlockCodeLiveSandboxType
}

export type SNDocumentationPageBlockDivider = SNDocumentationPageBlock & {
    // No extra attributes
}

export type SNDocumentationPageBlockHeading = SNDocumentationPageBlockText & {
    headingType: SNHeadingType
}

export type SNDocumentationPageBlockImage = SNDocumentationPageBlock & {
    url: string | null
    caption: string | null
    alignment: SNContentAlignment
}

export type SNDocumentationPageBlockLink = SNDocumentationPageBlock & {
    url: string | null
}

export type SNDocumentationPageBlockOrderedList = SNDocumentationPageBlockText & {
    // No extra attributes
}

export type SNDocumentationPageBlockQuote = SNDocumentationPageBlockText & {
    // No extra attributes
}

export type SNDocumentationPageBlockText = SNDocumentationPageBlock & {
    text: SNDocumentationRichText
}

export type SNDocumentationPageBlockToken = SNDocumentationPageBlock & {
    tokenId: string
}

export type SNDocumentationPageBlockTokenGroup = SNDocumentationPageBlock & {
    groupId: string
}

export type SNDocumentationPageBlockTokenList = SNDocumentationPageBlock & {
    tokenIds: Array<string>
}

export type SNDocumentationPageBlockUnorderedList = SNDocumentationPageBlockText & {
    // No extra attributes
}

export type SNDocumentationPageBlockEmbedFigma = SNDocumentationPageBlock & {
    url: string | null
}

export type SNDocumentationPageBlockEmbedUrl = SNDocumentationPageBlock & {
    url: string | null
    title: string | null
    description: string | null
    thumbnailUrl: string | null
}

export type SNDocumentationPageBlockEmbedYoutube = SNDocumentationPageBlock & {
    url: string | null
}

export type SNDocumentationPageBlockFrames = SNDocumentationPageBlock & {
    frames: Array<SNDocumentationPageBlockFrame>
    properties: {
    alignment: SNFrameAlignment,
    layout: SNFrameLayout,
    backgroundColor: string | null
    }
}

export type SNDocumentationPageBlockFrame = {
    sourceFileId: string
    sourceFrameId: string
    sourceFileName: string

    title: string
    description: string | null
    previewUrl: string | null
    backgroundColor: string | null
}

export type SNDocumentationPageBlockShortcuts = SNDocumentationPageBlock & {
    shortcuts: Array<SNDocumentationPageBlockShortcut>
}

export type SNDocumentationPageBlockShortcut = {
    
    // Visual data
    title: string | null
    description: string | null
    previewUrl: string | null

    // Linking data
    externalUrl: string | null
    internalId: string | null

    // Block type
    type: SNShortcutType
}
