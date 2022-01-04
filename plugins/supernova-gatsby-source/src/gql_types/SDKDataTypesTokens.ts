

import { SNBorderPosition, SNGradientType, SNShadowType, SNTextCase, SNTextDecoration, SNTokenPropertyType, SNTokenType, SNUnit } from "./SDKDataTypesEnums"
import { SNGraphQLNode } from "./SDKDataTypesGraphQL"
import { SNSourceOrigin } from "./SDKDataTypesSystem"

export type SNToken = SNGraphQLNode & SNTokenValue & {}

export type SNColorToken = SNToken & {
    value: SNColorTokenValue
}

export type SNTypographyToken = SNToken & {
    value: SNTypographyTokenValue
}

export type SNRadiusToken = SNToken & {
    value: SNRadiusTokenValue
}

export type SNShadowToken = SNToken & {
    value: SNShadowTokenValue
}

export type SNMeasureToken = SNToken & {
    value: SNMeasureTokenValue
}

export type SNBorderToken = SNToken & {
    value: SNBorderTokenValue
}

export type SNGradientToken = SNToken & {
    value: SNGradientTokenValue
}

export type SNTextToken = SNToken & {
    value: SNTextTokenValue
}

export type SNFontToken = SNToken & {
    value: SNFontTokenValue
}

export type SNTokenValue = {
    id: string
    name: string
    description: string
    tokenType: SNTokenType
    origin: SNSourceOrigin | null
    properties: Array<SNTokenProperty>
}

export type SNTokenProperty = {
    name: string
    codeName: string
    type: SNTokenPropertyType
    value: string | number | boolean
}

export type SNColorTokenValue = {
    hex: string
    r: number
    g: number
    b: number
    a: number
    referencedToken: SNColorToken | null
}

export type SNTypographyTokenValue = {
    font: SNFontTokenValue
    fontSize: SNMeasureTokenValue
    textDecoration: SNTextDecoration
    textCase: SNTextCase
    letterSpacing: SNMeasureTokenValue
    lineHeight: SNMeasureTokenValue | null
    paragraphIndent: SNMeasureTokenValue
    referencedToken: SNTypographyToken | null
}

export type SNRadiusTokenValue = {
    radius: SNMeasureTokenValue
    topLeft: SNMeasureTokenValue | null
    topRight: SNMeasureTokenValue | null
    bottomLeft: SNMeasureTokenValue | null
    bottomRight: SNMeasureTokenValue | null
    referencedToken: SNRadiusToken | null
}

export type SNShadowTokenValue = {
    color: SNColorTokenValue
    x: SNMeasureTokenValue
    y: SNMeasureTokenValue
    radius: SNMeasureTokenValue
    spread: SNMeasureTokenValue
    opacity: number
    type: SNShadowType
    referencedToken: SNShadowToken | null
}

export type SNMeasureTokenValue = {
    unit: SNUnit
    measure: number
    referencedToken: SNMeasureToken | null
}

export type SNFontTokenValue = {
    family: string
    subfamily: string
    referencedToken: SNFontToken | null
}

export type SNBorderTokenValue = {
    color: SNColorTokenValue
    width: SNMeasureTokenValue
    position: SNBorderPosition
    referencedToken: SNBorderToken | null
}

export type SNGradientTokenValue = {
    to: {
        x: number
        y: number
    }
    from: {
        x: number
        y: number
    }
    type: SNGradientType
    aspectRatio: number
    stops: Array<SNGradientStopValue>
    referencedToken: SNGradientToken | null
}

export type SNGradientStopValue = {
    position: number
    color: SNColorTokenValue
}

export type SNTextTokenValue = {
    text: string
    referencedToken: SNTextToken
}