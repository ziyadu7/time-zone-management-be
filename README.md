cat << 'EOF' > README.md
# Timezone & Timeslot Management – Backend

This repository contains the backend service for the **Timezone and Timeslot Management** application.  
It exposes REST APIs to fetch timezones and UTC-based timeslots.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Render (Deployment)

---

## 📁 Project Structure

src/
├─ app.ts # Express app configuration
├─ server.ts # Application entry point
├─ routes/ # API routes
├─ controllers/ # Request/response handlers
├─ services/ # Business logic
├─ models/ # Database access layer
├─ config/ # Database configuration
└─ types/ # Shared TypeScript interfaces


---

## 🔌 API Endpoints

### Get Timezones

GET /api/timezones

Response:
```json
[
  { "id": "IST", "name": "India Standard Time", "offset": 5.5 },
  { "id": "ET", "name": "Eastern Time", "offset": -5 }
]

GET /api/timeslots

[
  { "utc_time": "2025-01-23T10:00:00Z" },
  { "utc_time": "2025-01-23T12:00:00Z" }
]


🗄️ Database Design

Timezones Table

CREATE TABLE timezones (
  id VARCHAR PRIMARY KEY,
  name VARCHAR NOT NULL,
  offset NUMERIC NOT NULL
);

Timeslots Table
CREATE TABLE timeslots (
  utc_time TIMESTAMPTZ PRIMARY KEY
);


All timeslots are stored only in UTC to ensure consistency across timezones.


▶️ Run Locally
npm install
npm run dev


The server will start at:

http://localhost:8081

🏗️ Build & Run for Production
npm run build
npm start

☁️ Deployment

Deployed on Render

Uses render.yaml for service configuration

Database credentials injected securely via environment variables

🧠 Design Decisions

All timeslots are stored in UTC

Timezone conversion is handled on the frontend

Layered architecture (controller → service → model)

TypeScript used for type safety and maintainability

✅ Status

✔ Backend complete
✔ APIs tested
✔ Ready for production deployment
EOF


---

## ✅ Final Step

After running the command:

```bash
git add README.md
git commit -m "Add backend README"
git push