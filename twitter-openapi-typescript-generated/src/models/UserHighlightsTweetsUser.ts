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
import type { UserHighlightsTweetsResult } from './UserHighlightsTweetsResult';
import {
    UserHighlightsTweetsResultFromJSON,
    UserHighlightsTweetsResultFromJSONTyped,
    UserHighlightsTweetsResultToJSON,
} from './UserHighlightsTweetsResult';

/**
 * 
 * @export
 * @interface UserHighlightsTweetsUser
 */
export interface UserHighlightsTweetsUser {
    /**
     * 
     * @type {UserHighlightsTweetsResult}
     * @memberof UserHighlightsTweetsUser
     */
    result: UserHighlightsTweetsResult;
}

/**
 * Check if a given object implements the UserHighlightsTweetsUser interface.
 */
export function instanceOfUserHighlightsTweetsUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function UserHighlightsTweetsUserFromJSON(json: any): UserHighlightsTweetsUser {
    return UserHighlightsTweetsUserFromJSONTyped(json, false);
}

export function UserHighlightsTweetsUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserHighlightsTweetsUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': UserHighlightsTweetsResultFromJSON(json['result']),
    };
}

export function UserHighlightsTweetsUserToJSON(value?: UserHighlightsTweetsUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': UserHighlightsTweetsResultToJSON(value.result),
    };
}

