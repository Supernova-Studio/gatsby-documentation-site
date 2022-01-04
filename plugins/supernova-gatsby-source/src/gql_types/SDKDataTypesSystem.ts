import { SNSourceType } from "./SDKDataTypesEnums"
import { SNGraphQLNode } from "./SDKDataTypesGraphQL"

export type SNWorkspace = SNGraphQLNode & {
    id: string
    handle: string
    name: string
    color: string
}

export type SNDesignSystem = SNGraphQLNode & {
    id: string
    workspaceId: string
    name: string
    description: string
    isPublic: boolean
}

export type SNDesignSystemVersion = SNGraphQLNode & {
    id: string
    designSystemId: string
    name: string
    description: string
    version: string
    changeLog: string | null
    isReadOnly: boolean
}


export type SNSourceOrigin = {
    source: SNSourceType
    id: string | null
    name: string | null
}