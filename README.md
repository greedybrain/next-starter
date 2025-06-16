# Next Starter

## Project Overview

Next Starter is a reusable **Next.js** template designed as a baseline for new projects. It comes pre-configured with TypeScript, Tailwind CSS, Prisma, and Supabase integration. The goal is to save development time by providing a solid starting structure with popular tools already set up, so you can focus on building your app from day one.

## Features

- **Next.js 13 (App Router)** – Uses Next.js for server-side rendering, file-based routing (including the new App Router structure), and API routes. This provides a robust framework for building scalable React applications with ease.
- **TypeScript** – Written in TypeScript for static typing and improved developer experience. Enjoy type-safety across the entire stack, reducing bugs and making the code easier to refactor.
- **Tailwind CSS** – Utility-first CSS framework for rapidly building custom user interfaces. Tailwind is already configured, enabling you to style your application with predefined classes without leaving your HTML/JSX.
- **Prisma (SQLite by default)** – Prisma ORM is set up for database access. The template includes a Prisma schema (using SQLite by default for development) to provide a starting data model. You get type-safe database queries and easy migration support, and you can swap to PostgreSQL (e.g., on Supabase) for production by adjusting the connection URL.
- **Supabase Integration (Auth & Database)** – Supabase is integrated to provide an instant backend. The template is ready to use Supabase for a hosted Postgres database and built-in user authentication. It includes a configured Supabase client for both server and client sides (using cookie-based auth for seamless SSR support).
- **ESLint & Prettier** – Linting and formatting are pre-configured. The project includes ESLint (with Next.js and Prettier presets) and Prettier (with Tailwind CSS plugin) to ensure code consistency and quality out of the box.

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository:** Clone this repository to your local machine using Git or by clicking "Use this template" on GitHub.
2. **Install dependencies:** In the project directory, run `npm install`. (You can also use `yarn`, `pnpm`, or `bun` — the project is compatible with multiple package managers.)
3. **Configure environment variables:** Copy the example environment file if provided (or create a new `.env.local` file) and add the required keys. See the [Environment Variables](#environment-variables) section below for details on which variables you need to set.
4. **Run the development server:** Start the Next.js development server by running `npm run dev`. This will launch the app at [http://localhost:3000](http://localhost:3000). You should see the starter homepage and be able to make changes (the server supports hot-reloading for development).

## Environment Variables

This template uses environment variables for configuration. Make sure to set the following variables in a `.env.local` file (or in your hosting environment for production):

- `NODE_ENV` – Node environment mode (typically `"development"` or `"production"`). Next.js sets this automatically, but it is defined in the config for completeness.
- `SITE_URL` – The base URL of your site, e.g. `https://your-domain.com`. Used on the server side for generating absolute links or callbacks.
- `DATABASE_URL` – Your database connection string. By default, for SQLite you might use a file path (e.g. `file:./dev.db`), or for Postgres a connection URL. Prisma reads this to connect to your database.
- `OPEN_AI_API_KEY` – (Optional) API key for OpenAI services, if you plan to integrate OpenAI API features. This is required by the environment config for type safety.
- `SUPABASE_URL` – The Supabase project URL for your instance (found in your Supabase project settings). Used on the server side to initialize the Supabase client.
- `SUPABASE_ANON_KEY` – The Supabase anonymous public API key (from your Supabase settings). Used server-side for Supabase client initialization.
- `NEXT_PUBLIC_SITE_URL` – The base URL of your site, again, but exposed to the client-side code. This should match the value of `SITE_URL` above.
- `NEXT_PUBLIC_SUPABASE_URL` – Supabase project URL, for use in client-side code (should be the same as `SUPABASE_URL`).
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` – Supabase anonymous key for client-side usage (same value as `SUPABASE_ANON_KEY`).

**Note:** The `NEXT_PUBLIC_*` variables are exposed to the browser, so never put secrets in them. The Supabase anon key is safe to expose (it’s designed to be public), and the site URL is not sensitive. All sensitive keys (like the database URL and OpenAI key) are kept server-side only.

## Project Structure

The repository is organized as follows:

- **`src/app/`** – Next.js application source using the App Router. All page components, layouts, and API route definitions live here (e.g. `src/app/page.tsx` for the home page, `src/app/api/**` for API routes).
- **`src/components/`** – Reusable React components such as layouts, UI elements, and form controls. These are imported into pages or other components to build the UI.
- **`src/config/`** – Configuration modules. Notably, this contains environment variable schemas (`env/`) for both server and client, which ensure all required environment variables are set and valid.
- **`src/constants/`** – Define constant values used throughout the app (for example, API endpoint prefixes, route names, etc.).
- **`src/lib/`** – Library and utility code. For instance, this includes helpers (e.g., `src/lib/utils.ts` for utility functions) or instances like a Prisma client initializer.
- **`src/utils/`** – Additional utilities and integrations. In this template, `src/utils/supabase/` contains the Supabase client setup and middleware for authentication/session handling.
- **`src/types/`** – TypeScript type definitions and interfaces used across the project (for props, API responses, etc.). Keeping types in a dedicated folder helps maintain clarity and reusability.
- **`prisma/`** – Prisma schema and database-related files. The `schema.prisma` defines your database models. You can run Prisma CLI commands to generate the client or migrate the database schema. (The `prisma/generated/` directory contains the generated Prisma client code.)
- **`public/`** – Static assets such as images and icons. For example, the default Next.js favicon is located here (along with any other publicly accessible files). Assets in this folder are served at the root path (e.g. `/favicon.ico`).
- **Configuration files:** Various config files are present at the root (like `package.json`, `tailwind.config.js`, `eslint.config.mjs`, etc.) to support tooling. These are pre-configured so you can start coding without additional setup.

## Scripts

Common scripts available in the project (defined in `package.json`) include:

- **`npm run dev`** – Start the development server on localhost (with Turbopack for fast refresh). Use this during development to live-reload changes.
- **`npm run build`** – Create an optimized production build of the application. This compiles your Next.js app for deployment.
- **`npm run start`** – Run the production build. Use this to start the server after running the build command (useful for testing the production build locally or in a Node server environment).
- **`npm run lint`** – Run ESLint to analyze the code for problems and ensure it follows the style guidelines.
- **`npm run format`** – Format the code using Prettier (with the Tailwind CSS plugin). This will auto-fix formatting issues in the `src/` directory.
- **`npm run migrate:sqlite`** – (Optional) Apply Prisma migrations to the SQLite database. If you have defined migrations (e.g., after modifying the Prisma schema), this command will ensure the local database is up to date. (It uses `prisma migrate deploy` under the hood.)

<!-- (Note: adjust or add scripts as needed for your package manager or tooling preferences.) -->

## Deployment

You can deploy this Next.js application to any platform that supports Node.js. Here are some general guidelines:

- **Vercel:** The template is ideal for deployment on Vercel, the platform made by the creators of Next.js. Simply create a new project on Vercel and point it to this repository (or your fork of it). Vercel will automatically build and deploy the app. Remember to set all the required environment variables in your Vercel project settings for production (especially `DATABASE_URL`, Supabase keys, etc.).
- **Supabase Setup:** If you plan to use Supabase in production, ensure that `DATABASE_URL` is pointed to your Supabase Postgres database. You may use the connection string provided by Supabase (found under Database settings). Also, update the `SUPABASE_URL` and keys to match your project. The Prisma schema is by default configured for SQLite; to use Postgres (Supabase), you should adjust the Prisma datasource provider and run `prisma migrate` to reflect changes in the new database.
- **Other Hosts:** For Docker or other Node hosting, you can create a production build (`npm run build`) and then run the app with `npm start`. Ensure the environment variables are set on your host. The app listens on port 3000 by default (you can change this by setting the `PORT` env variable when starting the server).
- **Database Migrations:** In a CI/CD pipeline or before the first production run, consider running `npx prisma migrate deploy` (or the provided script) to apply any pending migrations to your production database. This ensures your database schema is up to date before the app handles live traffic.

## License

This project is open-source and available under the terms of the **MIT License**. Feel free to use and modify this template for your own projects.
