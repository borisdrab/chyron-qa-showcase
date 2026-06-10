import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 10,
    duration: "30s",
};

export default function () {
    const payload = JSON.stringify({
        homeTeam: "Team A",
        awayTeam: "Team B",
        homeScore: 2,
        awayScore: 1,
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const result = http.post(
        "https://httpbin.org/post",
        payload,
        params
    );

    check(result, {
        "status is 200": (r) => r .status === 200,
        "response time is below 500ms": (r) => r.timings.duration < 1500,
    });

    sleep(1);
}