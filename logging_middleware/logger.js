const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2NzZTAyNUBjZ2NqaGFuamVyaS5pbiIsImV4cCI6MTc4MDQ3NzQwMiwiaWF0IjoxNzgwNDc2NTAyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNGVkODVhN2EtZmFmZS00YmU0LWIzNjUtMjhiYjJkZDA2NDFjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuam90IHNpbmdoIGdyZXdhbCIsInN1YiI6ImFjMmMyYjBhLTM3NmUtNDExOC04NDM3LTY4MTg5ZTMzMmM5MSJ9LCJlbWFpbCI6IjIzY3NlMDI1QGNnY2poYW5qZXJpLmluIiwibmFtZSI6Im1hbmpvdCBzaW5naCBncmV3YWwiLCJyb2xsTm8iOiIyMzMwMTQ2IiwiYWNjZXNzQ29kZSI6Im53d3NLeCIsImNsaWVudElEIjoiYWMyYzJiMGEtMzc2ZS00MTE4LTg0MzctNjgxODllMzMyYzkxIiwiY2xpZW50U2VjcmV0IjoiV1NxempUeGpuQVphaERVQSJ9.YVVtLiCiLji4txMisqvCQPwPgpUSnlSLaHds4B6AGZE";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);

  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
  }
}

module.exports = { Log };