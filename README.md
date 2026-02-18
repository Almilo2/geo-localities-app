# Geo Localities App

**Live demo:** https://geo-localities-app.vercel.app/

This is a web app I built as part of a frontend developer assignment. 
It lets you browse and search through geological localities from the Estonian Geological Survey database, which has over 13,000 entries.

## What it does

You land on a list of localities fetched from a public API. 
You can search by name and the results update as you type. 
The list is paginated so it doesn't load everything at once. If you click on any locality, it takes you to a detail page where you can see more information about it — and if the locality has coordinates, there's an interactive map showing exactly where it is.

## Tech choices

I went with Nuxt 3 because it gives a solid structure for Vue apps and handles things like server-side rendering and data fetching cleanly. 
I used Tailwind CSS for styling since it makes it easy to keep things consistent and responsive without writing a lot of custom CSS. 
TypeScript is used throughout so the API responses are properly typed. 
The map is powered by Leaflet with OpenStreetMap tiles — no API key needed.

## How to run it locally

Make sure you have Node.js installed, then:

npm install
npm run dev

Open http://localhost:3000 in your browser and you should see the app.

## Data source

All data comes from the public Estonian Geological Survey API:
https://rwapi.geoloogia.info/api/v1/public/localities/
