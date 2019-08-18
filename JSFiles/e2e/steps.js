"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const MainPage_1 = require("../pageObjects/MainPage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let form = new MainPage_1.ProtoForm();
cucumber_1.Given('User navigates to ProtoCommerce', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://qaclickacademy.github.io/protocommerce/");
}));
cucumber_1.When('User fills name with {string}, email with {string}, password with {string}', (name, email, password) => __awaiter(this, void 0, void 0, function* () {
    yield form.Name.sendKeys(name);
    yield form.Email.sendKeys(email);
    yield form.Password.sendKeys(password);
    yield form.Checkbox.click();
}));
cucumber_1.When('Selects {string} gender option employment {string} and {string}', (gender, status, date) => __awaiter(this, void 0, void 0, function* () {
    if (gender == "Male") {
        yield form.GenderMale.click();
    }
    else if (gender == "Female") {
        yield form.GenderFemale.click();
    }
    if (status == "Student") {
        yield form.StatusStudent.click();
    }
    else if (status == "Employed") {
        yield form.StatusEmployed.click();
    }
    yield form.BirthDate.sendKeys(date);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield form.SubmitButton.click();
    yield form.AcceptText.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('User leaves blank name and email fields', () => __awaiter(this, void 0, void 0, function* () {
    yield form.Name.click();
    yield form.Email.click();
    yield form.Password.click();
}));
cucumber_1.Then('the validation messages should be displayed', () => __awaiter(this, void 0, void 0, function* () {
    yield form.Validation.count().then(function (number) {
        expect(number).to.equal(2);
    });
}));
//# sourceMappingURL=steps.js.map