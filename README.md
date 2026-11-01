# Gayathri Portfolio Website

A responsive portfolio made with HTML, CSS, vanilla JavaScript, and Node.js/Express.

## Project structure

```text
gayathri-portfolio/
├── package.json
├── server.js
└── public/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── profile.jpg
```

## Run locally

1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP file.
3. Open a terminal inside the `gayathri-portfolio` folder.
4. Run:

   ```bash
   npm install
   npm start
   ```

5. Open http://localhost:3000 in your browser.

For automatic restart while editing, use `npm run dev` (requires a modern Node.js version).

## Personalize before publishing

- Review the internship wording and add the company, role, and dates.
- Confirm the exact names of certifications/programs.
- Replace or add project links once you have public repositories.
- The contact form currently logs messages in the server terminal; it does not email submissions. Connect an email service before relying on it.
- Do not publish personal contact details unless you are comfortable sharing them publicly.

## Deployment

Deploy to a Node.js hosting provider that supports Express (for example, Render or Railway). Set the start command to `npm start`. A static-only host such as S3 static website hosting cannot run `server.js`; for S3, host only the front end and replace the contact endpoint with a hosted form/API service.
