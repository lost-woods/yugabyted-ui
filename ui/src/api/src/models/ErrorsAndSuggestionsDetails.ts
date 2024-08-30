// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




/**
 * Errors and suggestions details
 * @export
 * @interface ErrorsAndSuggestionsDetails
 */
export interface ErrorsAndSuggestionsDetails  {
  /**
   * 
   * @type {string}
   * @memberof ErrorsAndSuggestionsDetails
   */
  objectType?: string;
  /**
   * 
   * @type {string}
   * @memberof ErrorsAndSuggestionsDetails
   */
  objectName?: string;
  /**
   * 
   * @type {string}
   * @memberof ErrorsAndSuggestionsDetails
   */
  reason?: string;
  /**
   * 
   * @type {string}
   * @memberof ErrorsAndSuggestionsDetails
   */
  sqlStatement?: string;
  /**
   * 
   * @type {string}
   * @memberof ErrorsAndSuggestionsDetails
   */
  filePath?: string;
  /**
   * 
   * @type {string}
   * @memberof ErrorsAndSuggestionsDetails
   */
  suggestion?: string;
  /**
   * 
   * @type {string}
   * @memberof ErrorsAndSuggestionsDetails
   */
  GH?: string;
}



