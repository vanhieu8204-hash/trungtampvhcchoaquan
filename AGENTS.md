# AGENTS.md

This document provides an overview of the project structure, design patterns, and conventions for AI agents working on this codebase.

## Project Overview

Web portal for the Public Administrative Service Center of Hoa Quan Commune, Nghe An Province, Vietnam (Trung tâm Phục vụ Hành chính công xã Hoa Quân, tỉnh Nghệ An). The application serves citizens with public administrative services, procedural guidelines, dossier tracking, online appointment bookings, SIPAS satisfaction surveys, and allows commune administrators to post and update official activities.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, TanStack Router v1) |
| Server Functions | Netlify Functions (`netlify/functions/api.ts`) |
| Database | Netlify Database (Managed Postgres) via Drizzle ORM (`drizzle-orm@beta`) |
| Forms | Netlify Forms (`citizen_feedback`, `appointment_booking`) with `public/__forms.html` |
| Content | Content Collections (Markdown with Zod validation in `content-collections.ts`) |
| Styling | Tailwind CSS v4, Lucide React Icons |
| Language | TypeScript 5.9 (Strict mode) |
| Hosting & Deploy | Netlify |

## Key Directories & Files

```
├── content/posts/                 # Editorial markdown articles for commune activities
├── db/                            # Postgres database schema and connection
│   ├── schema.ts                  # Drizzle ORM tables: activities, feedbackSubmissions, appointments
│   └── index.ts                   # Drizzle client initialized with drizzle-orm/netlify-db
├── netlify/
│   ├── database/migrations/       # Generated SQL migrations (managed automatically by Netlify)
│   └── functions/api.ts           # REST API endpoint (/api/activities, /api/feedback, /api/appointments)
├── public/
│   └── __forms.html               # Static HTML skeleton for Netlify Forms build-time detection
├── src/
│   ├── components/
│   │   ├── Header.tsx             # Official administrative header with top banner and responsive navigation
│   │   ├── Footer.tsx             # Governmental footer with office address, hotline, and national portal links
│   │   ├── blog-posts.tsx         # Activity listings presentation component
│   │   └── ui/card.tsx            # Card primitive
│   ├── data/
│   │   ├── administrative-procedures.ts # Detailed catalogue of 120+ commune procedures
│   │   ├── counters-info.ts       # 4 service desks and commune leadership contacts
│   │   └── sample-dossiers.ts     # Dossier records with step-by-step progress tracking
│   ├── routes/
│   │   ├── __root.tsx             # Root layout with site metadata, Header, Footer
│   │   ├── index.tsx              # Home landing page with search, statistics, featured activities
│   │   ├── gioi-thieu.tsx         # Center introduction, 5-step ISO process, counter directory
│   │   ├── hoat-dong.tsx          # Activities & news with category filtering and keyword search
│   │   ├── thu-tuc-hanh-chinh.tsx # Full procedures catalogue with detailed requirements modal
│   │   ├── tra-cuu-ho-so.tsx      # Realtime dossier status tracker with timeline
│   │   ├── dat-lich-hen.tsx       # Appointment scheduling with electronic receipt issuance
│   │   ├── khao-sat-phan-anh.tsx  # SIPAS citizen satisfaction survey and feedback submission
│   │   ├── quan-ly-hoat-dong.tsx  # Officer activity creation interface (DB backed)
│   │   ├── category.$category.tsx # Category view
│   │   └── posts.$slug.tsx        # Activity article reader
│   ├── router.tsx                 # TanStack router setup
│   └── styles.css                 # Global CSS and government theme tokens
├── drizzle.config.ts              # Drizzle configuration pointing to netlify/database/migrations
└── netlify.toml                   # Netlify build configuration
```

## Non-Obvious Decisions & Architecture Rules

1. **Netlify Database with Drizzle Beta**:
   The Netlify Database adapter exists exclusively on the `@beta` dist-tag of `drizzle-orm` and `drizzle-kit`. Always preserve `drizzle-orm@beta` and `drizzle-kit@beta`.
   Migrations are generated via `npx drizzle-kit generate` into `netlify/database/migrations/`. Never run `drizzle-kit push` or `migrate` manually; Netlify applies migrations during deploy.

2. **Netlify Forms in SSR Framework**:
   Because TanStack Start is an SSR framework, standard form POSTs to `/` are intercepted by the SSR catch-all handler. All forms must:
   - Be defined in `public/__forms.html` for build-time detection.
   - Be submitted via AJAX targeting `/__forms.html` with `Content-Type: application/x-www-form-urlencoded`.
   - The enable script `/opt/buildhome/.agents/skills/netlify-forms/scripts/enable.cjs` was run to activate the feature on deploy.

3. **Hybrid Activity Content Architecture**:
   Official editorial activities are stored as type-safe Markdown in `content/posts/`, while newly published activities posted by officers via `/quan-ly-hoat-dong` are saved in the Postgres `activities` table via `/api/activities`. The `/hoat-dong` route seamlessly merges and displays both streams.

4. **Slugification for Vietnamese Diacritics**:
   `content-collections.ts` normalizes Unicode combining marks (`NFD` normalization and `đ`/`Đ` conversion) to generate URL-safe slugs for Vietnamese titles.
