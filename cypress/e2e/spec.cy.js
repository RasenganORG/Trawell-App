import { getAllByAltText } from "@testing-library/react";

describe("First Trawell-App Test", function () {
  it("Gets, types and asserts", function () {
    cy.visit("http://localhost:3000/register");

    cy.contains("Checkin").click();

    cy.url().should("include", "/localhost");

    cy.get("input").eq(1).type("random text");
    cy.contains("Become a host").click();
  });
});

// describe('First test', () => {
//   it('Check if new task form is working', () => {
//     cy.visit('http://localhost:3000/%27)
//         cy.wait(100)
//         cy.contains('Project 1').click()
//         cy.contains("Add new task").click()
//         cy.wait(100)
//         cy.get("input").eq(4).type("task name")
//         cy.get("textarea").type("task description")

//         cy.get('[data-cy="newTaskAsignee"]').click()
//         cy.get(".ant-select-item-option-content").eq(1).click()
//         // cy.get('[taskDueDate]')
//         cy.contains("Create task").click()
//    })
// })
