/* tslint:disable */
/* eslint-disable */
/**
 * Twitter OpenAPI
 * Twitter OpenAPI(Swagger) specification
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: yuki@yuki0311.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NoteTweetResultRichTextTag
 */
export interface NoteTweetResultRichTextTag {
    /**
     * 
     * @type {number}
     * @memberof NoteTweetResultRichTextTag
     */
    fromIndex: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof NoteTweetResultRichTextTag
     */
    richtextTypes: Array<NoteTweetResultRichTextTagRichtextTypesEnum>;
    /**
     * 
     * @type {number}
     * @memberof NoteTweetResultRichTextTag
     */
    toIndex: number;
}


/**
 * @export
 */
export const NoteTweetResultRichTextTagRichtextTypesEnum = {
    Bold: 'Bold',
    Italic: 'Italic'
} as const;
export type NoteTweetResultRichTextTagRichtextTypesEnum = typeof NoteTweetResultRichTextTagRichtextTypesEnum[keyof typeof NoteTweetResultRichTextTagRichtextTypesEnum];


/**
 * Check if a given object implements the NoteTweetResultRichTextTag interface.
 */
export function instanceOfNoteTweetResultRichTextTag(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fromIndex" in value;
    isInstance = isInstance && "richtextTypes" in value;
    isInstance = isInstance && "toIndex" in value;

    return isInstance;
}

export function NoteTweetResultRichTextTagFromJSON(json: any): NoteTweetResultRichTextTag {
    return NoteTweetResultRichTextTagFromJSONTyped(json, false);
}

export function NoteTweetResultRichTextTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteTweetResultRichTextTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromIndex': json['from_index'],
        'richtextTypes': json['richtext_types'],
        'toIndex': json['to_index'],
    };
}

export function NoteTweetResultRichTextTagToJSON(value?: NoteTweetResultRichTextTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from_index': value.fromIndex,
        'richtext_types': value.richtextTypes,
        'to_index': value.toIndex,
    };
}

