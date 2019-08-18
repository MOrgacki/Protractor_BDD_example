Feature: User visits ProtoCommerce site where he sumbits a form

@SumbitForm
Scenario Outline: Submitting a form correctly

Given User navigates to ProtoCommerce
When User fills name with "<name>", email with "<email>", password with "<password>"
And Selects "<gender>" gender option employment "<status>" and "<birthDate>"
Then the output displayed should be "Success!"

Examples:
| name | email | password | gender | status | birthDate |
| Tester  | test@o2.pl  | 1234567890  | Male  | Student  | 10/10/1992  |
| Ta  | test@gmail.com  | 0000  | Female  | Employed | 15/01/1827  |

@SumbitForm
Scenario: Validating a name and email fields

Given User navigates to ProtoCommerce
When User leaves blank name and email fields
Then the validation messages should be displayed



