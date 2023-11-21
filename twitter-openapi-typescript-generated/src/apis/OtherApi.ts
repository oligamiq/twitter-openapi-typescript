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


import * as runtime from '../runtime';
import type {
  Other200Response,
} from '../models/index';
import {
    Other200ResponseFromJSON,
    Other200ResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class OtherApi extends runtime.BaseAPI {

    /**
     * This is not an actual endpoint
     */
    async otherRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Other200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Pragma"] = this.configuration.apiKey("Pragma"); // Pragma authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Cache-Control"] = this.configuration.apiKey("Cache-Control"); // CacheControl authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/other`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Other200ResponseFromJSON(jsonValue));
    }

    /**
     * This is not an actual endpoint
     */
    async other(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Other200Response> {
        const response = await this.otherRaw(initOverrides);
        return await response.value();
    }

}
