# Stage 1 - Notification Priority System Design

## Objective

Display the top 10 most important notifications using priority and recency.

## Priority Rules

- Placement = 3
- Result = 2
- Event = 1

## Algorithm

Each notification receives a score:

Score = TypeWeight + Recency

Notifications are sorted by score in descending order.

The first 10 notifications are selected and displayed.

## Current Complexity

O(n log n)

## Efficient Future Approach

Use a Min Heap of size 10.

Complexity becomes:

O(n log 10)

which is more efficient when notifications continuously arrive.

## Logging

Reusable logging middleware is used throughout the application.

Logged events:

- API fetch start
- API fetch success
- API fetch failure
- Top 10 generation