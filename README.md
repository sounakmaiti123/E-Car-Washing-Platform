# EWASH — Frontend-only prototype

EWASH is a responsive car-washing and detailing marketplace prototype. It supports service discovery, favorites, a multi-step booking journey, locally persisted bookings, customer dashboard actions, and provider/admin demo screens.

**Phase 1 is frontend-only. Backend integration will be added separately.**

## Stack

React, Vite, JavaScript, Tailwind CSS, React Router DOM, Lucide React, and LocalStorage.

## Run locally

```bash
npm install
npm run dev
```

## Demo accounts

- Customer: `customer@ewash.com`
- Provider: `provider@ewash.com`
- Admin: `admin@ewash.com`

Use any displayed password; sign-in is intentionally a local demo only.

## Architecture

- `src/data` contains service and product mock data.
- `src/services` isolates local mock booking and authentication behavior, ready to be exchanged for API-backed services later.
- `src/utils/storage.js` safely manages browser persistence for bookings, vehicles, profiles, and favorites.
- `src/App.jsx` provides the UI routes and feature flows.

For a future backend, replace `mockAuthService.js` and `mockBookingService.js` with API service modules without needing to rewrite the pages.
