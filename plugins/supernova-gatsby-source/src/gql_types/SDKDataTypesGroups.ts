import { SNTokenType } from "./SDKDataTypesEnums"
import { SNGraphQLNode } from "./SDKDataTypesGraphQL"

export type SNTokenGroup = SNGraphQLNode & {
    id: string
    name: string
    description: string
    path: Array<string>
    subgroups: Array<SNTokenGroup>
    tokenType: SNTokenType
    isRoot: boolean
    childrenIds: Array<string>
    tokenIds: Array<string>
    parent: SNTokenGroup | null
}