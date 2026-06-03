import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { getNotifications } from "./services/api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getNotifications();

        console.log("API RESPONSE:", response);

        setData(response);
      } catch (error) {
        console.error("ERROR:", error);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: 4,
          mb: 4,
        }}
      >
        Campus Notifications System
      </Typography>

      <pre
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
          overflow: "auto",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </Container>
  );
}

export default App;