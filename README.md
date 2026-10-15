# Varsha Chaudhary — Developer Portfolio

A creative, responsive portfolio starter built with **Next.js, React, TypeScript, and CSS**. It is designed to serve both software/AI job applications and graduate-school applications.

## 1. Run locally

Install Node.js (LTS), then from this folder run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check the production build:

```bash
npm run build
npm start
```

## 2. Personalize before publishing

Search the project for these placeholders and replace them:

- `your.email@example.com` — email address
- `your-username` — GitHub username
- `your-linkedin` — LinkedIn profile slug
- `https://example.com` in `app/layout.tsx` — your deployed website URL

Update the project cards, dates, role descriptions, metrics, and links to match what you can publicly substantiate. Add public GitHub repositories or live demos where possible. Do not publish confidential employer source code, internal documents, or private company data.

### Add your CV

Put a PDF named `resume.pdf` in the `public/` folder and add a link such as:

```tsx
<a href="/resume.pdf" target="_blank" rel="noreferrer">View résumé</a>
```

### Make the projects stronger

For each project, ideally include:
1. The problem and intended user
2. Your specific contribution
3. Technical architecture and trade-offs
4. Evaluation method and verified results
5. Public source code or demo, if permitted

Professional work is labelled as such in this starter. If a project cannot be shown publicly, explain the high-level problem and your contribution without exposing confidential information.

## 3. Deploy to Vercel

1. Create a GitHub repository and push this folder.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings and deploy.
4. Update `metadataBase` in `app/layout.tsx` to the real deployed domain.

## Structure

```text
app/
  globals.css   # theme, responsive layout, illustrations
  layout.tsx    # page metadata and root layout
  page.tsx      # portfolio sections and project data
package.json
tsconfig.json
README.md
```

## Design direction

- Warm off-white canvas, ink-black typography, lime accents, and editorial serif italics
- Abstract CSS illustrations rather than generic stock imagery
- Responsive layouts and reduced-motion support
- Sections for selected work, experience, research, skills, and contact
