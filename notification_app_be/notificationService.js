const axios = require("axios");

// Import logging middleware
const { Log } = require("../logging_middleware/logger");

// Paste your access token here
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2NzZTAyNUBjZ2NqaGFuamVyaS5pbiIsImV4cCI6MTc4MDQ3OTgyMywiaWF0IjoxNzgwNDc4OTIzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWMxOTUyYjQtNjlmNS00NjM2LWI1ZmEtZjk0M2I4NDY3OTRkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuam90IHNpbmdoIGdyZXdhbCIsInN1YiI6ImFjMmMyYjBhLTM3NmUtNDExOC04NDM3LTY4MTg5ZTMzMmM5MSJ9LCJlbWFpbCI6IjIzY3NlMDI1QGNnY2poYW5qZXJpLmluIiwibmFtZSI6Im1hbmpvdCBzaW5naCBncmV3YWwiLCJyb2xsTm8iOiIyMzMwMTQ2IiwiYWNjZXNzQ29kZSI6Im53d3NLeCIsImNsaWVudElEIjoiYWMyYzJiMGEtMzc2ZS00MTE4LTg0MzctNjgxODllMzMyYzkxIiwiY2xpZW50U2VjcmV0IjoiV1NxempUeGpuQVphaERVQSJ9.4tmDCqi1vwVuzSOMXxekYfOQFHvpCDjmjQWwqFEfXBQ";

async function fetchNotifications() {
  try {
    await Log(
      "backend",
      "info",
      "service",
      "Fetching notifications from API"
    );

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    await Log(
      "backend",
      "info",
      "service",
      "Notifications fetched successfully"
    );

    return response.data.notifications;
  } catch (error) {
    await Log(
      "backend",
      "error",
      "service",
      "Failed to fetch notifications"
    );

    console.error(error.response?.data || error.message);
    return [];
  }
}

module.exports = { fetchNotifications };