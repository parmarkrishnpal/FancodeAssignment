import UserAPI from "../support/UsersAPI";
import { isUserFromFanCodeCity } from "../support/utils";

describe("Validate API Response", () => {
  it("Verify FanCode city's users have more than half of their todos completed", () => {
    UserAPI.fetchUsers().then((users) => {
      const fanCodeUsers = users.filter(isUserFromFanCodeCity);

      fanCodeUsers.forEach((user) => {
        cy.wrap(null).then(() => {
          return UserAPI.fetchUserTodos(user.id);
        }).then((todos) => {
          const completedTasks = todos.filter((todo) => todo.completed).length;
          const completionPercentage = (completedTasks / todos.length) * 100;

          const assertionMessage =
            completionPercentage > 50
              ? `✅ User ${user.id} passed with ${completionPercentage}% completed tasks.`
              : `❌ User ${user.id} has only ${completionPercentage}% tasks completed. Expected more than 50%.`;

          expect(completionPercentage).to.be.greaterThan(
            50,
            assertionMessage // Fail message will be shown if condition isn't met
          );
        });
      });
    });
  });
});
