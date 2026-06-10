# API Testing

This project contains example API test scenarios demonstrating how a scoreboard API could be tested using Postman.

## Example Positive Scenario

Request

```json
{
  "homeTeam": "Team A",
  "awayTeam": "Team B",
  "homeScore": 2,
  "awayScore": 1
}
```

Expected:

- Status Code = 200
- Request accepted successfully
- Updated score returned by the API

---

## Example Negative Scenario

Request

```json
{
  "homeScore": -1
}
```

Expected:

- Status Code = 400
- Validation error returned
- Invalid score rejected
```