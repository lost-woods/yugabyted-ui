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
 * Schema for Live Query Response YSQL Query Item
 * @export
 * @interface LiveQueryResponseYSQLQueryItem
 */
export interface LiveQueryResponseYSQLQueryItem  {
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  id?: string;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  node_name?: string;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  db_name?: string;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  session_status?: string;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  query?: string;
  /**
   * 
   * @type {number}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  elapsed_millis?: number;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  query_start_time?: string;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  app_name?: string;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  client_host?: string;
  /**
   * 
   * @type {string}
   * @memberof LiveQueryResponseYSQLQueryItem
   */
  client_port?: string;
}



