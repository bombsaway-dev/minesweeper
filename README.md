# 💣 Bombs Away

Welcome to **Bombs Away**, a fresh take on the classic Minesweeper with smooth animations, playful themes, and a modern minimalist vibe. Pick your battlefield - grass, ocean, or fire - and prove you’ve got what it takes to clear the board!

---

## 🎮 How to Play

1. **Click a tile** to reveal it.
2. **Right-click** to plant a flag where you think a bomb is hiding.
3. Numbers show how many bombs are touching that tile - use them to work out safe areas.
4. Reveal all safe tiles to **win**; click a bomb and **boom**, you lose!

---

## ⚙️ Features

- **Three difficulties**  
  - Easy: 9×9, 10 bombs  
  - Medium: 16×16, 40 bombs  
  - Hard: 16×30, 99 bombs  
- **First-click safe**: Your very first move never lands on a bomb - guaranteed flood-fill reveal!  
- **Fluid animations**: Tiles flip with a smooth fade-out so the board never feels janky.  
- **Themed boards**:  
  - Grass (💣 / 🚩)  
  - Ocean (🐚 / ⚓)  
  - Fire  (🔥 / ☢️)  
- **Built-in timer**: Tracks your speed down to centiseconds - race your best time!  
- **Win / lose overlay**: Celebratory fireworks or dramatic boom message.

---

## 🚀 Quick Start

1. **Clone** this repo  
   git clone https://github.com/your-username/bombs-away.git  
   cd bombs-away  
2. **Install** dependencies  
   npm install  
3. **Run** in development mode  
   npm start  
4. Open your browser at `http://localhost:3000` and let the games begin.

---

## 🎨 Theming & Styling

All colors and emojis are driven by CSS variables and React context. Switch themes at the top-left dropdown - your board background, tile colors, flag & bomb icons, and tutorial overlay instantly update to match.

---

## 🛠️ Project Structure

bombs-away/  
├── public/                
│   └── index.html         ← Root HTML  
├── src/  
│   ├── assets/            ← Flags, bomb icons, tutorial images  
│   ├── components/        ← Board, Tile, ThemeSwitcher, etc.  
│   ├── context/           ← ThemeProvider  
│   ├── pages/             ← Home, Game, Tutorial  
│   ├── utils/             ← Game logic (grid, flood-fill, bomb placement)  
│   ├── style.css          ← Global and component styles  
│   └── index.jsx          ← App entrypoint  
└── README.md              ← You are here

---

## 📈 Roadmap

- Add **leaderboards** to track fastest clears.  
- Mobile-friendly layout & touch controls.  
- Custom board sizes & bomb counts.  
- Dark mode / high-contrast theme.

---

## ❤️ Contributing

1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/YourIdea`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to your branch (`git push origin feature/YourIdea`)  
5. Open a Pull Request and let’s chat!

---

Enjoy clearing those fields, diving through waves, or playing with fire... just watch your step! 💥