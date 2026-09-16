const { login } = require("./auth");

describe("Regression Tests - Login", () => {

    test("Login fails when password is incorrect", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Login fails when username is incorrect", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Throws error when username is empty", () => {
        expect(() => login("", "123"))
            .toThrow("Username cannot be empty");
    });

    test("Throws error when username contains only spaces", () => {
        expect(() => login("   ", "123"))
            .toThrow("Username cannot be empty");
    });

    test("Throws error when password is empty", () => {
        expect(() => login("admin", ""))
            .toThrow("Password cannot be empty");
    });

    test("Throws error when password contains special characters", () => {
        expect(() => login("admin", "12@3"))
            .toThrow("Password contains special characters");
    });

    test("Throws error when account is locked", () => {
        expect(() => login("locked", "123"))
            .toThrow("Account is locked");
    });

    test("Login fails when both username and password are incorrect", () => {
        expect(login("user", "456")).toBe(false);
    });

});
