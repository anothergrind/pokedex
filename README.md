# Pokédex

Pokédex is a Next.js app for browsing randomly generated Pokémon, voting on them, and reviewing the results in Supabase-backed views.

## Features

- Generate four random Pokémon from the PokéAPI
- Like or dislike Pokémon cards and store the votes in Supabase
- View liked Pokémon and disliked Pokémon in separate pages
- Review vote totals and type trends in the stats dashboard

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Material UI
- Supabase
- Recharts

## Project Structure

- `frontend/` - main Next.js application
- `frontend/src/app/` - app router pages, components, and styles
- `frontend/src/app/pages/liked-pokemon/` - liked Pokémon view
- `frontend/src/app/pages/disliked-pokemon/` - disliked Pokémon view
- `frontend/src/app/pages/stats/` - vote statistics view
- `backend/` - currently empty

## Getting Started

1. Open the `frontend/` directory.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in `frontend/` with your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Available Scripts

From `frontend/`:

- `npm run dev` - start the development server
- `npm run build` - build the app for production
- `npm run start` - run the production build
- `npm run lint` - run linting

## Notes

- Pokémon data is fetched from the public PokéAPI.
- Votes are written to a `pokemon_votes` table in Supabase.
- The app expects each vote record to include the Pokémon name, image URL, type list, and whether it was liked.
