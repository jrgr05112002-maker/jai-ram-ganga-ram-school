# Shri Jai Ram Ganga Ram Smart School - MERN + SDET Project

This repository contains the school website frontend, Node/Express backend, MongoDB integration, and Java automation tests.

```text
jai-ram-ganga-ram-school/
├── client/     # React + Vite frontend
├── server/     # Node.js + Express + MongoDB/Mongoose backend
└── tests/      # Java + Selenium + Rest Assured + TestNG automation
```

## Start the application

### Backend

```bash
cd server
npm install
npm run dev
```

Backend: http://localhost:5000

### Frontend

```bash
cd client
npm install
npm run dev
```

Frontend: http://localhost:5173

### Automation

With both frontend and backend running:

```bash
cd tests
mvn test
```

See `tests/README.md` for complete automation details.
