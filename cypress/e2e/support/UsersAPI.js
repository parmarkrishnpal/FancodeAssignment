class UserAPI {
    constructor() {
      this.apiBaseUrl = Cypress.env("apiBaseUrl");
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
  }
  
  export default new UserAPI();
  