const { fetchNotifications } = require("./notificationService");
const { Log } = require("../logging_middleware/logger");

const TYPE_WEIGHT = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function main() {
  try {
    const notifications = await fetchNotifications();

    const ranked = notifications.map((notification) => {
      const weight = TYPE_WEIGHT[notification.Type] || 0;

      return {
        ...notification,
        score:
          weight * 1000000000000 +
          new Date(notification.Timestamp).getTime(),
      };
    });

    ranked.sort((a, b) => b.score - a.score);

    const top10 = ranked.slice(0, 10);

    console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");

    top10.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.Type} | ${item.Message} | ${item.Timestamp}`
      );
    });

    await Log(
      "backend",
      "info",
      "service",
      "Top 10 notifications generated successfully"
    );
  } catch (error) {
    await Log(
      "backend",
      "error",
      "service",
      "Error generating top notifications"
    );

    console.error(error);
  }
}

main();