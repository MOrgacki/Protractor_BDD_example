import { Given,When, Then } from "cucumber";
import { ProtoForm } from "../pageObjects/MainPage";
import { browser, element } from "protractor";
import chai from "chai";


var expect = chai.expect;
let form = new ProtoForm();

  Given('User navigates to ProtoCommerce', async () => {
   await browser.get("https://qaclickacademy.github.io/protocommerce/");
  });
  When('User fills name with {string}, email with {string}, password with {string}', async (name, email, password) => {
    await form.Name.sendKeys(name)
    await form.Email.sendKeys(email)
    await form.Password.sendKeys(password)
    await form.Checkbox.click();
  });
  When('Selects {string} gender option employment {string} and {string}', async (gender, status, date) => { 
    if(gender=="Male")
     {
      await form.GenderMale.click();
     }
    else if(gender=="Female")
     {
      await form.GenderFemale.click();
     }

    if(status=="Student")
    {
    await form.StatusStudent.click();
    }
    else if (status=="Employed")
    {
    await form.StatusEmployed.click();
    }  
    await form.BirthDate.sendKeys(date);
  });
  Then('the output displayed should be {string}', async (string)=> {
    await form.SubmitButton.click();
    await form.AcceptText.getText().then(function (text)
    {
      expect(text).to.equal(string)
    })
  });

  When('User leaves blank name and email fields', async () => {
    await form.Name.click();
    await form.Email.click();
    await form.Password.click();
  });

  Then('the validation messages should be displayed', async () => {

    await form.Validation.count().then(function (number)
    {
      expect(number).to.equal(2);
    })

  });
