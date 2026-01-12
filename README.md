# corey.tech

Modern, lightweight portfolio website for Corey Gale - Engineering Leader, DevOps Expert, and Consultant.

## Features

- 🎨 **Three Visual Themes**: Choose from Terminal/Cyberpunk, Glassmorphism, or Gradient Tech aesthetics
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Lightweight**: Pure HTML, CSS, and JavaScript - no build process required
- 🚀 **Easy Updates**: Simple file-based structure, easy to maintain
- 📝 **Blog Archive**: Complete archive of DevOps Industry Updates newsletter
- 🎯 **Focus Areas**: Skills, consulting services, side projects

## Structure

```
├── index.html          # Main page
├── css/
│   ├── main.css        # Base styles and layout
│   └── themes.css      # Three theme variations
├── js/
│   ├── main.js         # Navigation, theme switching, animations
│   └── blog.js         # Blog archive functionality
├── _posts/             # Blog posts (legacy Jekyll format)
├── images/             # Images and assets
└── .github/workflows/  # GitHub Actions deployment
```

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/mechtron/mechtron.github.io.git
   cd mechtron.github.io
   ```

2. Serve locally (using Python):
   ```bash
   python3 -m http.server 8000
   ```
   Or use any static file server of your choice.

3. Open in browser:
   ```
   http://localhost:8000
   ```

## Deployment

### GitHub Pages (Recommended - Free)

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. Push to main branch - the workflow will automatically deploy

3. Your site will be available at:
   - `https://mechtron.github.io` (or your custom domain)

### Other Hosting Options

#### Netlify (Free Tier)
1. Connect your GitHub repository
2. Build command: (leave empty - static site)
3. Publish directory: `/` (root)
4. Deploy!

#### Vercel (Free Tier)
1. Import your GitHub repository
2. Framework preset: Other
3. Deploy!

#### Cloudflare Pages (Free Tier)
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Build output directory: `/`
4. Deploy!

## Customization

### Changing Themes

The site includes three pre-built themes. To switch themes:
- Click the theme selector buttons in the top-right corner
- Your preference is saved in localStorage

### Adding Content

- **Skills**: Edit the `skills-grid` section in `index.html`
- **Projects**: Add new project cards in the `projects-grid` section
- **Blog Posts**: Update the `blogPosts` array in `js/blog.js`

### Theme Customization

Edit `css/themes.css` to modify colors, fonts, and styling for each theme.

## Blog Posts

The blog archive displays posts from the `_posts/` directory. To add new posts:
1. Add the post metadata to the `blogPosts` array in `js/blog.js`
2. Ensure the post HTML file exists (or link to the Jekyll-generated version)

## Custom Domain

To use a custom domain (e.g., corey.tech):

1. Create a `CNAME` file in the root directory with your domain:
   ```
   corey.tech
   ```

2. Configure DNS:
   - For GitHub Pages: Add CNAME record pointing to `mechtron.github.io`
   - For other hosts: Follow their DNS configuration guide

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

See LICENSE file for details.

## Contact

- Email: coreygale[at]gmail.com
- GitHub: [@mechtron](https://github.com/mechtron)
- LinkedIn: [coreyjgale](https://linkedin.com/in/coreyjgale)
