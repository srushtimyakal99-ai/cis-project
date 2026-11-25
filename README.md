# Centurion International School – React + Node website

**Frontend:** React (Vite, React Router) in `client/`  **Backend:** Express + SQLite in `server.js`

## Run it (needs Node.js 18+)
1. `npm run install:all`
2. `npm run build`
3. Windows (PowerShell): `$env:ADMIN_PASSWORD="choose-a-strong-password"; npm start`
   Mac/Linux: `ADMIN_PASSWORD=choose-a-strong-password npm start`
4. Open http://localhost:3000

## What the backend does
- **Login** (name, mobile, email) is saved in the `visitors` table; a secure cookie keeps the visitor logged in for 30 days.
- **Admission enquiry** and **Contact** forms are saved in the `enquiries` table.
- **Admin:** http://localhost:3000/admin (username `admin`, your ADMIN_PASSWORD) shows everything and downloads CSV files.
- Data lives in `school.db` (back it up!). Inputs are validated on the server, API requests are rate-limited.

## Editing
- Page text: `client/src/pages/*.jsx` (replace the `[bracketed]` placeholders)
- Gallery photos/videos: add files to `client/public/images` and `client/public/videos`, then list them in `client/src/components/Gallery.jsx`
- Colours: top of `client/src/style.css`
- While editing: run `npm start` in one terminal and `npm run dev:client` in another, and open the address Vite prints.

## Going live
Host on any service that runs Node.js (not static-only hosts like GitHub Pages). Set `ADMIN_PASSWORD`, serve over HTTPS, and keep `school.db` on persistent storage.
Because you collect parents' phone numbers and emails, add a short privacy notice to the site.
