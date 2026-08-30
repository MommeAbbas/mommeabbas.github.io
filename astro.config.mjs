import { defineConfig } from 'astro/config';

// This repository is a GitHub "user site" (mommeabbas.github.io), so it is
// served from the domain root — no `base` path is needed (unlike a project
// page such as username.github.io/repo-name).
export default defineConfig({
  site: 'https://mommeabbas.github.io',
});
