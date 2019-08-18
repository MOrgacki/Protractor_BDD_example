"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ProtoForm {
    constructor() {
        this.Name = protractor_1.element(protractor_1.by.name("name"));
        this.Email = protractor_1.element(protractor_1.by.name("email"));
        this.Password = protractor_1.element(protractor_1.by.id("exampleInputPassword1"));
        this.Checkbox = protractor_1.element(protractor_1.by.id("exampleCheck1"));
        this.GenderMale = protractor_1.element(protractor_1.by.cssContainingText("[id='exampleFormControlSelect1'] option", "Male"));
        this.GenderFemale = protractor_1.element(protractor_1.by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female"));
        this.StatusStudent = protractor_1.element(protractor_1.by.id("inlineRadio1"));
        this.StatusEmployed = protractor_1.element(protractor_1.by.id("inlineRadio2"));
        this.BirthDate = protractor_1.element(protractor_1.by.name("bday"));
        this.SubmitButton = protractor_1.element(protractor_1.by.partialButtonText("Submit"));
        this.AcceptText = protractor_1.element(protractor_1.by.css("div[class*='success'] strong"));
        this.Validation = protractor_1.element.all(protractor_1.by.css("div[class*='alert alert-danger']"));
    }
}
exports.ProtoForm = ProtoForm;
//# sourceMappingURL=MainPage.js.map