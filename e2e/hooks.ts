import {After, Before} from "cucumber";
import {browser} from "protractor";


Before({tags: "@SumbitForm"}, async ()=>{
await browser.manage().window().maximize();
});