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
import type { BirdwatchPivotFooter } from './BirdwatchPivotFooter';
import {
    BirdwatchPivotFooterFromJSON,
    BirdwatchPivotFooterFromJSONTyped,
    BirdwatchPivotFooterToJSON,
} from './BirdwatchPivotFooter';
import type { BirdwatchPivotNote } from './BirdwatchPivotNote';
import {
    BirdwatchPivotNoteFromJSON,
    BirdwatchPivotNoteFromJSONTyped,
    BirdwatchPivotNoteToJSON,
} from './BirdwatchPivotNote';
import type { BirdwatchPivotSubtitle } from './BirdwatchPivotSubtitle';
import {
    BirdwatchPivotSubtitleFromJSON,
    BirdwatchPivotSubtitleFromJSONTyped,
    BirdwatchPivotSubtitleToJSON,
} from './BirdwatchPivotSubtitle';

/**
 * 
 * @export
 * @interface BirdwatchPivot
 */
export interface BirdwatchPivot {
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivot
     */
    destinationUrl: string;
    /**
     * 
     * @type {BirdwatchPivotFooter}
     * @memberof BirdwatchPivot
     */
    footer: BirdwatchPivotFooter;
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivot
     */
    iconType: BirdwatchPivotIconTypeEnum;
    /**
     * 
     * @type {BirdwatchPivotNote}
     * @memberof BirdwatchPivot
     */
    note: BirdwatchPivotNote;
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivot
     */
    shorttitle: string;
    /**
     * 
     * @type {BirdwatchPivotSubtitle}
     * @memberof BirdwatchPivot
     */
    subtitle: BirdwatchPivotSubtitle;
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivot
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivot
     */
    visualStyle?: BirdwatchPivotVisualStyleEnum;
}


/**
 * @export
 */
export const BirdwatchPivotIconTypeEnum = {
    BirdwatchV1Icon: 'BirdwatchV1Icon'
} as const;
export type BirdwatchPivotIconTypeEnum = typeof BirdwatchPivotIconTypeEnum[keyof typeof BirdwatchPivotIconTypeEnum];

/**
 * @export
 */
export const BirdwatchPivotVisualStyleEnum = {
    Default: 'Default'
} as const;
export type BirdwatchPivotVisualStyleEnum = typeof BirdwatchPivotVisualStyleEnum[keyof typeof BirdwatchPivotVisualStyleEnum];


/**
 * Check if a given object implements the BirdwatchPivot interface.
 */
export function instanceOfBirdwatchPivot(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "destinationUrl" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "iconType" in value;
    isInstance = isInstance && "note" in value;
    isInstance = isInstance && "shorttitle" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function BirdwatchPivotFromJSON(json: any): BirdwatchPivot {
    return BirdwatchPivotFromJSONTyped(json, false);
}

export function BirdwatchPivotFromJSONTyped(json: any, ignoreDiscriminator: boolean): BirdwatchPivot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destinationUrl': json['destinationUrl'],
        'footer': BirdwatchPivotFooterFromJSON(json['footer']),
        'iconType': json['iconType'],
        'note': BirdwatchPivotNoteFromJSON(json['note']),
        'shorttitle': json['shorttitle'],
        'subtitle': BirdwatchPivotSubtitleFromJSON(json['subtitle']),
        'title': json['title'],
        'visualStyle': !exists(json, 'visualStyle') ? undefined : json['visualStyle'],
    };
}

export function BirdwatchPivotToJSON(value?: BirdwatchPivot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destinationUrl': value.destinationUrl,
        'footer': BirdwatchPivotFooterToJSON(value.footer),
        'iconType': value.iconType,
        'note': BirdwatchPivotNoteToJSON(value.note),
        'shorttitle': value.shorttitle,
        'subtitle': BirdwatchPivotSubtitleToJSON(value.subtitle),
        'title': value.title,
        'visualStyle': value.visualStyle,
    };
}

