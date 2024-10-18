class UserAPI {
    constructor() {
      this.apiBaseUrl = Cypress.env("apiBaseUrl"); // Use base URL from Cypress config
    }
  
    /**
     * Fetch all users from the API
     * @returns {Promise<Array>} List of users
     */
    fetchUsers() {
      return cy
        .request("GET", `${this.apiBaseUrl}/users`)
        .then((response) => response.body);
    }
  
    /**
     * Fetch todos for a specific user by ID
     * @param {Number} userId - The user ID
     * @returns {Promise<Array>} List of todos
     */
    fetchUserTodos(userId) {
      return cy
        .request("GET", `${this.apiBaseUrl}/users/${userId}/todos`)
        .then((response) => response.body);
    }
  
    /**
     * Check if the user's latitude and longitude falls within FanCode city range
     * @param {Object} user - User object
     * @returns {Boolean} True if user is from FanCode city
     */
    isUserFromFanCodeCity(user) {
      const lat = parseFloat(user.address.geo.lat);
      const lng = parseFloat(user.address.geo.lng);
      return lat > -40 && lat < 5 && lng > 5 && lng < 100;
    }
  }
  
  export default new UserAPI(); // Exporting an instance to reuse across files
  