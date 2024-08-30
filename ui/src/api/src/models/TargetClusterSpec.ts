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
 * schema for target cluster cpu, memory
 * @export
 * @interface TargetClusterSpec
 */
export interface TargetClusterSpec  {
  /**
   * 
   * @type {number}
   * @memberof TargetClusterSpec
   */
  num_nodes?: number;
  /**
   * 
   * @type {number}
   * @memberof TargetClusterSpec
   */
  vcpu_per_node?: number;
  /**
   * 
   * @type {number}
   * @memberof TargetClusterSpec
   */
  memory_per_node?: number;
  /**
   * 
   * @type {number}
   * @memberof TargetClusterSpec
   */
  connections_per_node?: number;
  /**
   * 
   * @type {number}
   * @memberof TargetClusterSpec
   */
  inserts_per_node?: number;
}


