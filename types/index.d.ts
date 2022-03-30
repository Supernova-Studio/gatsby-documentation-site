/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Workspace = Node & {
  readonly id: Scalars['ID'];
  readonly handle: Scalars['String'];
  readonly name: Scalars['String'];
  readonly color: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DesignSystem = Node & {
  readonly id: Scalars['ID'];
  readonly workspaceId: Scalars['String'];
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly isPublic: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DesignSystemVersion = Node & {
  readonly id: Scalars['ID'];
  readonly designSystemId: Scalars['String'];
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly version: Scalars['String'];
  readonly changeLog: Maybe<Scalars['String']>;
  readonly isReadOnly: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Brand = Node & {
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DocumentationItem = Node & {
  readonly persistentId: Scalars['String'];
  readonly title: Scalars['String'];
  readonly configuration: Maybe<DocumentationItemConfiguration>;
  readonly itemType: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly firstPageSlug: Maybe<Scalars['String']>;
  readonly parentGroupId: Maybe<Scalars['String']>;
  readonly parentGroupChain: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly isRoot: Maybe<Scalars['Boolean']>;
  readonly subpageIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly subgroupIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly subitemIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly groupBehavior: Maybe<Scalars['String']>;
  readonly blockIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nextPageId: Maybe<Scalars['String']>;
  readonly previousPageId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DocumentationItemConfiguration = {
  readonly header: DocumentationItemHeader;
  readonly showSidebar: Scalars['Boolean'];
};

type DocumentationItemHeader = {
  readonly backgroundImageAssetUrl: Maybe<Scalars['String']>;
  readonly backgroundImageAssetId: Maybe<Scalars['String']>;
  readonly backgroundImageScaleType: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly alignment: Scalars['String'];
  readonly foregroundColor: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly showBackgroundOverlay: Scalars['Boolean'];
  readonly showCoverText: Scalars['Boolean'];
  readonly minHeight: Maybe<Scalars['Float']>;
};

type DocumentationBlock = Node & {
  readonly beginsTypeChain: Scalars['Boolean'];
  readonly endsTypeChain: Scalars['Boolean'];
  readonly blockIds: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly blockType: Scalars['String'];
  readonly groupId: Maybe<Scalars['String']>;
  readonly variantKey: Maybe<Scalars['String']>;
  readonly showNestedGroups: Maybe<Scalars['Boolean']>;
  readonly text: Maybe<DocumentationBlockText>;
  readonly calloutType: Maybe<Scalars['String']>;
  readonly headingType: Maybe<Scalars['Int']>;
  readonly assets: Maybe<ReadonlyArray<Maybe<DocumentationBlockAsset>>>;
  readonly frames: Maybe<ReadonlyArray<Maybe<DocumentationBlockFigmaFrame>>>;
  readonly shortcuts: Maybe<ReadonlyArray<Maybe<DocumentationBlockShortcut>>>;
  readonly properties: Maybe<DocumentationBlockProperties>;
  readonly url: Maybe<Scalars['String']>;
  readonly size: Maybe<Size>;
  readonly caption: Maybe<Scalars['String']>;
  readonly codeLanguage: Maybe<Scalars['String']>;
  readonly alignment: Maybe<Scalars['String']>;
  readonly key: Maybe<Scalars['String']>;
  readonly block: Maybe<DocumentationCustomBlock>;
  readonly blockProperties: Maybe<ReadonlyArray<Maybe<DocumentationCustomBlockProperty>>>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly showCode: Maybe<Scalars['Boolean']>;
  readonly code: Maybe<Scalars['String']>;
  readonly packageJSON: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly sandboxData: Maybe<Scalars['String']>;
  readonly sandboxType: Maybe<Scalars['String']>;
  readonly tokenIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly thumbnailUrl: Maybe<Scalars['String']>;
  readonly columnId: Maybe<Scalars['String']>;
  readonly tableProperties: Maybe<DocumentationTableProperties>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DocumentationTableProperties = {
  readonly showBorders: Scalars['Boolean'];
  readonly columns: ReadonlyArray<Maybe<DocumentationTableColumn>>;
};

type DocumentationTableColumn = {
  readonly id: Maybe<Scalars['String']>;
  readonly width: Maybe<MeasureTokenValue>;
};

type DocumentationBlockText = {
  readonly spans: Maybe<ReadonlyArray<Maybe<DocumentationBlockTextSpan>>>;
};

type DocumentationBlockTextSpan = {
  readonly text: Maybe<Scalars['String']>;
  readonly attributes: Maybe<ReadonlyArray<Maybe<DocumentationBlockTextSpansAttribute>>>;
};

type DocumentationBlockTextSpansAttribute = {
  readonly link: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type DocumentationBlockAsset = {
  readonly assetId: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly previewUrl: Maybe<Scalars['String']>;
};

type DocumentationBlockFigmaFrame = {
  readonly sourceFileId: Maybe<Scalars['String']>;
  readonly sourceFrameId: Maybe<Scalars['String']>;
  readonly sourceFileName: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly previewUrl: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
};

type DocumentationBlockShortcut = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly previewUrl: Maybe<Scalars['String']>;
  readonly externalUrl: Maybe<Scalars['String']>;
  readonly internalId: Maybe<Scalars['String']>;
  readonly shortcutType: Maybe<Scalars['String']>;
};

type DocumentationBlockProperties = {
  readonly color: Maybe<Scalars['String']>;
  readonly alignment: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly markdownUrl: Maybe<Scalars['String']>;
};

type Size = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type DocumentationCustomBlock = {
  readonly key: Scalars['String'];
  readonly title: Scalars['String'];
  readonly category: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly iconUrl: Maybe<Scalars['String']>;
};

type DocumentationCustomBlockProperty = {
  readonly label: Maybe<Scalars['String']>;
  readonly key: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly default: Maybe<Scalars['String']>;
  readonly value: Maybe<MultitypeValue>;
};

type Asset = Node & {
  readonly brandId: Scalars['String'];
  readonly thumbnailUrl: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly componentId: Maybe<Scalars['String']>;
  readonly previouslyDuplicatedNames: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DocumentationConfiguration = Node & {
  readonly tabbedNavigation: Maybe<Scalars['Boolean']>;
  readonly storybookError: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Token = Node & {
  readonly id: Scalars['ID'];
  readonly brandId: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly tokenType: Scalars['String'];
  readonly origin: Maybe<SourceOrigin>;
  readonly properties: ReadonlyArray<Maybe<TokenProperty>>;
  readonly value: Maybe<TokenValue>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type TokenValue = {
  readonly hex: Maybe<Scalars['String']>;
  readonly r: Maybe<Scalars['Int']>;
  readonly g: Maybe<Scalars['Int']>;
  readonly b: Maybe<Scalars['Int']>;
  readonly a: Maybe<Scalars['Int']>;
  readonly font: Maybe<FontTokenValue>;
  readonly fontSize: Maybe<MeasureTokenValue>;
  readonly textDecoration: Maybe<Scalars['String']>;
  readonly textCase: Maybe<Scalars['String']>;
  readonly letterSpacing: Maybe<MeasureTokenValue>;
  readonly lineHeight: Maybe<MeasureTokenValue>;
  readonly paragraphIndent: Maybe<MeasureTokenValue>;
  readonly radius: Maybe<MeasureTokenValue>;
  readonly topLeft: Maybe<MeasureTokenValue>;
  readonly topRight: Maybe<MeasureTokenValue>;
  readonly bottomLeft: Maybe<MeasureTokenValue>;
  readonly bottomRight: Maybe<MeasureTokenValue>;
  readonly color: Maybe<ColorTokenValue>;
  readonly x: Maybe<MeasureTokenValue>;
  readonly y: Maybe<MeasureTokenValue>;
  readonly spread: Maybe<MeasureTokenValue>;
  readonly opacity: Maybe<Scalars['Float']>;
  readonly type: Maybe<Scalars['String']>;
  readonly unit: Maybe<Scalars['String']>;
  readonly measure: Maybe<Scalars['Float']>;
  readonly family: Maybe<Scalars['String']>;
  readonly subfamily: Maybe<Scalars['String']>;
  readonly width: Maybe<MeasureTokenValue>;
  readonly position: Maybe<Scalars['String']>;
  readonly to: Maybe<GradientPosition>;
  readonly from: Maybe<GradientPosition>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly stops: Maybe<ReadonlyArray<Maybe<GradientStopValue>>>;
  readonly text: Maybe<Scalars['String']>;
  readonly referencedTokenId: Maybe<Scalars['String']>;
};

type ColorTokenValue = {
  readonly hex: Maybe<Scalars['String']>;
  readonly r: Maybe<Scalars['Int']>;
  readonly g: Maybe<Scalars['Int']>;
  readonly b: Maybe<Scalars['Int']>;
  readonly a: Maybe<Scalars['Int']>;
  readonly referencedTokenId: Maybe<Scalars['String']>;
};

type FontTokenValue = {
  readonly family: Maybe<Scalars['String']>;
  readonly subfamily: Maybe<Scalars['String']>;
  readonly referencedTokenId: Maybe<Scalars['String']>;
};

type MeasureTokenValue = {
  readonly unit: Maybe<Scalars['String']>;
  readonly measure: Maybe<Scalars['Float']>;
  readonly referencedTokenId: Maybe<Scalars['String']>;
};

type GradientStopValue = {
  readonly position: Maybe<Scalars['Int']>;
  readonly color: Maybe<ColorTokenValue>;
  readonly referencedTokenId: Maybe<Scalars['String']>;
};

type GradientPosition = {
  readonly x: Maybe<Scalars['Float']>;
  readonly y: Maybe<Scalars['Float']>;
};

type TokenProperty = {
  readonly name: Maybe<Scalars['String']>;
  readonly codeName: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly stringValue: Maybe<Scalars['String']>;
  readonly booleanValue: Maybe<Scalars['String']>;
  readonly numericValue: Maybe<Scalars['String']>;
};

type SourceOrigin = {
  readonly source: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
};

type GroupToken = Node & {
  readonly brandId: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly description: Scalars['String'];
  readonly tokenType: Maybe<Scalars['String']>;
  readonly isRoot: Maybe<Scalars['Boolean']>;
  readonly childrenIds: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly subgroupIds: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly tokenIds: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly parentId: Maybe<Scalars['String']>;
  readonly path: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type MultitypeValue = {
  readonly stringValue: Maybe<Scalars['String']>;
  readonly booleanValue: Maybe<Scalars['Boolean']>;
  readonly numericValue: Maybe<Scalars['Float']>;
  readonly imageValue: Maybe<MultitypeImageValue>;
  readonly colorValue: Maybe<MultitypeColorValue>;
  readonly typographyValue: Maybe<MultitypeTypographyValue>;
};

type MultitypeImageValue = {
  readonly assetUrl: Maybe<Scalars['String']>;
  readonly assetId: Maybe<Scalars['String']>;
};

type MultitypeColorValue = {
  readonly aliasTo: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type MultitypeTypographyValue = {
  readonly aliasTo: Maybe<Scalars['String']>;
  readonly value: Maybe<TypographyTokenValue>;
};

type TypographyTokenValue = {
  readonly font: Maybe<FontTokenValue>;
  readonly fontSize: Maybe<MeasureTokenValue>;
  readonly textDecoration: Maybe<Scalars['String']>;
  readonly textCase: Maybe<Scalars['String']>;
  readonly letterSpacing: Maybe<MeasureTokenValue>;
  readonly lineHeight: Maybe<MeasureTokenValue>;
  readonly paragraphIndent: Maybe<MeasureTokenValue>;
};

type ExporterBlock = Node & {
  readonly key: Scalars['String'];
  readonly title: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
  readonly iconUrl: Maybe<Scalars['String']>;
  readonly mode: Maybe<Scalars['String']>;
  readonly properties: Maybe<ReadonlyArray<Maybe<ExporterBlockProperty>>>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ExporterBlockProperty = {
  readonly label: Scalars['String'];
  readonly key: Scalars['String'];
  readonly type: Scalars['String'];
  readonly inputType: Maybe<Scalars['String']>;
  readonly isMultiline: Maybe<Scalars['Boolean']>;
  readonly default: Maybe<MultitypeValue>;
  readonly values: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type ExporterBlockVariant = Node & {
  readonly blockKey: Scalars['String'];
  readonly variantKey: Scalars['String'];
  readonly name: Scalars['String'];
  readonly isDefault: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ExporterConfigurationProperty = Node & {
  readonly label: Scalars['String'];
  readonly category: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly key: Scalars['String'];
  readonly type: Scalars['String'];
  readonly inputType: Maybe<Scalars['String']>;
  readonly isMultiline: Maybe<Scalars['Boolean']>;
  readonly default: Maybe<MultitypeValue>;
  readonly value: Maybe<MultitypeValue>;
  readonly values: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Exporter = Node & {
  readonly id: Scalars['ID'];
  readonly packageId: Scalars['String'];
  readonly isPrivate: Scalars['Boolean'];
  readonly isDefaultDocumentationExporter: Scalars['Boolean'];
  readonly usesBrands: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly version: Scalars['String'];
  readonly author: Maybe<Scalars['String']>;
  readonly organization: Maybe<Scalars['String']>;
  readonly homepage: Maybe<Scalars['String']>;
  readonly readme: Maybe<Scalars['String']>;
  readonly iconURL: Maybe<Scalars['String']>;
  readonly tags: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly origin: ExporterOrigin;
  readonly contributes: ExporterContribution;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ExporterOrigin = {
  readonly repositoryUrl: Scalars['String'];
  readonly repositoryBranch: Maybe<Scalars['String']>;
  readonly repositoryDirectory: Maybe<Scalars['String']>;
};

type ExporterContribution = {
  readonly customBlocks: ReadonlyArray<Maybe<ExporterBlock>>;
  readonly customConfigurationProperties: ReadonlyArray<Maybe<ExporterConfigurationProperty>>;
  readonly customBlockVariants: ReadonlyArray<Maybe<ExporterBlockVariant>>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly workspace: Maybe<Workspace>;
  readonly allWorkspace: WorkspaceConnection;
  readonly designSystem: Maybe<DesignSystem>;
  readonly allDesignSystem: DesignSystemConnection;
  readonly designSystemVersion: Maybe<DesignSystemVersion>;
  readonly allDesignSystemVersion: DesignSystemVersionConnection;
  readonly brand: Maybe<Brand>;
  readonly allBrand: BrandConnection;
  readonly documentationItem: Maybe<DocumentationItem>;
  readonly allDocumentationItem: DocumentationItemConnection;
  readonly documentationBlock: Maybe<DocumentationBlock>;
  readonly allDocumentationBlock: DocumentationBlockConnection;
  readonly asset: Maybe<Asset>;
  readonly allAsset: AssetConnection;
  readonly documentationConfiguration: Maybe<DocumentationConfiguration>;
  readonly allDocumentationConfiguration: DocumentationConfigurationConnection;
  readonly token: Maybe<Token>;
  readonly allToken: TokenConnection;
  readonly groupToken: Maybe<GroupToken>;
  readonly allGroupToken: GroupTokenConnection;
  readonly exporterBlock: Maybe<ExporterBlock>;
  readonly allExporterBlock: ExporterBlockConnection;
  readonly exporterBlockVariant: Maybe<ExporterBlockVariant>;
  readonly allExporterBlockVariant: ExporterBlockVariantConnection;
  readonly exporterConfigurationProperty: Maybe<ExporterConfigurationProperty>;
  readonly allExporterConfigurationProperty: ExporterConfigurationPropertyConnection;
  readonly exporter: Maybe<Exporter>;
  readonly allExporter: ExporterConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_workspaceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  handle: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  color: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWorkspaceArgs = {
  filter: Maybe<WorkspaceFilterInput>;
  sort: Maybe<WorkspaceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_designSystemArgs = {
  id: Maybe<StringQueryOperatorInput>;
  workspaceId: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  isPublic: Maybe<BooleanQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDesignSystemArgs = {
  filter: Maybe<DesignSystemFilterInput>;
  sort: Maybe<DesignSystemSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_designSystemVersionArgs = {
  id: Maybe<StringQueryOperatorInput>;
  designSystemId: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  changeLog: Maybe<StringQueryOperatorInput>;
  isReadOnly: Maybe<BooleanQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDesignSystemVersionArgs = {
  filter: Maybe<DesignSystemVersionFilterInput>;
  sort: Maybe<DesignSystemVersionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_brandArgs = {
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allBrandArgs = {
  filter: Maybe<BrandFilterInput>;
  sort: Maybe<BrandSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_documentationItemArgs = {
  persistentId: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  configuration: Maybe<DocumentationItemConfigurationFilterInput>;
  itemType: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  firstPageSlug: Maybe<StringQueryOperatorInput>;
  parentGroupId: Maybe<StringQueryOperatorInput>;
  parentGroupChain: Maybe<StringQueryOperatorInput>;
  isRoot: Maybe<BooleanQueryOperatorInput>;
  subpageIds: Maybe<StringQueryOperatorInput>;
  subgroupIds: Maybe<StringQueryOperatorInput>;
  subitemIds: Maybe<StringQueryOperatorInput>;
  groupBehavior: Maybe<StringQueryOperatorInput>;
  blockIds: Maybe<StringQueryOperatorInput>;
  nextPageId: Maybe<StringQueryOperatorInput>;
  previousPageId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDocumentationItemArgs = {
  filter: Maybe<DocumentationItemFilterInput>;
  sort: Maybe<DocumentationItemSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_documentationBlockArgs = {
  beginsTypeChain: Maybe<BooleanQueryOperatorInput>;
  endsTypeChain: Maybe<BooleanQueryOperatorInput>;
  blockIds: Maybe<StringQueryOperatorInput>;
  blockType: Maybe<StringQueryOperatorInput>;
  groupId: Maybe<StringQueryOperatorInput>;
  variantKey: Maybe<StringQueryOperatorInput>;
  showNestedGroups: Maybe<BooleanQueryOperatorInput>;
  text: Maybe<DocumentationBlockTextFilterInput>;
  calloutType: Maybe<StringQueryOperatorInput>;
  headingType: Maybe<IntQueryOperatorInput>;
  assets: Maybe<DocumentationBlockAssetFilterListInput>;
  frames: Maybe<DocumentationBlockFigmaFrameFilterListInput>;
  shortcuts: Maybe<DocumentationBlockShortcutFilterListInput>;
  properties: Maybe<DocumentationBlockPropertiesFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  size: Maybe<SizeFilterInput>;
  caption: Maybe<StringQueryOperatorInput>;
  codeLanguage: Maybe<StringQueryOperatorInput>;
  alignment: Maybe<StringQueryOperatorInput>;
  key: Maybe<StringQueryOperatorInput>;
  block: Maybe<DocumentationCustomBlockFilterInput>;
  blockProperties: Maybe<DocumentationCustomBlockPropertyFilterListInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  showCode: Maybe<BooleanQueryOperatorInput>;
  code: Maybe<StringQueryOperatorInput>;
  packageJSON: Maybe<StringQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  sandboxData: Maybe<StringQueryOperatorInput>;
  sandboxType: Maybe<StringQueryOperatorInput>;
  tokenIds: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  thumbnailUrl: Maybe<StringQueryOperatorInput>;
  columnId: Maybe<StringQueryOperatorInput>;
  tableProperties: Maybe<DocumentationTablePropertiesFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDocumentationBlockArgs = {
  filter: Maybe<DocumentationBlockFilterInput>;
  sort: Maybe<DocumentationBlockSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_assetArgs = {
  brandId: Maybe<StringQueryOperatorInput>;
  thumbnailUrl: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  componentId: Maybe<StringQueryOperatorInput>;
  previouslyDuplicatedNames: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allAssetArgs = {
  filter: Maybe<AssetFilterInput>;
  sort: Maybe<AssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_documentationConfigurationArgs = {
  tabbedNavigation: Maybe<BooleanQueryOperatorInput>;
  storybookError: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDocumentationConfigurationArgs = {
  filter: Maybe<DocumentationConfigurationFilterInput>;
  sort: Maybe<DocumentationConfigurationSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_tokenArgs = {
  id: Maybe<StringQueryOperatorInput>;
  brandId: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  tokenType: Maybe<StringQueryOperatorInput>;
  origin: Maybe<SourceOriginFilterInput>;
  properties: Maybe<TokenPropertyFilterListInput>;
  value: Maybe<TokenValueFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allTokenArgs = {
  filter: Maybe<TokenFilterInput>;
  sort: Maybe<TokenSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_groupTokenArgs = {
  brandId: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  tokenType: Maybe<StringQueryOperatorInput>;
  isRoot: Maybe<BooleanQueryOperatorInput>;
  childrenIds: Maybe<StringQueryOperatorInput>;
  subgroupIds: Maybe<StringQueryOperatorInput>;
  tokenIds: Maybe<StringQueryOperatorInput>;
  parentId: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGroupTokenArgs = {
  filter: Maybe<GroupTokenFilterInput>;
  sort: Maybe<GroupTokenSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_exporterBlockArgs = {
  key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  category: Maybe<StringQueryOperatorInput>;
  iconUrl: Maybe<StringQueryOperatorInput>;
  mode: Maybe<StringQueryOperatorInput>;
  properties: Maybe<ExporterBlockPropertyFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allExporterBlockArgs = {
  filter: Maybe<ExporterBlockFilterInput>;
  sort: Maybe<ExporterBlockSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_exporterBlockVariantArgs = {
  blockKey: Maybe<StringQueryOperatorInput>;
  variantKey: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  isDefault: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allExporterBlockVariantArgs = {
  filter: Maybe<ExporterBlockVariantFilterInput>;
  sort: Maybe<ExporterBlockVariantSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_exporterConfigurationPropertyArgs = {
  label: Maybe<StringQueryOperatorInput>;
  category: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  key: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  inputType: Maybe<StringQueryOperatorInput>;
  isMultiline: Maybe<BooleanQueryOperatorInput>;
  default: Maybe<MultitypeValueFilterInput>;
  value: Maybe<MultitypeValueFilterInput>;
  values: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allExporterConfigurationPropertyArgs = {
  filter: Maybe<ExporterConfigurationPropertyFilterInput>;
  sort: Maybe<ExporterConfigurationPropertySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_exporterArgs = {
  id: Maybe<StringQueryOperatorInput>;
  packageId: Maybe<StringQueryOperatorInput>;
  isPrivate: Maybe<BooleanQueryOperatorInput>;
  isDefaultDocumentationExporter: Maybe<BooleanQueryOperatorInput>;
  usesBrands: Maybe<BooleanQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  author: Maybe<StringQueryOperatorInput>;
  organization: Maybe<StringQueryOperatorInput>;
  homepage: Maybe<StringQueryOperatorInput>;
  readme: Maybe<StringQueryOperatorInput>;
  iconURL: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  origin: Maybe<ExporterOriginFilterInput>;
  contributes: Maybe<ExporterContributionFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allExporterArgs = {
  filter: Maybe<ExporterFilterInput>;
  sort: Maybe<ExporterSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'port'
  | 'host'
  | 'pathPrefix'
  | 'polyfill'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WorkspaceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WorkspaceEdge>;
  readonly nodes: ReadonlyArray<Workspace>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<WorkspaceGroupConnection>;
};


type WorkspaceConnection_distinctArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceConnection_maxArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceConnection_minArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceConnection_sumArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WorkspaceFieldsEnum;
};

type WorkspaceEdge = {
  readonly next: Maybe<Workspace>;
  readonly node: Workspace;
  readonly previous: Maybe<Workspace>;
};

type WorkspaceFieldsEnum =
  | 'id'
  | 'handle'
  | 'name'
  | 'color'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WorkspaceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WorkspaceEdge>;
  readonly nodes: ReadonlyArray<Workspace>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<WorkspaceGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type WorkspaceGroupConnection_distinctArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceGroupConnection_maxArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceGroupConnection_minArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceGroupConnection_sumArgs = {
  field: WorkspaceFieldsEnum;
};


type WorkspaceGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WorkspaceFieldsEnum;
};

type WorkspaceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly handle: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WorkspaceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WorkspaceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DesignSystemConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DesignSystemEdge>;
  readonly nodes: ReadonlyArray<DesignSystem>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DesignSystemGroupConnection>;
};


type DesignSystemConnection_distinctArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemConnection_maxArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemConnection_minArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemConnection_sumArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DesignSystemFieldsEnum;
};

type DesignSystemEdge = {
  readonly next: Maybe<DesignSystem>;
  readonly node: DesignSystem;
  readonly previous: Maybe<DesignSystem>;
};

type DesignSystemFieldsEnum =
  | 'id'
  | 'workspaceId'
  | 'name'
  | 'description'
  | 'isPublic'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DesignSystemGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DesignSystemEdge>;
  readonly nodes: ReadonlyArray<DesignSystem>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DesignSystemGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DesignSystemGroupConnection_distinctArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemGroupConnection_maxArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemGroupConnection_minArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemGroupConnection_sumArgs = {
  field: DesignSystemFieldsEnum;
};


type DesignSystemGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DesignSystemFieldsEnum;
};

type DesignSystemFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly workspaceId: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly isPublic: Maybe<BooleanQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DesignSystemSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DesignSystemFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DesignSystemVersionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DesignSystemVersionEdge>;
  readonly nodes: ReadonlyArray<DesignSystemVersion>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DesignSystemVersionGroupConnection>;
};


type DesignSystemVersionConnection_distinctArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionConnection_maxArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionConnection_minArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionConnection_sumArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DesignSystemVersionFieldsEnum;
};

type DesignSystemVersionEdge = {
  readonly next: Maybe<DesignSystemVersion>;
  readonly node: DesignSystemVersion;
  readonly previous: Maybe<DesignSystemVersion>;
};

type DesignSystemVersionFieldsEnum =
  | 'id'
  | 'designSystemId'
  | 'name'
  | 'description'
  | 'version'
  | 'changeLog'
  | 'isReadOnly'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DesignSystemVersionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DesignSystemVersionEdge>;
  readonly nodes: ReadonlyArray<DesignSystemVersion>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DesignSystemVersionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DesignSystemVersionGroupConnection_distinctArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionGroupConnection_maxArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionGroupConnection_minArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionGroupConnection_sumArgs = {
  field: DesignSystemVersionFieldsEnum;
};


type DesignSystemVersionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DesignSystemVersionFieldsEnum;
};

type DesignSystemVersionFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly designSystemId: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly changeLog: Maybe<StringQueryOperatorInput>;
  readonly isReadOnly: Maybe<BooleanQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DesignSystemVersionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DesignSystemVersionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type BrandConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BrandEdge>;
  readonly nodes: ReadonlyArray<Brand>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<BrandGroupConnection>;
};


type BrandConnection_distinctArgs = {
  field: BrandFieldsEnum;
};


type BrandConnection_maxArgs = {
  field: BrandFieldsEnum;
};


type BrandConnection_minArgs = {
  field: BrandFieldsEnum;
};


type BrandConnection_sumArgs = {
  field: BrandFieldsEnum;
};


type BrandConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BrandFieldsEnum;
};

type BrandEdge = {
  readonly next: Maybe<Brand>;
  readonly node: Brand;
  readonly previous: Maybe<Brand>;
};

type BrandFieldsEnum =
  | 'id'
  | 'name'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type BrandGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BrandEdge>;
  readonly nodes: ReadonlyArray<Brand>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<BrandGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type BrandGroupConnection_distinctArgs = {
  field: BrandFieldsEnum;
};


type BrandGroupConnection_maxArgs = {
  field: BrandFieldsEnum;
};


type BrandGroupConnection_minArgs = {
  field: BrandFieldsEnum;
};


type BrandGroupConnection_sumArgs = {
  field: BrandFieldsEnum;
};


type BrandGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BrandFieldsEnum;
};

type BrandFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type BrandSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<BrandFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DocumentationItemConfigurationFilterInput = {
  readonly header: Maybe<DocumentationItemHeaderFilterInput>;
  readonly showSidebar: Maybe<BooleanQueryOperatorInput>;
};

type DocumentationItemHeaderFilterInput = {
  readonly backgroundImageAssetUrl: Maybe<StringQueryOperatorInput>;
  readonly backgroundImageAssetId: Maybe<StringQueryOperatorInput>;
  readonly backgroundImageScaleType: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly alignment: Maybe<StringQueryOperatorInput>;
  readonly foregroundColor: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly showBackgroundOverlay: Maybe<BooleanQueryOperatorInput>;
  readonly showCoverText: Maybe<BooleanQueryOperatorInput>;
  readonly minHeight: Maybe<FloatQueryOperatorInput>;
};

type DocumentationItemConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocumentationItemEdge>;
  readonly nodes: ReadonlyArray<DocumentationItem>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocumentationItemGroupConnection>;
};


type DocumentationItemConnection_distinctArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemConnection_maxArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemConnection_minArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemConnection_sumArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DocumentationItemFieldsEnum;
};

type DocumentationItemEdge = {
  readonly next: Maybe<DocumentationItem>;
  readonly node: DocumentationItem;
  readonly previous: Maybe<DocumentationItem>;
};

type DocumentationItemFieldsEnum =
  | 'persistentId'
  | 'title'
  | 'configuration.header.backgroundImageAssetUrl'
  | 'configuration.header.backgroundImageAssetId'
  | 'configuration.header.backgroundImageScaleType'
  | 'configuration.header.description'
  | 'configuration.header.alignment'
  | 'configuration.header.foregroundColor'
  | 'configuration.header.backgroundColor'
  | 'configuration.header.showBackgroundOverlay'
  | 'configuration.header.showCoverText'
  | 'configuration.header.minHeight'
  | 'configuration.showSidebar'
  | 'itemType'
  | 'slug'
  | 'firstPageSlug'
  | 'parentGroupId'
  | 'parentGroupChain'
  | 'isRoot'
  | 'subpageIds'
  | 'subgroupIds'
  | 'subitemIds'
  | 'groupBehavior'
  | 'blockIds'
  | 'nextPageId'
  | 'previousPageId'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DocumentationItemGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocumentationItemEdge>;
  readonly nodes: ReadonlyArray<DocumentationItem>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocumentationItemGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DocumentationItemGroupConnection_distinctArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemGroupConnection_maxArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemGroupConnection_minArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemGroupConnection_sumArgs = {
  field: DocumentationItemFieldsEnum;
};


type DocumentationItemGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DocumentationItemFieldsEnum;
};

type DocumentationItemFilterInput = {
  readonly persistentId: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly configuration: Maybe<DocumentationItemConfigurationFilterInput>;
  readonly itemType: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly firstPageSlug: Maybe<StringQueryOperatorInput>;
  readonly parentGroupId: Maybe<StringQueryOperatorInput>;
  readonly parentGroupChain: Maybe<StringQueryOperatorInput>;
  readonly isRoot: Maybe<BooleanQueryOperatorInput>;
  readonly subpageIds: Maybe<StringQueryOperatorInput>;
  readonly subgroupIds: Maybe<StringQueryOperatorInput>;
  readonly subitemIds: Maybe<StringQueryOperatorInput>;
  readonly groupBehavior: Maybe<StringQueryOperatorInput>;
  readonly blockIds: Maybe<StringQueryOperatorInput>;
  readonly nextPageId: Maybe<StringQueryOperatorInput>;
  readonly previousPageId: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DocumentationItemSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DocumentationItemFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DocumentationBlockTextFilterInput = {
  readonly spans: Maybe<DocumentationBlockTextSpanFilterListInput>;
};

type DocumentationBlockTextSpanFilterListInput = {
  readonly elemMatch: Maybe<DocumentationBlockTextSpanFilterInput>;
};

type DocumentationBlockTextSpanFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly attributes: Maybe<DocumentationBlockTextSpansAttributeFilterListInput>;
};

type DocumentationBlockTextSpansAttributeFilterListInput = {
  readonly elemMatch: Maybe<DocumentationBlockTextSpansAttributeFilterInput>;
};

type DocumentationBlockTextSpansAttributeFilterInput = {
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type DocumentationBlockAssetFilterListInput = {
  readonly elemMatch: Maybe<DocumentationBlockAssetFilterInput>;
};

type DocumentationBlockAssetFilterInput = {
  readonly assetId: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly previewUrl: Maybe<StringQueryOperatorInput>;
};

type DocumentationBlockFigmaFrameFilterListInput = {
  readonly elemMatch: Maybe<DocumentationBlockFigmaFrameFilterInput>;
};

type DocumentationBlockFigmaFrameFilterInput = {
  readonly sourceFileId: Maybe<StringQueryOperatorInput>;
  readonly sourceFrameId: Maybe<StringQueryOperatorInput>;
  readonly sourceFileName: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly previewUrl: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
};

type DocumentationBlockShortcutFilterListInput = {
  readonly elemMatch: Maybe<DocumentationBlockShortcutFilterInput>;
};

type DocumentationBlockShortcutFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly previewUrl: Maybe<StringQueryOperatorInput>;
  readonly externalUrl: Maybe<StringQueryOperatorInput>;
  readonly internalId: Maybe<StringQueryOperatorInput>;
  readonly shortcutType: Maybe<StringQueryOperatorInput>;
};

type DocumentationBlockPropertiesFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly alignment: Maybe<StringQueryOperatorInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly markdownUrl: Maybe<StringQueryOperatorInput>;
};

type SizeFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type DocumentationCustomBlockFilterInput = {
  readonly key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly iconUrl: Maybe<StringQueryOperatorInput>;
};

type DocumentationCustomBlockPropertyFilterListInput = {
  readonly elemMatch: Maybe<DocumentationCustomBlockPropertyFilterInput>;
};

type DocumentationCustomBlockPropertyFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly key: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<MultitypeValueFilterInput>;
};

type MultitypeValueFilterInput = {
  readonly stringValue: Maybe<StringQueryOperatorInput>;
  readonly booleanValue: Maybe<BooleanQueryOperatorInput>;
  readonly numericValue: Maybe<FloatQueryOperatorInput>;
  readonly imageValue: Maybe<MultitypeImageValueFilterInput>;
  readonly colorValue: Maybe<MultitypeColorValueFilterInput>;
  readonly typographyValue: Maybe<MultitypeTypographyValueFilterInput>;
};

type MultitypeImageValueFilterInput = {
  readonly assetUrl: Maybe<StringQueryOperatorInput>;
  readonly assetId: Maybe<StringQueryOperatorInput>;
};

type MultitypeColorValueFilterInput = {
  readonly aliasTo: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
};

type MultitypeTypographyValueFilterInput = {
  readonly aliasTo: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<TypographyTokenValueFilterInput>;
};

type TypographyTokenValueFilterInput = {
  readonly font: Maybe<FontTokenValueFilterInput>;
  readonly fontSize: Maybe<MeasureTokenValueFilterInput>;
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
  readonly textCase: Maybe<StringQueryOperatorInput>;
  readonly letterSpacing: Maybe<MeasureTokenValueFilterInput>;
  readonly lineHeight: Maybe<MeasureTokenValueFilterInput>;
  readonly paragraphIndent: Maybe<MeasureTokenValueFilterInput>;
};

type FontTokenValueFilterInput = {
  readonly family: Maybe<StringQueryOperatorInput>;
  readonly subfamily: Maybe<StringQueryOperatorInput>;
  readonly referencedTokenId: Maybe<StringQueryOperatorInput>;
};

type MeasureTokenValueFilterInput = {
  readonly unit: Maybe<StringQueryOperatorInput>;
  readonly measure: Maybe<FloatQueryOperatorInput>;
  readonly referencedTokenId: Maybe<StringQueryOperatorInput>;
};

type DocumentationTablePropertiesFilterInput = {
  readonly showBorders: Maybe<BooleanQueryOperatorInput>;
  readonly columns: Maybe<DocumentationTableColumnFilterListInput>;
};

type DocumentationTableColumnFilterListInput = {
  readonly elemMatch: Maybe<DocumentationTableColumnFilterInput>;
};

type DocumentationTableColumnFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<MeasureTokenValueFilterInput>;
};

type DocumentationBlockConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocumentationBlockEdge>;
  readonly nodes: ReadonlyArray<DocumentationBlock>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocumentationBlockGroupConnection>;
};


type DocumentationBlockConnection_distinctArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockConnection_maxArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockConnection_minArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockConnection_sumArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DocumentationBlockFieldsEnum;
};

type DocumentationBlockEdge = {
  readonly next: Maybe<DocumentationBlock>;
  readonly node: DocumentationBlock;
  readonly previous: Maybe<DocumentationBlock>;
};

type DocumentationBlockFieldsEnum =
  | 'beginsTypeChain'
  | 'endsTypeChain'
  | 'blockIds'
  | 'blockType'
  | 'groupId'
  | 'variantKey'
  | 'showNestedGroups'
  | 'text.spans'
  | 'text.spans.text'
  | 'text.spans.attributes'
  | 'text.spans.attributes.link'
  | 'text.spans.attributes.type'
  | 'calloutType'
  | 'headingType'
  | 'assets'
  | 'assets.assetId'
  | 'assets.title'
  | 'assets.description'
  | 'assets.backgroundColor'
  | 'assets.previewUrl'
  | 'frames'
  | 'frames.sourceFileId'
  | 'frames.sourceFrameId'
  | 'frames.sourceFileName'
  | 'frames.title'
  | 'frames.description'
  | 'frames.previewUrl'
  | 'frames.backgroundColor'
  | 'shortcuts'
  | 'shortcuts.title'
  | 'shortcuts.description'
  | 'shortcuts.previewUrl'
  | 'shortcuts.externalUrl'
  | 'shortcuts.internalId'
  | 'shortcuts.shortcutType'
  | 'properties.color'
  | 'properties.alignment'
  | 'properties.layout'
  | 'properties.markdownUrl'
  | 'url'
  | 'size.width'
  | 'size.height'
  | 'caption'
  | 'codeLanguage'
  | 'alignment'
  | 'key'
  | 'block.key'
  | 'block.title'
  | 'block.category'
  | 'block.description'
  | 'block.iconUrl'
  | 'blockProperties'
  | 'blockProperties.label'
  | 'blockProperties.key'
  | 'blockProperties.type'
  | 'blockProperties.default'
  | 'blockProperties.value.stringValue'
  | 'blockProperties.value.booleanValue'
  | 'blockProperties.value.numericValue'
  | 'blockProperties.value.imageValue.assetUrl'
  | 'blockProperties.value.imageValue.assetId'
  | 'blockProperties.value.colorValue.aliasTo'
  | 'blockProperties.value.colorValue.value'
  | 'blockProperties.value.typographyValue.aliasTo'
  | 'backgroundColor'
  | 'showCode'
  | 'code'
  | 'packageJSON'
  | 'height'
  | 'sandboxData'
  | 'sandboxType'
  | 'tokenIds'
  | 'title'
  | 'description'
  | 'thumbnailUrl'
  | 'columnId'
  | 'tableProperties.showBorders'
  | 'tableProperties.columns'
  | 'tableProperties.columns.id'
  | 'tableProperties.columns.width.unit'
  | 'tableProperties.columns.width.measure'
  | 'tableProperties.columns.width.referencedTokenId'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DocumentationBlockGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocumentationBlockEdge>;
  readonly nodes: ReadonlyArray<DocumentationBlock>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocumentationBlockGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DocumentationBlockGroupConnection_distinctArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockGroupConnection_maxArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockGroupConnection_minArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockGroupConnection_sumArgs = {
  field: DocumentationBlockFieldsEnum;
};


type DocumentationBlockGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DocumentationBlockFieldsEnum;
};

type DocumentationBlockFilterInput = {
  readonly beginsTypeChain: Maybe<BooleanQueryOperatorInput>;
  readonly endsTypeChain: Maybe<BooleanQueryOperatorInput>;
  readonly blockIds: Maybe<StringQueryOperatorInput>;
  readonly blockType: Maybe<StringQueryOperatorInput>;
  readonly groupId: Maybe<StringQueryOperatorInput>;
  readonly variantKey: Maybe<StringQueryOperatorInput>;
  readonly showNestedGroups: Maybe<BooleanQueryOperatorInput>;
  readonly text: Maybe<DocumentationBlockTextFilterInput>;
  readonly calloutType: Maybe<StringQueryOperatorInput>;
  readonly headingType: Maybe<IntQueryOperatorInput>;
  readonly assets: Maybe<DocumentationBlockAssetFilterListInput>;
  readonly frames: Maybe<DocumentationBlockFigmaFrameFilterListInput>;
  readonly shortcuts: Maybe<DocumentationBlockShortcutFilterListInput>;
  readonly properties: Maybe<DocumentationBlockPropertiesFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<SizeFilterInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly codeLanguage: Maybe<StringQueryOperatorInput>;
  readonly alignment: Maybe<StringQueryOperatorInput>;
  readonly key: Maybe<StringQueryOperatorInput>;
  readonly block: Maybe<DocumentationCustomBlockFilterInput>;
  readonly blockProperties: Maybe<DocumentationCustomBlockPropertyFilterListInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly showCode: Maybe<BooleanQueryOperatorInput>;
  readonly code: Maybe<StringQueryOperatorInput>;
  readonly packageJSON: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly sandboxData: Maybe<StringQueryOperatorInput>;
  readonly sandboxType: Maybe<StringQueryOperatorInput>;
  readonly tokenIds: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly thumbnailUrl: Maybe<StringQueryOperatorInput>;
  readonly columnId: Maybe<StringQueryOperatorInput>;
  readonly tableProperties: Maybe<DocumentationTablePropertiesFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DocumentationBlockSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DocumentationBlockFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type AssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AssetEdge>;
  readonly nodes: ReadonlyArray<Asset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AssetGroupConnection>;
};


type AssetConnection_distinctArgs = {
  field: AssetFieldsEnum;
};


type AssetConnection_maxArgs = {
  field: AssetFieldsEnum;
};


type AssetConnection_minArgs = {
  field: AssetFieldsEnum;
};


type AssetConnection_sumArgs = {
  field: AssetFieldsEnum;
};


type AssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: AssetFieldsEnum;
};

type AssetEdge = {
  readonly next: Maybe<Asset>;
  readonly node: Asset;
  readonly previous: Maybe<Asset>;
};

type AssetFieldsEnum =
  | 'brandId'
  | 'thumbnailUrl'
  | 'name'
  | 'description'
  | 'componentId'
  | 'previouslyDuplicatedNames'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type AssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AssetEdge>;
  readonly nodes: ReadonlyArray<Asset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type AssetGroupConnection_distinctArgs = {
  field: AssetFieldsEnum;
};


type AssetGroupConnection_maxArgs = {
  field: AssetFieldsEnum;
};


type AssetGroupConnection_minArgs = {
  field: AssetFieldsEnum;
};


type AssetGroupConnection_sumArgs = {
  field: AssetFieldsEnum;
};


type AssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: AssetFieldsEnum;
};

type AssetFilterInput = {
  readonly brandId: Maybe<StringQueryOperatorInput>;
  readonly thumbnailUrl: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly componentId: Maybe<StringQueryOperatorInput>;
  readonly previouslyDuplicatedNames: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type AssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<AssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DocumentationConfigurationConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocumentationConfigurationEdge>;
  readonly nodes: ReadonlyArray<DocumentationConfiguration>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocumentationConfigurationGroupConnection>;
};


type DocumentationConfigurationConnection_distinctArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationConnection_maxArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationConnection_minArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationConnection_sumArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DocumentationConfigurationFieldsEnum;
};

type DocumentationConfigurationEdge = {
  readonly next: Maybe<DocumentationConfiguration>;
  readonly node: DocumentationConfiguration;
  readonly previous: Maybe<DocumentationConfiguration>;
};

type DocumentationConfigurationFieldsEnum =
  | 'tabbedNavigation'
  | 'storybookError'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DocumentationConfigurationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocumentationConfigurationEdge>;
  readonly nodes: ReadonlyArray<DocumentationConfiguration>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocumentationConfigurationGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DocumentationConfigurationGroupConnection_distinctArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationGroupConnection_maxArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationGroupConnection_minArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationGroupConnection_sumArgs = {
  field: DocumentationConfigurationFieldsEnum;
};


type DocumentationConfigurationGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DocumentationConfigurationFieldsEnum;
};

type DocumentationConfigurationFilterInput = {
  readonly tabbedNavigation: Maybe<BooleanQueryOperatorInput>;
  readonly storybookError: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DocumentationConfigurationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DocumentationConfigurationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SourceOriginFilterInput = {
  readonly source: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
};

type TokenPropertyFilterListInput = {
  readonly elemMatch: Maybe<TokenPropertyFilterInput>;
};

type TokenPropertyFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly codeName: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly stringValue: Maybe<StringQueryOperatorInput>;
  readonly booleanValue: Maybe<StringQueryOperatorInput>;
  readonly numericValue: Maybe<StringQueryOperatorInput>;
};

type TokenValueFilterInput = {
  readonly hex: Maybe<StringQueryOperatorInput>;
  readonly r: Maybe<IntQueryOperatorInput>;
  readonly g: Maybe<IntQueryOperatorInput>;
  readonly b: Maybe<IntQueryOperatorInput>;
  readonly a: Maybe<IntQueryOperatorInput>;
  readonly font: Maybe<FontTokenValueFilterInput>;
  readonly fontSize: Maybe<MeasureTokenValueFilterInput>;
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
  readonly textCase: Maybe<StringQueryOperatorInput>;
  readonly letterSpacing: Maybe<MeasureTokenValueFilterInput>;
  readonly lineHeight: Maybe<MeasureTokenValueFilterInput>;
  readonly paragraphIndent: Maybe<MeasureTokenValueFilterInput>;
  readonly radius: Maybe<MeasureTokenValueFilterInput>;
  readonly topLeft: Maybe<MeasureTokenValueFilterInput>;
  readonly topRight: Maybe<MeasureTokenValueFilterInput>;
  readonly bottomLeft: Maybe<MeasureTokenValueFilterInput>;
  readonly bottomRight: Maybe<MeasureTokenValueFilterInput>;
  readonly color: Maybe<ColorTokenValueFilterInput>;
  readonly x: Maybe<MeasureTokenValueFilterInput>;
  readonly y: Maybe<MeasureTokenValueFilterInput>;
  readonly spread: Maybe<MeasureTokenValueFilterInput>;
  readonly opacity: Maybe<FloatQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly unit: Maybe<StringQueryOperatorInput>;
  readonly measure: Maybe<FloatQueryOperatorInput>;
  readonly family: Maybe<StringQueryOperatorInput>;
  readonly subfamily: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<MeasureTokenValueFilterInput>;
  readonly position: Maybe<StringQueryOperatorInput>;
  readonly to: Maybe<GradientPositionFilterInput>;
  readonly from: Maybe<GradientPositionFilterInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly stops: Maybe<GradientStopValueFilterListInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly referencedTokenId: Maybe<StringQueryOperatorInput>;
};

type ColorTokenValueFilterInput = {
  readonly hex: Maybe<StringQueryOperatorInput>;
  readonly r: Maybe<IntQueryOperatorInput>;
  readonly g: Maybe<IntQueryOperatorInput>;
  readonly b: Maybe<IntQueryOperatorInput>;
  readonly a: Maybe<IntQueryOperatorInput>;
  readonly referencedTokenId: Maybe<StringQueryOperatorInput>;
};

type GradientPositionFilterInput = {
  readonly x: Maybe<FloatQueryOperatorInput>;
  readonly y: Maybe<FloatQueryOperatorInput>;
};

type GradientStopValueFilterListInput = {
  readonly elemMatch: Maybe<GradientStopValueFilterInput>;
};

type GradientStopValueFilterInput = {
  readonly position: Maybe<IntQueryOperatorInput>;
  readonly color: Maybe<ColorTokenValueFilterInput>;
  readonly referencedTokenId: Maybe<StringQueryOperatorInput>;
};

type TokenConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<TokenEdge>;
  readonly nodes: ReadonlyArray<Token>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<TokenGroupConnection>;
};


type TokenConnection_distinctArgs = {
  field: TokenFieldsEnum;
};


type TokenConnection_maxArgs = {
  field: TokenFieldsEnum;
};


type TokenConnection_minArgs = {
  field: TokenFieldsEnum;
};


type TokenConnection_sumArgs = {
  field: TokenFieldsEnum;
};


type TokenConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TokenFieldsEnum;
};

type TokenEdge = {
  readonly next: Maybe<Token>;
  readonly node: Token;
  readonly previous: Maybe<Token>;
};

type TokenFieldsEnum =
  | 'id'
  | 'brandId'
  | 'name'
  | 'description'
  | 'tokenType'
  | 'origin.source'
  | 'origin.id'
  | 'origin.name'
  | 'properties'
  | 'properties.name'
  | 'properties.codeName'
  | 'properties.type'
  | 'properties.stringValue'
  | 'properties.booleanValue'
  | 'properties.numericValue'
  | 'value.hex'
  | 'value.r'
  | 'value.g'
  | 'value.b'
  | 'value.a'
  | 'value.font.family'
  | 'value.font.subfamily'
  | 'value.font.referencedTokenId'
  | 'value.fontSize.unit'
  | 'value.fontSize.measure'
  | 'value.fontSize.referencedTokenId'
  | 'value.textDecoration'
  | 'value.textCase'
  | 'value.letterSpacing.unit'
  | 'value.letterSpacing.measure'
  | 'value.letterSpacing.referencedTokenId'
  | 'value.lineHeight.unit'
  | 'value.lineHeight.measure'
  | 'value.lineHeight.referencedTokenId'
  | 'value.paragraphIndent.unit'
  | 'value.paragraphIndent.measure'
  | 'value.paragraphIndent.referencedTokenId'
  | 'value.radius.unit'
  | 'value.radius.measure'
  | 'value.radius.referencedTokenId'
  | 'value.topLeft.unit'
  | 'value.topLeft.measure'
  | 'value.topLeft.referencedTokenId'
  | 'value.topRight.unit'
  | 'value.topRight.measure'
  | 'value.topRight.referencedTokenId'
  | 'value.bottomLeft.unit'
  | 'value.bottomLeft.measure'
  | 'value.bottomLeft.referencedTokenId'
  | 'value.bottomRight.unit'
  | 'value.bottomRight.measure'
  | 'value.bottomRight.referencedTokenId'
  | 'value.color.hex'
  | 'value.color.r'
  | 'value.color.g'
  | 'value.color.b'
  | 'value.color.a'
  | 'value.color.referencedTokenId'
  | 'value.x.unit'
  | 'value.x.measure'
  | 'value.x.referencedTokenId'
  | 'value.y.unit'
  | 'value.y.measure'
  | 'value.y.referencedTokenId'
  | 'value.spread.unit'
  | 'value.spread.measure'
  | 'value.spread.referencedTokenId'
  | 'value.opacity'
  | 'value.type'
  | 'value.unit'
  | 'value.measure'
  | 'value.family'
  | 'value.subfamily'
  | 'value.width.unit'
  | 'value.width.measure'
  | 'value.width.referencedTokenId'
  | 'value.position'
  | 'value.to.x'
  | 'value.to.y'
  | 'value.from.x'
  | 'value.from.y'
  | 'value.aspectRatio'
  | 'value.stops'
  | 'value.stops.position'
  | 'value.stops.color.hex'
  | 'value.stops.color.r'
  | 'value.stops.color.g'
  | 'value.stops.color.b'
  | 'value.stops.color.a'
  | 'value.stops.color.referencedTokenId'
  | 'value.stops.referencedTokenId'
  | 'value.text'
  | 'value.referencedTokenId'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type TokenGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<TokenEdge>;
  readonly nodes: ReadonlyArray<Token>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<TokenGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type TokenGroupConnection_distinctArgs = {
  field: TokenFieldsEnum;
};


type TokenGroupConnection_maxArgs = {
  field: TokenFieldsEnum;
};


type TokenGroupConnection_minArgs = {
  field: TokenFieldsEnum;
};


type TokenGroupConnection_sumArgs = {
  field: TokenFieldsEnum;
};


type TokenGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TokenFieldsEnum;
};

type TokenFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly brandId: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly tokenType: Maybe<StringQueryOperatorInput>;
  readonly origin: Maybe<SourceOriginFilterInput>;
  readonly properties: Maybe<TokenPropertyFilterListInput>;
  readonly value: Maybe<TokenValueFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type TokenSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TokenFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GroupTokenConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GroupTokenEdge>;
  readonly nodes: ReadonlyArray<GroupToken>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GroupTokenGroupConnection>;
};


type GroupTokenConnection_distinctArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenConnection_maxArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenConnection_minArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenConnection_sumArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GroupTokenFieldsEnum;
};

type GroupTokenEdge = {
  readonly next: Maybe<GroupToken>;
  readonly node: GroupToken;
  readonly previous: Maybe<GroupToken>;
};

type GroupTokenFieldsEnum =
  | 'brandId'
  | 'name'
  | 'description'
  | 'tokenType'
  | 'isRoot'
  | 'childrenIds'
  | 'subgroupIds'
  | 'tokenIds'
  | 'parentId'
  | 'path'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GroupTokenGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GroupTokenEdge>;
  readonly nodes: ReadonlyArray<GroupToken>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GroupTokenGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type GroupTokenGroupConnection_distinctArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenGroupConnection_maxArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenGroupConnection_minArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenGroupConnection_sumArgs = {
  field: GroupTokenFieldsEnum;
};


type GroupTokenGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GroupTokenFieldsEnum;
};

type GroupTokenFilterInput = {
  readonly brandId: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly tokenType: Maybe<StringQueryOperatorInput>;
  readonly isRoot: Maybe<BooleanQueryOperatorInput>;
  readonly childrenIds: Maybe<StringQueryOperatorInput>;
  readonly subgroupIds: Maybe<StringQueryOperatorInput>;
  readonly tokenIds: Maybe<StringQueryOperatorInput>;
  readonly parentId: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GroupTokenSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GroupTokenFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ExporterBlockPropertyFilterListInput = {
  readonly elemMatch: Maybe<ExporterBlockPropertyFilterInput>;
};

type ExporterBlockPropertyFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly key: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly inputType: Maybe<StringQueryOperatorInput>;
  readonly isMultiline: Maybe<BooleanQueryOperatorInput>;
  readonly default: Maybe<MultitypeValueFilterInput>;
  readonly values: Maybe<StringQueryOperatorInput>;
};

type ExporterBlockConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterBlockEdge>;
  readonly nodes: ReadonlyArray<ExporterBlock>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterBlockGroupConnection>;
};


type ExporterBlockConnection_distinctArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockConnection_maxArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockConnection_minArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockConnection_sumArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterBlockFieldsEnum;
};

type ExporterBlockEdge = {
  readonly next: Maybe<ExporterBlock>;
  readonly node: ExporterBlock;
  readonly previous: Maybe<ExporterBlock>;
};

type ExporterBlockFieldsEnum =
  | 'key'
  | 'title'
  | 'description'
  | 'category'
  | 'iconUrl'
  | 'mode'
  | 'properties'
  | 'properties.label'
  | 'properties.key'
  | 'properties.type'
  | 'properties.inputType'
  | 'properties.isMultiline'
  | 'properties.default.stringValue'
  | 'properties.default.booleanValue'
  | 'properties.default.numericValue'
  | 'properties.default.imageValue.assetUrl'
  | 'properties.default.imageValue.assetId'
  | 'properties.default.colorValue.aliasTo'
  | 'properties.default.colorValue.value'
  | 'properties.default.typographyValue.aliasTo'
  | 'properties.values'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ExporterBlockGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterBlockEdge>;
  readonly nodes: ReadonlyArray<ExporterBlock>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterBlockGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ExporterBlockGroupConnection_distinctArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockGroupConnection_maxArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockGroupConnection_minArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockGroupConnection_sumArgs = {
  field: ExporterBlockFieldsEnum;
};


type ExporterBlockGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterBlockFieldsEnum;
};

type ExporterBlockFilterInput = {
  readonly key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly iconUrl: Maybe<StringQueryOperatorInput>;
  readonly mode: Maybe<StringQueryOperatorInput>;
  readonly properties: Maybe<ExporterBlockPropertyFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ExporterBlockSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ExporterBlockFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ExporterBlockVariantConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterBlockVariantEdge>;
  readonly nodes: ReadonlyArray<ExporterBlockVariant>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterBlockVariantGroupConnection>;
};


type ExporterBlockVariantConnection_distinctArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantConnection_maxArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantConnection_minArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantConnection_sumArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterBlockVariantFieldsEnum;
};

type ExporterBlockVariantEdge = {
  readonly next: Maybe<ExporterBlockVariant>;
  readonly node: ExporterBlockVariant;
  readonly previous: Maybe<ExporterBlockVariant>;
};

type ExporterBlockVariantFieldsEnum =
  | 'blockKey'
  | 'variantKey'
  | 'name'
  | 'isDefault'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ExporterBlockVariantGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterBlockVariantEdge>;
  readonly nodes: ReadonlyArray<ExporterBlockVariant>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterBlockVariantGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ExporterBlockVariantGroupConnection_distinctArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantGroupConnection_maxArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantGroupConnection_minArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantGroupConnection_sumArgs = {
  field: ExporterBlockVariantFieldsEnum;
};


type ExporterBlockVariantGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterBlockVariantFieldsEnum;
};

type ExporterBlockVariantFilterInput = {
  readonly blockKey: Maybe<StringQueryOperatorInput>;
  readonly variantKey: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly isDefault: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ExporterBlockVariantSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ExporterBlockVariantFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ExporterConfigurationPropertyConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterConfigurationPropertyEdge>;
  readonly nodes: ReadonlyArray<ExporterConfigurationProperty>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterConfigurationPropertyGroupConnection>;
};


type ExporterConfigurationPropertyConnection_distinctArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyConnection_maxArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyConnection_minArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyConnection_sumArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterConfigurationPropertyFieldsEnum;
};

type ExporterConfigurationPropertyEdge = {
  readonly next: Maybe<ExporterConfigurationProperty>;
  readonly node: ExporterConfigurationProperty;
  readonly previous: Maybe<ExporterConfigurationProperty>;
};

type ExporterConfigurationPropertyFieldsEnum =
  | 'label'
  | 'category'
  | 'description'
  | 'key'
  | 'type'
  | 'inputType'
  | 'isMultiline'
  | 'default.stringValue'
  | 'default.booleanValue'
  | 'default.numericValue'
  | 'default.imageValue.assetUrl'
  | 'default.imageValue.assetId'
  | 'default.colorValue.aliasTo'
  | 'default.colorValue.value'
  | 'default.typographyValue.aliasTo'
  | 'default.typographyValue.value.textDecoration'
  | 'default.typographyValue.value.textCase'
  | 'value.stringValue'
  | 'value.booleanValue'
  | 'value.numericValue'
  | 'value.imageValue.assetUrl'
  | 'value.imageValue.assetId'
  | 'value.colorValue.aliasTo'
  | 'value.colorValue.value'
  | 'value.typographyValue.aliasTo'
  | 'value.typographyValue.value.textDecoration'
  | 'value.typographyValue.value.textCase'
  | 'values'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ExporterConfigurationPropertyGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterConfigurationPropertyEdge>;
  readonly nodes: ReadonlyArray<ExporterConfigurationProperty>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterConfigurationPropertyGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ExporterConfigurationPropertyGroupConnection_distinctArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyGroupConnection_maxArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyGroupConnection_minArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyGroupConnection_sumArgs = {
  field: ExporterConfigurationPropertyFieldsEnum;
};


type ExporterConfigurationPropertyGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterConfigurationPropertyFieldsEnum;
};

type ExporterConfigurationPropertyFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly key: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly inputType: Maybe<StringQueryOperatorInput>;
  readonly isMultiline: Maybe<BooleanQueryOperatorInput>;
  readonly default: Maybe<MultitypeValueFilterInput>;
  readonly value: Maybe<MultitypeValueFilterInput>;
  readonly values: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ExporterConfigurationPropertySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ExporterConfigurationPropertyFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ExporterOriginFilterInput = {
  readonly repositoryUrl: Maybe<StringQueryOperatorInput>;
  readonly repositoryBranch: Maybe<StringQueryOperatorInput>;
  readonly repositoryDirectory: Maybe<StringQueryOperatorInput>;
};

type ExporterContributionFilterInput = {
  readonly customBlocks: Maybe<ExporterBlockFilterListInput>;
  readonly customConfigurationProperties: Maybe<ExporterConfigurationPropertyFilterListInput>;
  readonly customBlockVariants: Maybe<ExporterBlockVariantFilterListInput>;
};

type ExporterBlockFilterListInput = {
  readonly elemMatch: Maybe<ExporterBlockFilterInput>;
};

type ExporterConfigurationPropertyFilterListInput = {
  readonly elemMatch: Maybe<ExporterConfigurationPropertyFilterInput>;
};

type ExporterBlockVariantFilterListInput = {
  readonly elemMatch: Maybe<ExporterBlockVariantFilterInput>;
};

type ExporterConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterEdge>;
  readonly nodes: ReadonlyArray<Exporter>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterGroupConnection>;
};


type ExporterConnection_distinctArgs = {
  field: ExporterFieldsEnum;
};


type ExporterConnection_maxArgs = {
  field: ExporterFieldsEnum;
};


type ExporterConnection_minArgs = {
  field: ExporterFieldsEnum;
};


type ExporterConnection_sumArgs = {
  field: ExporterFieldsEnum;
};


type ExporterConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterFieldsEnum;
};

type ExporterEdge = {
  readonly next: Maybe<Exporter>;
  readonly node: Exporter;
  readonly previous: Maybe<Exporter>;
};

type ExporterFieldsEnum =
  | 'id'
  | 'packageId'
  | 'isPrivate'
  | 'isDefaultDocumentationExporter'
  | 'usesBrands'
  | 'name'
  | 'description'
  | 'version'
  | 'author'
  | 'organization'
  | 'homepage'
  | 'readme'
  | 'iconURL'
  | 'tags'
  | 'origin.repositoryUrl'
  | 'origin.repositoryBranch'
  | 'origin.repositoryDirectory'
  | 'contributes.customBlocks'
  | 'contributes.customBlocks.key'
  | 'contributes.customBlocks.title'
  | 'contributes.customBlocks.description'
  | 'contributes.customBlocks.category'
  | 'contributes.customBlocks.iconUrl'
  | 'contributes.customBlocks.mode'
  | 'contributes.customBlocks.properties'
  | 'contributes.customBlocks.properties.label'
  | 'contributes.customBlocks.properties.key'
  | 'contributes.customBlocks.properties.type'
  | 'contributes.customBlocks.properties.inputType'
  | 'contributes.customBlocks.properties.isMultiline'
  | 'contributes.customBlocks.properties.values'
  | 'contributes.customBlocks.id'
  | 'contributes.customBlocks.parent.id'
  | 'contributes.customBlocks.parent.children'
  | 'contributes.customBlocks.children'
  | 'contributes.customBlocks.children.id'
  | 'contributes.customBlocks.children.children'
  | 'contributes.customBlocks.internal.content'
  | 'contributes.customBlocks.internal.contentDigest'
  | 'contributes.customBlocks.internal.description'
  | 'contributes.customBlocks.internal.fieldOwners'
  | 'contributes.customBlocks.internal.ignoreType'
  | 'contributes.customBlocks.internal.mediaType'
  | 'contributes.customBlocks.internal.owner'
  | 'contributes.customBlocks.internal.type'
  | 'contributes.customConfigurationProperties'
  | 'contributes.customConfigurationProperties.label'
  | 'contributes.customConfigurationProperties.category'
  | 'contributes.customConfigurationProperties.description'
  | 'contributes.customConfigurationProperties.key'
  | 'contributes.customConfigurationProperties.type'
  | 'contributes.customConfigurationProperties.inputType'
  | 'contributes.customConfigurationProperties.isMultiline'
  | 'contributes.customConfigurationProperties.default.stringValue'
  | 'contributes.customConfigurationProperties.default.booleanValue'
  | 'contributes.customConfigurationProperties.default.numericValue'
  | 'contributes.customConfigurationProperties.value.stringValue'
  | 'contributes.customConfigurationProperties.value.booleanValue'
  | 'contributes.customConfigurationProperties.value.numericValue'
  | 'contributes.customConfigurationProperties.values'
  | 'contributes.customConfigurationProperties.id'
  | 'contributes.customConfigurationProperties.parent.id'
  | 'contributes.customConfigurationProperties.parent.children'
  | 'contributes.customConfigurationProperties.children'
  | 'contributes.customConfigurationProperties.children.id'
  | 'contributes.customConfigurationProperties.children.children'
  | 'contributes.customConfigurationProperties.internal.content'
  | 'contributes.customConfigurationProperties.internal.contentDigest'
  | 'contributes.customConfigurationProperties.internal.description'
  | 'contributes.customConfigurationProperties.internal.fieldOwners'
  | 'contributes.customConfigurationProperties.internal.ignoreType'
  | 'contributes.customConfigurationProperties.internal.mediaType'
  | 'contributes.customConfigurationProperties.internal.owner'
  | 'contributes.customConfigurationProperties.internal.type'
  | 'contributes.customBlockVariants'
  | 'contributes.customBlockVariants.blockKey'
  | 'contributes.customBlockVariants.variantKey'
  | 'contributes.customBlockVariants.name'
  | 'contributes.customBlockVariants.isDefault'
  | 'contributes.customBlockVariants.id'
  | 'contributes.customBlockVariants.parent.id'
  | 'contributes.customBlockVariants.parent.children'
  | 'contributes.customBlockVariants.children'
  | 'contributes.customBlockVariants.children.id'
  | 'contributes.customBlockVariants.children.children'
  | 'contributes.customBlockVariants.internal.content'
  | 'contributes.customBlockVariants.internal.contentDigest'
  | 'contributes.customBlockVariants.internal.description'
  | 'contributes.customBlockVariants.internal.fieldOwners'
  | 'contributes.customBlockVariants.internal.ignoreType'
  | 'contributes.customBlockVariants.internal.mediaType'
  | 'contributes.customBlockVariants.internal.owner'
  | 'contributes.customBlockVariants.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ExporterGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExporterEdge>;
  readonly nodes: ReadonlyArray<Exporter>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExporterGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ExporterGroupConnection_distinctArgs = {
  field: ExporterFieldsEnum;
};


type ExporterGroupConnection_maxArgs = {
  field: ExporterFieldsEnum;
};


type ExporterGroupConnection_minArgs = {
  field: ExporterFieldsEnum;
};


type ExporterGroupConnection_sumArgs = {
  field: ExporterFieldsEnum;
};


type ExporterGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ExporterFieldsEnum;
};

type ExporterFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly packageId: Maybe<StringQueryOperatorInput>;
  readonly isPrivate: Maybe<BooleanQueryOperatorInput>;
  readonly isDefaultDocumentationExporter: Maybe<BooleanQueryOperatorInput>;
  readonly usesBrands: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly organization: Maybe<StringQueryOperatorInput>;
  readonly homepage: Maybe<StringQueryOperatorInput>;
  readonly readme: Maybe<StringQueryOperatorInput>;
  readonly iconURL: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly origin: Maybe<ExporterOriginFilterInput>;
  readonly contributes: Maybe<ExporterContributionFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ExporterSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ExporterFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type TemplatePageContentQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type TemplatePageContentQuery = { readonly documentationItem: Maybe<(
    Pick<DocumentationItem, 'id' | 'persistentId' | 'itemType' | 'slug' | 'firstPageSlug' | 'parentGroupId' | 'parentGroupChain' | 'title' | 'blockIds'>
    & { readonly configuration: Maybe<(
      Pick<DocumentationItemConfiguration, 'showSidebar'>
      & { readonly header: Pick<DocumentationItemHeader, 'backgroundImageAssetId' | 'backgroundImageAssetUrl' | 'backgroundImageScaleType' | 'alignment' | 'foregroundColor' | 'description' | 'minHeight' | 'showBackgroundOverlay' | 'showCoverText'> }
    )> }
  )> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type QueryAllBlocksQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllBlocksQuery = { readonly allDocumentationBlock: { readonly nodes: ReadonlyArray<(
      Pick<DocumentationBlock, 'alignment' | 'backgroundColor' | 'beginsTypeChain' | 'blockIds' | 'blockType' | 'calloutType' | 'caption' | 'code' | 'codeLanguage' | 'endsTypeChain' | 'headingType' | 'groupId' | 'height' | 'id' | 'key' | 'packageJSON' | 'sandboxData' | 'sandboxType' | 'showCode' | 'showNestedGroups' | 'tokenIds' | 'url' | 'title' | 'description' | 'thumbnailUrl' | 'columnId' | 'variantKey'>
      & { readonly assets: Maybe<ReadonlyArray<Maybe<Pick<DocumentationBlockAsset, 'assetId' | 'backgroundColor' | 'title' | 'description' | 'previewUrl'>>>>, readonly frames: Maybe<ReadonlyArray<Maybe<Pick<DocumentationBlockFigmaFrame, 'sourceFileId' | 'sourceFrameId' | 'sourceFileName' | 'title' | 'description' | 'previewUrl' | 'backgroundColor'>>>>, readonly shortcuts: Maybe<ReadonlyArray<Maybe<Pick<DocumentationBlockShortcut, 'title' | 'description' | 'previewUrl' | 'externalUrl' | 'internalId' | 'shortcutType'>>>>, readonly properties: Maybe<Pick<DocumentationBlockProperties, 'alignment' | 'color' | 'layout' | 'markdownUrl'>>, readonly size: Maybe<Pick<Size, 'height' | 'width'>>, readonly text: Maybe<{ readonly spans: Maybe<ReadonlyArray<Maybe<(
          Pick<DocumentationBlockTextSpan, 'text'>
          & { readonly attributes: Maybe<ReadonlyArray<Maybe<Pick<DocumentationBlockTextSpansAttribute, 'link' | 'type'>>>> }
        )>>> }>, readonly tableProperties: Maybe<(
        Pick<DocumentationTableProperties, 'showBorders'>
        & { readonly columns: ReadonlyArray<Maybe<(
          Pick<DocumentationTableColumn, 'id'>
          & { readonly width: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>> }
        )>> }
      )>, readonly block: Maybe<Pick<DocumentationCustomBlock, 'category' | 'description' | 'iconUrl' | 'key' | 'title'>>, readonly blockProperties: Maybe<ReadonlyArray<Maybe<(
        Pick<DocumentationCustomBlockProperty, 'default' | 'key' | 'label' | 'type'>
        & { readonly value: Maybe<(
          Pick<MultitypeValue, 'booleanValue' | 'numericValue' | 'stringValue'>
          & { readonly colorValue: Maybe<Pick<MultitypeColorValue, 'aliasTo' | 'value'>>, readonly imageValue: Maybe<Pick<MultitypeImageValue, 'assetId' | 'assetUrl'>>, readonly typographyValue: Maybe<(
            Pick<MultitypeTypographyValue, 'aliasTo'>
            & { readonly value: Maybe<(
              Pick<TypographyTokenValue, 'textCase' | 'textDecoration'>
              & { readonly font: Maybe<Pick<FontTokenValue, 'family' | 'referencedTokenId' | 'subfamily'>>, readonly fontSize: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly letterSpacing: Maybe<Pick<MeasureTokenValue, 'referencedTokenId' | 'measure' | 'unit'>>, readonly lineHeight: Maybe<Pick<MeasureTokenValue, 'measure' | 'unit' | 'referencedTokenId'>>, readonly paragraphIndent: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>> }
            )> }
          )> }
        )> }
      )>>> }
    )> } };

type QueryAllExporterBlockQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllExporterBlockQuery = { readonly allExporterBlock: { readonly nodes: ReadonlyArray<(
      Pick<ExporterBlock, 'category' | 'description' | 'iconUrl' | 'id' | 'key' | 'mode' | 'title'>
      & { readonly properties: Maybe<ReadonlyArray<Maybe<(
        Pick<ExporterBlockProperty, 'inputType' | 'isMultiline' | 'key' | 'label' | 'type' | 'values'>
        & { readonly default: Maybe<(
          Pick<MultitypeValue, 'booleanValue' | 'numericValue' | 'stringValue'>
          & { readonly typographyValue: Maybe<(
            Pick<MultitypeTypographyValue, 'aliasTo'>
            & { readonly value: Maybe<(
              Pick<TypographyTokenValue, 'textCase' | 'textDecoration'>
              & { readonly font: Maybe<Pick<FontTokenValue, 'family' | 'referencedTokenId' | 'subfamily'>>, readonly fontSize: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly letterSpacing: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly lineHeight: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly paragraphIndent: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>> }
            )> }
          )>, readonly imageValue: Maybe<Pick<MultitypeImageValue, 'assetId' | 'assetUrl'>>, readonly colorValue: Maybe<Pick<MultitypeColorValue, 'aliasTo' | 'value'>> }
        )> }
      )>>> }
    )> } };

type QueryAllExporterBlockVariantsQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllExporterBlockVariantsQuery = { readonly allExporterBlockVariant: { readonly nodes: ReadonlyArray<Pick<ExporterBlockVariant, 'blockKey' | 'isDefault' | 'id' | 'name' | 'variantKey'>> } };

type QueryAllExporterConfigurationPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllExporterConfigurationPropertiesQuery = { readonly allExporterConfigurationProperty: { readonly nodes: ReadonlyArray<(
      Pick<ExporterConfigurationProperty, 'category' | 'description' | 'id' | 'inputType' | 'isMultiline' | 'key' | 'label' | 'type' | 'values'>
      & { readonly default: Maybe<(
        Pick<MultitypeValue, 'booleanValue' | 'numericValue' | 'stringValue'>
        & { readonly colorValue: Maybe<Pick<MultitypeColorValue, 'aliasTo' | 'value'>>, readonly imageValue: Maybe<Pick<MultitypeImageValue, 'assetId' | 'assetUrl'>>, readonly typographyValue: Maybe<(
          Pick<MultitypeTypographyValue, 'aliasTo'>
          & { readonly value: Maybe<(
            Pick<TypographyTokenValue, 'textCase' | 'textDecoration'>
            & { readonly font: Maybe<Pick<FontTokenValue, 'family' | 'referencedTokenId' | 'subfamily'>>, readonly fontSize: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly letterSpacing: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly lineHeight: Maybe<Pick<MeasureTokenValue, 'referencedTokenId' | 'unit' | 'measure'>>, readonly paragraphIndent: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>> }
          )> }
        )> }
      )>, readonly value: Maybe<(
        Pick<MultitypeValue, 'booleanValue' | 'numericValue' | 'stringValue'>
        & { readonly colorValue: Maybe<Pick<MultitypeColorValue, 'aliasTo' | 'value'>>, readonly imageValue: Maybe<Pick<MultitypeImageValue, 'assetId' | 'assetUrl'>>, readonly typographyValue: Maybe<(
          Pick<MultitypeTypographyValue, 'aliasTo'>
          & { readonly value: Maybe<(
            Pick<TypographyTokenValue, 'textCase' | 'textDecoration'>
            & { readonly font: Maybe<Pick<FontTokenValue, 'family' | 'referencedTokenId' | 'subfamily'>>, readonly fontSize: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly letterSpacing: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly lineHeight: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly paragraphIndent: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>> }
          )> }
        )> }
      )> }
    )> } };

type ConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


type ConfigurationQuery = { readonly documentationConfiguration: Maybe<Pick<DocumentationConfiguration, 'tabbedNavigation' | 'storybookError' | 'packageJson'>> };

type QueryAllItemsQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllItemsQuery = { readonly allDocumentationItem: { readonly nodes: ReadonlyArray<(
      Pick<DocumentationItem, 'id' | 'persistentId' | 'itemType' | 'slug' | 'firstPageSlug' | 'parentGroupId' | 'parentGroupChain' | 'title'>
      & { readonly configuration: Maybe<(
        Pick<DocumentationItemConfiguration, 'showSidebar'>
        & { readonly header: Pick<DocumentationItemHeader, 'backgroundImageAssetId' | 'backgroundImageAssetUrl' | 'backgroundImageScaleType' | 'alignment' | 'foregroundColor' | 'description' | 'minHeight' | 'showBackgroundOverlay' | 'showCoverText'> }
      )> }
    )> } };

type QueryAllGroupsQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllGroupsQuery = { readonly allDocumentationItem: { readonly nodes: ReadonlyArray<(
      Pick<DocumentationItem, 'id' | 'persistentId' | 'itemType' | 'slug' | 'firstPageSlug' | 'parentGroupId' | 'parentGroupChain' | 'title' | 'isRoot' | 'subpageIds' | 'subitemIds' | 'subgroupIds' | 'groupBehavior'>
      & { readonly configuration: Maybe<(
        Pick<DocumentationItemConfiguration, 'showSidebar'>
        & { readonly header: Pick<DocumentationItemHeader, 'backgroundImageAssetId' | 'backgroundImageAssetUrl' | 'backgroundImageScaleType' | 'alignment' | 'foregroundColor' | 'description' | 'minHeight' | 'showBackgroundOverlay' | 'showCoverText'> }
      )> }
    )> } };

type QueryAllPagesQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllPagesQuery = { readonly allDocumentationItem: { readonly nodes: ReadonlyArray<(
      Pick<DocumentationItem, 'id' | 'persistentId' | 'itemType' | 'slug' | 'firstPageSlug' | 'parentGroupId' | 'parentGroupChain' | 'previousPageId' | 'nextPageId' | 'title' | 'blockIds'>
      & { readonly configuration: Maybe<(
        Pick<DocumentationItemConfiguration, 'showSidebar'>
        & { readonly header: Pick<DocumentationItemHeader, 'backgroundImageAssetId' | 'backgroundImageAssetUrl' | 'backgroundImageScaleType' | 'alignment' | 'foregroundColor' | 'description' | 'minHeight' | 'showBackgroundOverlay' | 'showCoverText'> }
      )> }
    )> } };

type QueryAllGroupTokenQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllGroupTokenQuery = { readonly allGroupToken: { readonly nodes: ReadonlyArray<Pick<GroupToken, 'id' | 'brandId' | 'tokenType' | 'name' | 'description' | 'isRoot' | 'parentId' | 'childrenIds' | 'subgroupIds' | 'tokenIds' | 'path'>> } };

type QueryAllTokensQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllTokensQuery = { readonly allToken: { readonly nodes: ReadonlyArray<(
      Pick<Token, 'brandId' | 'description' | 'id' | 'name' | 'tokenType'>
      & { readonly origin: Maybe<Pick<SourceOrigin, 'id' | 'name' | 'source'>>, readonly properties: ReadonlyArray<Maybe<Pick<TokenProperty, 'booleanValue' | 'codeName' | 'name' | 'numericValue' | 'stringValue' | 'type'>>>, readonly value: Maybe<(
        Pick<TokenValue, 'a' | 'aspectRatio' | 'b' | 'family' | 'g' | 'hex' | 'measure' | 'opacity' | 'position' | 'r' | 'referencedTokenId' | 'subfamily' | 'text' | 'textCase' | 'textDecoration' | 'type' | 'unit'>
        & { readonly bottomLeft: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly bottomRight: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly color: Maybe<Pick<ColorTokenValue, 'a' | 'b' | 'g' | 'hex' | 'r' | 'referencedTokenId'>>, readonly font: Maybe<Pick<FontTokenValue, 'family' | 'referencedTokenId' | 'subfamily'>>, readonly fontSize: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly from: Maybe<Pick<GradientPosition, 'x' | 'y'>>, readonly letterSpacing: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly lineHeight: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly paragraphIndent: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly radius: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly spread: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly stops: Maybe<ReadonlyArray<Maybe<(
          Pick<GradientStopValue, 'position' | 'referencedTokenId'>
          & { readonly color: Maybe<Pick<ColorTokenValue, 'a' | 'b' | 'g' | 'hex' | 'r' | 'referencedTokenId'>> }
        )>>>, readonly to: Maybe<Pick<GradientPosition, 'x' | 'y'>>, readonly topLeft: Maybe<Pick<MeasureTokenValue, 'referencedTokenId' | 'measure' | 'unit'>>, readonly topRight: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly width: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly x: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>>, readonly y: Maybe<Pick<MeasureTokenValue, 'measure' | 'referencedTokenId' | 'unit'>> }
      )> }
    )> } };

type QueryAllAssetsQueryVariables = Exact<{ [key: string]: never; }>;


type QueryAllAssetsQuery = { readonly allAsset: { readonly nodes: ReadonlyArray<Pick<Asset, 'id' | 'brandId' | 'thumbnailUrl' | 'name' | 'description' | 'componentId' | 'previouslyDuplicatedNames'>> } };

}