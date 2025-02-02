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
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
import type { Url } from './Url';
import {
    UrlFromJSON,
    UrlFromJSONTyped,
    UrlToJSON,
} from './Url';

/**
 * 
 * @export
 * @interface Entities
 */
export interface Entities {
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof Entities
     */
    hashtags: Array<{ [key: string]: any; }>;
    /**
     * 
     * @type {Array<Media>}
     * @memberof Entities
     */
    media?: Array<Media>;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof Entities
     */
    symbols: Array<{ [key: string]: any; }>;
    /**
     * 
     * @type {Array<Url>}
     * @memberof Entities
     */
    urls: Array<Url>;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof Entities
     */
    userMentions: Array<{ [key: string]: any; }>;
}

/**
 * Check if a given object implements the Entities interface.
 */
export function instanceOfEntities(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hashtags" in value;
    isInstance = isInstance && "symbols" in value;
    isInstance = isInstance && "urls" in value;
    isInstance = isInstance && "userMentions" in value;

    return isInstance;
}

export function EntitiesFromJSON(json: any): Entities {
    return EntitiesFromJSONTyped(json, false);
}

export function EntitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Entities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hashtags': json['hashtags'],
        'media': !exists(json, 'media') ? undefined : ((json['media'] as Array<any>).map(MediaFromJSON)),
        'symbols': json['symbols'],
        'urls': ((json['urls'] as Array<any>).map(UrlFromJSON)),
        'userMentions': json['user_mentions'],
    };
}

export function EntitiesToJSON(value?: Entities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hashtags': value.hashtags,
        'media': value.media === undefined ? undefined : ((value.media as Array<any>).map(MediaToJSON)),
        'symbols': value.symbols,
        'urls': ((value.urls as Array<any>).map(UrlToJSON)),
        'user_mentions': value.userMentions,
    };
}

