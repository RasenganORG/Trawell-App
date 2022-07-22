/// <reference types="cypress" />

describe('Testing home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/')
	})
	it('locating', () => {
		// Get all elements by tag name
		cy.get('button')
		cy.get('span')

		// Get elements by className
		cy.get(".ant-btn-primary")

		// Get all elements with specific class
		cy.get("[class='ant-btn ant-btn-default ant-dropdown-trigger']")
		cy.get("[class='ant-select ant-select-auto-complete ant-select-single ant-select-show-search']")
		cy.get("[class='ant-btn ant-btn-default ant-dropdown-trigger checkin']")

		//Get all elements by id
		// cy.get("[id = 'xxxx']")
		// cy.get("#xxxx")

		// Get all elements by specific attribute
		// cy.get("[type='submit']")

		// Get all elements by tag name AND class
		cy.get("button.ant-dropdown-trigger")

		// Get all elements by tag name AND class AND id
		cy.get("button.ant-dropdown-trigger#btn-who-travels")

		// Get all elements by tag name AND class  AND type attribute
		// cy.get("button.className[type='submit']")

		//Get all elements with specific data test id
		cy.get("[data-cy='blabla']")
		cy.getByTestId("blabla")
	})

	it("locating elements with contains", () => {
		
	})
})


























// describe("complete the register page", () =>
// {
// 	it("complets correctly", () => {
// 		cy.visit("http://localhost:3000/register")
// 		cy.get("#register-forms").should("exist")
// 		cy.wait(500);
// 		cy.get('#firstName').type("Teodor")
// 		cy.wait(500);
// 		cy.get('#lastName').type("Voicu")
// 		cy.wait(500);
// 		cy.get('#email').type("voicuteodor@yahoo.com")
// 		cy.wait(500);
// 		cy.get('#calendar').click()
// 		cy.wait(500);
// 		cy.get('#password').type("12345")
// 		cy.wait(500);
// 		cy.get('#confirmPassword').type("12345")
// 		cy.wait(500);
// 		cy.get('#submit').click() 
// })
// })

// describe("test home page", () =>
// {
// 	it("renders correctly", () => {
// 		cy.visit("http://localhost:3000/home")
// 		cy.wait(500);
// 		cy.get('#firstName').type("Teodor")
// 		cy.wait(500);
// 		cy.get('#lastName').type("Voicu")
// 		cy.wait(500);
// 		cy.get('#email').type("voicuteodor@yahoo.com")
// 		cy.wait(500);
// 		cy.get('#calendar').click()
// 		cy.wait(500);
// 		cy.get('#password').type("12345")
// 		cy.wait(500);
// 		cy.get('#confirmPassword').type("12345")
// 		cy.wait(500);
// 		cy.get('#submit').click()
// })
// })

// it("signup and login user", () => {
// 	cy.visit("http://localhost:3000/login");
// 	cy.get("Form").type("1234");
// 	cy.contains("Username").type("voicuteodor@yahoo.com");
// 	cy.contains("Connect").click();

// 	cy.visit("http://localhost:3000/register");
// 	cy.contains('password').type("Teodor");
// 	// cy.contains('input[title="First Name"]').type("Teodor");

// });
// cy.visit("http://localhost:3000/home");
// cy.wait(100);

// cy.contains("Checkin").click();

// cy.url().should("include", "/localhost");

// cy.get("input").eq(1).type("random text");
// cy.contains("Become a host").click();
// cy.get("button").click({ multiple: true });
// cy.wait(100);
// cy.get("input").click({ multiple: true });

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
