# 🚀 Portfolio Project

This is a personal portfolio website built with modern web technologies to showcase my skills, experience, and projects.

## Technologies Used

- **Frontend**: Pug, Sass, TypeScript
- **Build Tools**: Webpack, npm
- **Deployment**: GitHub Pages
- **Other**: Docker for development environment

## Getting Started

### Development

To run the development server:

```
npm run serve
```

or with Docker:

```
docker-compose up
```

The development server will be available at http://localhost:8080

### Building

To build the project for production:

```
npm run build
```

or

```
yarn build
```

### Deployment

To deploy to GitHub Pages:

```
npm run deploy
```

This will build the project and deploy it to GitHub Pages using the configuration in your .env file.

## Project Structure

- `src/` - Source files (Pug templates, Sass styles, TypeScript)
- `assets/` - Static assets like images
- `data/` - JSON data files for portfolio content
- `dist/` - Build output (generated)
- `docker/` - Docker configuration files

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.