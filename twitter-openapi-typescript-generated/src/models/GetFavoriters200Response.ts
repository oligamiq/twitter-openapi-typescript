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

import type { Errors } from './Errors';
import {
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';
import type { TweetFavoritersResponse } from './TweetFavoritersResponse';
import {
    instanceOfTweetFavoritersResponse,
    TweetFavoritersResponseFromJSON,
    TweetFavoritersResponseFromJSONTyped,
    TweetFavoritersResponseToJSON,
} from './TweetFavoritersResponse';

/**
 * @type GetFavoriters200Response
 * 
 * @export
 */
export type GetFavoriters200Response = Errors | TweetFavoritersResponse;

export function GetFavoriters200ResponseFromJSON(json: any): GetFavoriters200Response {
    return GetFavoriters200ResponseFromJSONTyped(json, false);
}

export function GetFavoriters200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFavoriters200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...TweetFavoritersResponseFromJSONTyped(json, true) };
}

export function GetFavoriters200ResponseToJSON(value?: GetFavoriters200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfTweetFavoritersResponse(value)) {
        return TweetFavoritersResponseToJSON(value as TweetFavoritersResponse);
    }

    return {};
}

