# Deployment Guide

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open the local URL shown by Next.js, usually `http://localhost:3000`.

## Build Static Export

```bash
npm run build
```

The project uses this configuration in `next.config.ts`:

```ts
output: "export"
images: {
  unoptimized: true
}
trailingSlash: true
reactStrictMode: true
```

After a successful build, the static website is generated in the `out` folder.

## Deploy

Upload the contents of the `out` folder to any static hosting provider that supports:

- HTML files
- CSS and JavaScript assets
- `sitemap.xml`
- `robots.txt`
- Trailing slash routes

## Notes

- Inquiry forms use local validation and show a success modal.
- Career applications perform the fake endpoint request described in the brief.
- No database, authentication, payment flow, chat widget, or newsletter signup is included.
