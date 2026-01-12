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

## Custom Domain Setup For GitHub Pages

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

## Testing Locally

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
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
