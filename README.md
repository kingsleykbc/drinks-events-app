
# Silicon Rhino drinks app

A web application application for finding drinks events. 

### [Live Demo](https://siliconrhino-drinks.netlify.app/)

## Overview
This is a MERN (MongoDB, Express, React.js, Node.js) application. 

The backend is an express REST API  that fequently pulls data from an external API and stores it in an MongoDB database. The backend is almost production ready, and comprises features like oAuth2 validation, cors access control, HTTP header masking, Model-Controller pattern, etc.

Endpoint: **https://drinks-app-server.herokuapp.com/events**

API Key: `SAMPLE_API_KEY`

The backend is a React (Next.js) application that interfaces with the express API to retrieve and display event data. It comprises features like theming, animation, and map integration.  In addition, use of Next.js over normal React allows for faster build times, server-side rendering (good for SEO) and styled-jsx.

## Tools Used
For this assessment, the following tools/languages were used:

**Languages**
- TypeScript
- JavaScript
- CSS
- tsx

**Backend**
- Express: API
- MongoDB: Database
- Node.js: Framework
- Axios: API call
- Node-cron: Scheduling
- **Heroku: Hosting**

**Frontend**
- Next.js: Framework
- Framer-motion: Animation
- styled-jsx: Scoped CSS engine for Next.js
- React-icons: Site Icons
- Axios: API call
- **Netlify: Hosting**