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
import type { BirdwatchEntity } from './BirdwatchEntity';
import {
    BirdwatchEntityFromJSON,
    BirdwatchEntityFromJSONTyped,
    BirdwatchEntityToJSON,
} from './BirdwatchEntity';

/**
 * 
 * @export
 * @interface BirdwatchPivotSubtitle
 */
export interface BirdwatchPivotSubtitle {
    /**
     * 
     * @type {Array<BirdwatchEntity>}
     * @memberof BirdwatchPivotSubtitle
     */
    entities: Array<BirdwatchEntity>;
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivotSubtitle
     */
    text: string;
}

/**
 * Check if a given object implements the BirdwatchPivotSubtitle interface.
 */
export function instanceOfBirdwatchPivotSubtitle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entities" in value;
    isInstance = isInstance && "text" in value;

    return isInstance;
}

export function BirdwatchPivotSubtitleFromJSON(json: any): BirdwatchPivotSubtitle {
    return BirdwatchPivotSubtitleFromJSONTyped(json, false);
}

export function BirdwatchPivotSubtitleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BirdwatchPivotSubtitle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entities': ((json['entities'] as Array<any>).map(BirdwatchEntityFromJSON)),
        'text': json['text'],
    };
}

export function BirdwatchPivotSubtitleToJSON(value?: BirdwatchPivotSubtitle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entities': ((value.entities as Array<any>).map(BirdwatchEntityToJSON)),
        'text': value.text,
    };
}

