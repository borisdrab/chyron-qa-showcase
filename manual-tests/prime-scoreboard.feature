Feature: Sports Graphics

Scenario: Update scoreboard score

  Given a scoreboard graphic is displayed
  When the operator changes the home score from 1 to 2
  Then the updated score should be visible in the preview
  And the scoreboard should display the home score as 2