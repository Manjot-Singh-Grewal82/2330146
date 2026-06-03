import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2NzZTAyNUBjZ2NqaGFuamVyaS5pbiIsImV4cCI6MTc4MDQ3OTgyMywiaWF0IjoxNzgwNDc4OTIzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWMxOTUyYjQtNjlmNS00NjM2LWI1ZmEtZjk0M2I4NDY3OTRkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuam90IHNpbmdoIGdyZXdhbCIsInN1YiI6ImFjMmMyYjBhLTM3NmUtNDExOC04NDM3LTY4MTg5ZTMzMmM5MSJ9LCJlbWFpbCI6IjIzY3NlMDI1QGNnY2poYW5qZXJpLmluIiwibmFtZSI6Im1hbmpvdCBzaW5naCBncmV3YWwiLCJyb2xsTm8iOiIyMzMwMTQ2IiwiYWNjZXNzQ29kZSI6Im53d3NLeCIsImNsaWVudElEIjoiYWMyYzJiMGEtMzc2ZS00MTE4LTg0MzctNjgxODllMzMyYzkxIiwiY2xpZW50U2VjcmV0IjoiV1NxempUeGpuQVphaERVQSJ9.4tmDCqi1vwVuzSOMXxekYfOQFHvpCDjmjQWwqFEfXBQ";

export const api = axios.create({
  baseURL: "http://4.224.186.213/evaluation-service",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const getNotifications = async () => {
  const response = await api.get("/notifications");
  return response.data;
};