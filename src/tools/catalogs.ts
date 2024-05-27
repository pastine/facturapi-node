import { AxiosInstance } from "axios";

export default class Catalogs {
  client: AxiosInstance;
  
  constructor (client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Creates a new product in your organization
   * @param {Object} params - Search parameters
   * @returns {Promise}
   */
  searchProducts (params: Record<string, any> | null) {
    return this.client.get('/catalogs/products', { params }).then(response => response.data);
  }

  /**
   * Gets a paginated list of products that belong to your organization
   * @param {[Object]} params - Search parameters
   * @returns {Promise}
   */
  searchUnits (params: Record<string, any> | null) {
    return this.client.get('/catalogs/units', { params }).then(response => response.data);
  }
}
