const Validator = require('./main.js');

describe("Validator", () => {
    describe("validateUsername", () => {
      it("should return true for valid username", () => {
        expect(Validator("username")).toBe(true);
      });
      it("should return false if username starts with a number", () => {
        expect(Validator("1username")).toBe(false);
      });
      it("should return false if username ends with a number", () => {
        expect(Validator("username2")).toBe(false);
      });
      it("should return false if username contains four or more consecutive numbers", () => {
        expect(Validator("u1234ser5name")).toBe(false);
      });
      it("should return false if username contains special characters other than underscore and hyphen", () => {
        expect(Validator("user@name")).toBe(false);
      });
    });
  });