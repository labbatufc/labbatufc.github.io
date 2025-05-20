# Grupo de Bioarqueologia Translacional da UFC — Hugo Academic Site

## Structure

- All Hugo source files (content, static assets, config, etc.) are now in the `src/` folder.
- The site uses the Academic theme (now Hugo Blox Builder) from https://github.com/HugoBlox/hugo-blox-builder.
- Only the generated static site output (`public/`) should be deployed to the root/main branch for GitHub Pages.

## How to build locally

1. Install [Hugo Extended](https://gohugo.io/getting-started/installing/#install-hugo)
2. Clone the repo and run:

   ```sh
   cd src
   hugo server
   ```

3. To generate the static site:

   ```sh
   cd src
   hugo
   ```

   The output will be in `src/public/`.

## Deploying

- For GitHub Pages, only the generated `public/` folder contents should be served.
- For Netlify CMS, the config is in `src/static/admin/config.yml`.

## Theme

- Uses [Hugo Blox Builder (Academic)](https://github.com/HugoBlox/hugo-blox-builder).

## Project Cleanup

- All Hugo-related files are relocated to `src/`.
- Unnecessary or legacy HTML/CSS/JS files are removed from the root.
- The new structure closely follows Hugo’s best practices.
