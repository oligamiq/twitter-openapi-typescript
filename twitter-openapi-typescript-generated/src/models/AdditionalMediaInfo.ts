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
 * @interface AdditionalMediaInfo
 */
export interface AdditionalMediaInfo {
    /**
     * 
     * @type {boolean}
     * @memberof AdditionalMediaInfo
     */
    monetizable: boolean;
}

/**
 * Check if a given object implements the AdditionalMediaInfo interface.
 */
export function instanceOfAdditionalMediaInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "monetizable" in value;

    return isInstance;
}

export function AdditionalMediaInfoFromJSON(json: any): AdditionalMediaInfo {
    return AdditionalMediaInfoFromJSONTyped(json, false);
}

export function AdditionalMediaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdditionalMediaInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'monetizable': json['monetizable'],
    };
}

export function AdditionalMediaInfoToJSON(value?: AdditionalMediaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'monetizable': value.monetizable,
    };
}

