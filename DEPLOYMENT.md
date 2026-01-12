# Deployment Guide

## Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy new site"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to Actions tab to see deployment progress
   - Site will be live at `https://mechtron.github.io` (or your custom domain)

### Option 2: Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Deploy!

### Option 3: Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework preset: "Other"
5. Deploy!

### Option 4: Cloudflare Pages

1. Go to Cloudflare Dashboard → Pages
2. Create a project → Connect to Git
3. Select your repository
4. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Deploy!

## Custom Domain Setup

### For GitHub Pages:

1. Create/update `CNAME` file in root:
   ```
   corey.tech
   ```

2. Configure DNS:
   - Type: CNAME
   - Name: @ (or www)
   - Value: mechtron.github.io
   - TTL: Auto

3. Wait for DNS propagation (can take up to 24 hours)

### For Other Hosts:

Follow their specific DNS configuration guides. Most will provide you with a CNAME or A record to add.

## Testing Locally

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Troubleshooting

### Blog posts not loading?
- Ensure the Jekyll-generated blog posts are still accessible, OR
- Convert blog posts to static HTML (see README.md for details)

### Theme not persisting?
- Check browser localStorage is enabled
- Clear browser cache and try again

### Styles not loading?
- Ensure `css/main.css` and `css/themes.css` are in the correct location
- Check browser console for 404 errors
- Verify file paths are correct (case-sensitive on some servers)

## Maintenance

### Updating Content

- **Skills/Projects**: Edit `index.html`
- **Blog Posts**: Update `js/blog.js` array
- **Theme Colors**: Edit `css/themes.css`

### Adding New Blog Posts

1. Add entry to `blogPosts` array in `js/blog.js`:
   ```javascript
   { 
     id: 'unique-id', 
     title: 'Post Title', 
     date: 'YYYY-MM-DD', 
     category: 'diu' or 'project', 
     url: '/Post-Title-URL/' 
   }
   ```

2. Ensure the blog post HTML exists (or create it)

## Performance Tips

- Images: Optimize images before uploading
- Minification: Consider minifying CSS/JS for production (optional)
- CDN: Use a CDN for faster global delivery (built into most hosting platforms)
