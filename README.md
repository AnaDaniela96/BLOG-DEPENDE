# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Estructura actual
src/
  components/        # UI reutilizable (Button, Card, Navbar, Footer…)
  layouts/           # Layouts (MainLayout, PostLayout…)
  features/
    blog/
      pages/         # BlogList.jsx, BlogPost.jsx
      data/          # posts.json (luego migras a MD o CMS)
      utils/         # helpers, hooks
    projects/
      pages/         # PortfolioList.jsx, ProjectDetail.jsx
      data/          # projects.json
    play/            # laboratorio
      movies/
        pages/       # MoviesList.jsx, MovieDetail.jsx
        data/        # movies.json (mock)
        services/    # api.js (fetch a mock o API real)
      …otros minis
  pages/             # Home.jsx, About.jsx, NotFound.jsx
  App.jsx
