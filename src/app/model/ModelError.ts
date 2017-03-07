/**
 * schulNetz Rest API
 * schulNetz REST JSON API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@centerboard.ch
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface ModelError {
    /**
     * <ul><li>1001: Technical error while calling the Web Service</li><li>1002: Error while parsing the JSON</li><li>1003: Invalid input</li><li>1004: Database Error while inserting</li><li>1005: Database Error because of duplicate entry</li><li>5001: Registration called with Invalid offerId</li></ul>
     */
    code: number;

    message: string;

    description?: string;

}
