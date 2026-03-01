Feature: Create Lead

Scenario: Create a new lead successfully
  Given I launch the leaftaps application
  And I enter username "demosalesmanager"
  And I enter password "crmsfa"
  And I click login
  When I navigate to Create Lead page
  And I enter company name "TestCompany"
  And I enter first name "Sudarshan"
  And I enter last name "B"
  And I click submit
  Then the lead should be created successfully