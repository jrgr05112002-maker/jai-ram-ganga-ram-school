# Shri Jai Ram Ganga Ram Smart School - Server

Backend API for the MERN school website.

## Features

- Node.js + Express backend
- MongoDB + Mongoose database
- CORS configured for the React/Vite client
- Contact/enquiry form API
- Validation and centralized error handling
- Health-check route

## Folder structure

```text
server/
├── controllers/
│   └── enquiryController.js
├── middleware/
│   └── errorMiddleware.js
├── models/
│   └── Enquiry.js
├── routes/
│   └── enquiryRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## 1. Install dependencies

Open a terminal inside the `server` folder:

```bash
npm install
```

## 2. Create `.env`

Copy `.env.example` to `.env`.

Windows Command Prompt:

```bat
copy .env.example .env
```

PowerShell:

```powershell
Copy-Item .env.example .env
```

macOS/Linux:

```bash
cp .env.example .env
```

For local MongoDB, this is enough:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb://127.0.0.1:27017/jai_ram_school
```

If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

## 3. Start the server

Development mode:

```bash
npm run dev
```

Production-style start:

```bash
npm start
```

Expected output:

```text
MongoDB connected successfully
Server running on http://localhost:5000
```

## 4. Test health endpoint

Open:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{
  "success": true,
  "message": "School API is running"
}
```

## 5. Contact form endpoint

### POST `/api/enquiries`

URL:

```text
http://localhost:5000/api/enquiries
```

JSON body:

```json
{
  "name": "Rahul Kumar",
  "phone": "9876543210",
  "message": "I want admission information for Class 2."
}
```

Successful response:

```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "data": {
    "id": "...",
    "name": "Rahul Kumar",
    "phone": "9876543210",
    "message": "I want admission information for Class 2.",
    "status": "new",
    "createdAt": "..."
  }
}
```

## Client connection

The React client can send the form to:

```js
axios.post("http://localhost:5000/api/enquiries", formData)
```

The client created earlier already uses this endpoint.

## Important security note

This starter exposes only the public `POST /api/enquiries` route. Reading, deleting, or managing enquiries should be added after admin authentication is implemented, rather than exposing an unprotected admin API.

## Suggested next step

Add an admin system with:

- Admin login
- JWT authentication
- Protected dashboard
- View enquiries
- Change enquiry status
- Delete enquiries
- Manage gallery/news content
