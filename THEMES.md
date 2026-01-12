# Theme Guide

Your new website includes **three distinct visual themes** that you can switch between. Each theme offers a unique aesthetic while maintaining full functionality.

## Theme 1: Terminal/Cyberpunk 🖥️

**Style:** Dark terminal aesthetic with neon green accents

**Features:**
- Dark background (#0a0a0a) with subtle gradients
- Neon green accent color (#00ff88)
- Terminal-inspired typography with monospace fonts
- Glowing effects on hover
- Perfect for a "techie" look

**Best for:** Showcasing technical expertise, DevOps focus, modern developer aesthetic

## Theme 2: Glassmorphism 💎

**Style:** Modern minimalist with glass-like effects

**Features:**
- Light, clean background (#f5f7fa)
- Purple accent colors (#667eea)
- Glassmorphism effects with backdrop blur
- Smooth, elegant transitions
- Professional and modern

**Best for:** Professional consulting, clean portfolio, modern business aesthetic

## Theme 3: Gradient Tech 🌈

**Style:** Vibrant gradients with tech-focused design

**Features:**
- Dark purple/blue background (#0f0c29)
- Pink/purple gradient accents
- Animated gradient borders on cards
- Dynamic color transitions
- Bold and eye-catching

**Best for:** Creative portfolio, vibrant presentation, standout design

## Switching Themes

1. **On Desktop:** Click the theme selector buttons in the top-right corner
2. **On Mobile:** Theme selector appears in the bottom-right corner
3. Your preference is automatically saved in browser localStorage

## Customizing Themes

To customize colors, fonts, or effects:

1. Open `css/themes.css`
2. Find the theme you want to modify (e.g., `[data-theme="theme-1"]`)
3. Adjust CSS variables:
   - `--accent-color`: Main accent color
   - `--bg-primary`: Main background
   - `--text-primary`: Main text color
   - `--gradient-primary`: Hero gradient

## Theme Variables

Each theme uses CSS custom properties for easy customization:

```css
--bg-primary: Background color
--bg-secondary: Secondary background
--text-primary: Main text color
--text-heading: Heading text color
--accent-color: Primary accent color
--accent-hover: Hover state accent
--link-color: Link color
--border-color: Border color
--shadow-sm/md/lg: Shadow variations
```

## Creating a New Theme

To add a fourth theme:

1. Copy an existing theme block in `css/themes.css`
2. Change `data-theme="theme-X"` to `data-theme="theme-4"`
3. Update all color variables
4. Add a new theme button in `index.html`:
   ```html
   <button class="theme-btn" data-theme="theme-4" title="Your Theme Name">🎨</button>
   ```

The theme system is fully extensible!
