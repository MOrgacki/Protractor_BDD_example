import { ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class ProtoForm {

    Name: ElementFinder;
    Email: ElementFinder;
    Password: ElementFinder;
    Checkbox: ElementFinder;
    GenderMale: ElementFinder;
    GenderFemale: ElementFinder;
    StatusStudent: ElementFinder;
    StatusEmployed: ElementFinder;
    BirthDate: ElementFinder;
    SubmitButton: ElementFinder;
    AcceptText: ElementFinder;
    Validation: ElementArrayFinder;

    constructor() {

        this.Name = element(by.name("name"));
        this.Email = element(by.name("email"));
        this.Password = element(by.id("exampleInputPassword1"));
        this.Checkbox = element(by.id("exampleCheck1"));
        this.GenderMale = element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Male"))
        this.GenderFemale = element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female"))
        this.StatusStudent = element(by.id("inlineRadio1"));
        this.StatusEmployed = element(by.id("inlineRadio2"));
        this.BirthDate = element(by.name("bday"));
        this.SubmitButton = element(by.partialButtonText("Submit"));
        this.AcceptText = element(by.css("div[class*='success'] strong"));
        this.Validation = element.all(by.css("div[class*='alert alert-danger']"));


    }

} 