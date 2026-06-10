# Prime Scoreboard API Test

## Positive Scenario

Request

PUT /api/scoreboard

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
- homeScore = 2
- awayScore = 1
- Updated score visible in preview

---

## Negative Scenario

Request

```json
{
  "homeScore": -1
}
```

Expected:

- Status Code = 400
- Validation error returned