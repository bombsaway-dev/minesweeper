# Bombs Away

A minimalist React-based Minesweeper clone featuring smooth tile animations and a theme switcher for different backgrounds (grass, ocean, fire, etc.).

## Features

* Three difficulty levels:

  * **Easy** (9×9)
  * **Medium** (16×16)
  * **Hard** (16×30)
* Theme switcher for custom bomb, flag, and background styles
* Smooth reveal and flag animations
* Reset button to restart the game at any time

## Getting Started

### Prerequisites

* Node.js (v14 or later)
* npm (v6 or later)

### Installation & Running

```bash
npm install
npm start
```

Visit `http://localhost:3000` in your browser to play.

## Project Structure

```
public/        Static HTML & assets
src/
  pages/       `home.jsx`, `tutorial.jsx`
  App.jsx      Route definitions
  index.jsx    Application entry point
  style.css    Global styles
```

## Available Scripts

* `npm start` – Start development server
* `npm run build` – Create production build
* `npm test` – Run tests

## License

This project is open source and available under the MIT License.