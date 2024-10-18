import UserAPI from "../../support/UsersAPI";

describe("Validate API Response", () => {
  it("Verify FanCode city's users should have more than half of their todos completed", () => {
    UserAPI.fetchUsers().then((users) => {
      const fanCodeUsers = users.filter((user) =>
        UserAPI.isUserFromFanCodeCity(user)
      );

      fanCodeUsers.forEach((user) => {
        UserAPI.fetchUserTodos(user.id).then((todos) => {
          const completedTasks = todos.filter((todo) => todo.completed).length;
          const completionPercentage = (completedTasks / todos.length) * 100;

          expect(completionPercentage).to.be.greaterThan(
            50,
            `User ${user.id} should have completed more than half of their todos.`
          );
        });
      });
    });
  });
});
