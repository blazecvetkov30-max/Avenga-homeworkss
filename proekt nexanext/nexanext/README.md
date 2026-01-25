# NexaNext Social Network Prototype

A front-end prototype for a people-first social network built with Vanilla JavaScript.

## Features

- Browse users in a grid layout
- View detailed user profiles with friends and posts
- Browse photo galleries
- Day/night theme toggle with smooth transitions
- User registration and login
- Client-side pagination
- Skeleton loaders during data fetching
- Responsive design

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript
- Faker API for mock data

## Getting Started

1. Clone or download the project.
2. Open `index.html` in a web browser.
3. For local development, serve the files using a local server (e.g., `python -m http.server` or `npx http-server`).

## Pages

- `index.html`: Home page with user list
- `profile.html?id=<userId>`: User profile page
- `gallery.html?id=<userId>`: Photo gallery
- `login.html`: Login page
- `register.html`: Registration page

## API Usage

- Users: https://fakerapi.it/api/v1/persons
- Images: https://fakerapi.it/api/v1/images
- Texts: https://fakerapi.it/api/v1/texts

## Color Palette

- Primary: #2563EB
- Primary Dark: #1E40AF
- Accent: #7C3AED
- Background: #F8FAFC
- Card Background: #FFFFFF
- Text Primary: #0F172A
- Text Secondary: #475569
- Border: #E2E8F0
- Error: #DC2626

Dark theme variants are automatically generated.