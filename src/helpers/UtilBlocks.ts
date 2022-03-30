
//
//  UtilBlocks.ts
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

export class UtilBlocks {

    /** Retrieve user-defined (or default) property for a custom block by its key. Throws if not found */
    static customBlockProperty(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): SupernovaTypes.DocumentationCustomBlockProperty {
        
        for (let property of block.blockProperties) {
            if (property.key === key) {
                return property
            }
        }

        // If there is no property with requested key defined, throw
        throw new Error(`Custom block id '${block.key}' doesn't define property '${key}'`)
    }

    /** Retrieve user-defined (or default) value of specific property for a custom block by its key. Throws if not found */
    static customBlockPropertyValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): any {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        let value = property.value
        switch (property.type) {
            case SupernovaTypes.CustomBlockPropertyType.boolean: return value.booleanValue
            case SupernovaTypes.CustomBlockPropertyType.enum: return value.stringValue
            case SupernovaTypes.CustomBlockPropertyType.string: return value.stringValue
            case SupernovaTypes.CustomBlockPropertyType.number: return value.numericValue
            case SupernovaTypes.CustomBlockPropertyType.image: return value.imageValue
            case SupernovaTypes.CustomBlockPropertyType.color: return value.colorValue
            case SupernovaTypes.CustomBlockPropertyType.typography: return value.typographyValue
        }
    }

    /** Retrieve user-defined (or default) value of string property for a custom block by its key. Throws if not found and property is not defined as string */
    static customBlockPropertyStringValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): string | null {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        if (property.type !== SupernovaTypes.CustomBlockPropertyType.string) {
            throw new Error(`Custom block id '${block.key} property '${property.key}' is not defined as string, but '${property.type.toString()}'`)
        }
        return property.value.stringValue
    }

    /** Retrieve user-defined (or default) value of string property for a custom block by its key. Throws if not found and property is not defined as number */
    static customBlockPropertyNumericValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): number | null {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        if (property.type !== SupernovaTypes.CustomBlockPropertyType.number) {
            throw new Error(`Custom block id '${block.key} property '${property.key}' is not defined as number, but '${property.type.toString()}'`)
        }
        return property.value.numericValue
    }

    /** Retrieve user-defined (or default) value of string property for a custom block by its key. Throws if not found and property is not defined as boolean */
    static customBlockPropertyBooleanValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): boolean | null {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        if (property.type !== SupernovaTypes.CustomBlockPropertyType.boolean) {
            throw new Error(`Custom block id '${block.key} property '${property.key}' is not defined as boolean, but '${property.type.toString()}'`)
        }
        return property.value.booleanValue
    }

    /** Retrieve user-defined (or default) value of string property for a custom block by its key. Throws if not found and property is not defined as enum */
    static customBlockPropertyEnumValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): string | null {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        if (property.type !== SupernovaTypes.CustomBlockPropertyType.enum) {
            throw new Error(`Custom block id '${block.key} property '${property.key}' is not defined as enum, but '${property.type.toString()}'`)
        }
        return property.value.stringValue
    }

    /** Retrieve user-defined (or default) value of string property for a custom block by its key. Throws if not found and property is not defined as image */
    static customBlockPropertyImageValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): SupernovaTypes.MultitypeImageValue | null {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        if (property.type !== SupernovaTypes.CustomBlockPropertyType.image) {
            throw new Error(`Custom block id '${block.key} property '${property.key}' is not defined as image, but '${property.type.toString()}'`)
        }
        return property.value.imageValue
    }

    /** Retrieve user-defined (or default) value of string property for a custom block by its key. Throws if not found and property is not defined as color */
    static customBlockPropertyColorValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): SupernovaTypes.MultitypeColorValue | null {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        if (property.type !== SupernovaTypes.CustomBlockPropertyType.image) {
            throw new Error(`Custom block id '${block.key} property '${property.key}' is not defined as color, but '${property.type.toString()}'`)
        }
        return property.value.colorValue
    }

    /** Retrieve user-defined (or default) value of string property for a custom block by its key. Throws if not found and property is not defined as typography */
    static customBlockPropertyTypographyValue(block: SupernovaTypes.DocumentationPageBlockCustom, key: string): SupernovaTypes.MultitypeTypographyValue | null {
        
        let property = UtilBlocks.customBlockProperty(block, key)
        if (property.type !== SupernovaTypes.CustomBlockPropertyType.typography) {
            throw new Error(`Custom block id '${block.key} property '${property.key}' is not defined as typography, but '${property.type.toString()}'`)
        }
        return property.value.typographyValue
    }
}







