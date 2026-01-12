// Blog posts data
// Note: URLs point to Jekyll-generated pages. To convert to static HTML, create individual pages or use a markdown parser.
const blogPosts = [
    { id: '2021-09-08-DevOps-Industry-Updates-28', title: 'DevOps Industry Updates #28: Q3 Hits Edition', date: '2021-09-08', category: 'diu', url: '/devops-industry-updates-28/' },
    { id: '2021-06-29-DevOps-Industry-Updates-27', title: 'DevOps Industry Updates #27', date: '2021-06-29', category: 'diu', url: '/devops-industry-updates-27/' },
    { id: '2021-06-07-DevOps-Industry-Updates-26', title: 'DevOps Industry Updates #26', date: '2021-06-07', category: 'diu', url: '/devops-industry-updates-26/' },
    { id: '2021-05-23-DevOps-Industry-Updates-25', title: 'DevOps Industry Updates #25', date: '2021-05-23', category: 'diu', url: '/devops-industry-updates-25/' },
    { id: '2021-05-08-DevOps-Industry-Updates-24', title: 'DevOps Industry Updates #24', date: '2021-05-08', category: 'diu', url: '/devops-industry-updates-24/' },
    { id: '2021-04-26-AWS-Cost', title: 'My Comprehensive Guide to AWS Cost Control', date: '2021-04-26', category: 'project', url: '/aws-cost/' },
    { id: '2021-04-22-DevOps-Industry-Updates-23', title: 'DevOps Industry Updates #23', date: '2021-04-22', category: 'diu', url: '/devops-industry-updates-23/' },
    { id: '2021-04-01-DevOps-Industry-Updates-22', title: 'DevOps Industry Updates #22', date: '2021-04-01', category: 'diu', url: '/devops-industry-updates-22/' },
    { id: '2021-03-11-DevOps-Industry-Updates-21', title: 'DevOps Industry Updates #21', date: '2021-03-11', category: 'diu', url: '/devops-industry-updates-21/' },
    { id: '2021-02-19-DevOps-Industry-Updates-20', title: 'DevOps Industry Updates #20', date: '2021-02-19', category: 'diu', url: '/devops-industry-updates-20/' },
    { id: '2021-02-04-DevOps-Industry-Updates-19', title: 'DevOps Industry Updates #19', date: '2021-02-04', category: 'diu', url: '/devops-industry-updates-19/' },
    { id: '2021-01-21-DevOps-Industry-Updates-18', title: 'DevOps Industry Updates #18', date: '2021-01-21', category: 'diu', url: '/devops-industry-updates-18/' },
    { id: '2021-01-05-DevOps-Industry-Updates-17', title: 'DevOps Industry Updates #17', date: '2021-01-05', category: 'diu', url: '/devops-industry-updates-17/' },
    { id: '2020-12-04-DevOps-Industry-Updates-16', title: 'DevOps Industry Updates #16', date: '2020-12-04', category: 'diu', url: '/devops-industry-updates-16/' },
    { id: '2020-11-17-DevOps-Industry-Updates-15', title: 'DevOps Industry Updates #15', date: '2020-11-17', category: 'diu', url: '/devops-industry-updates-15/' },
    { id: '2020-11-02-DevOps-Industry-Updates-14', title: 'DevOps Industry Updates #14', date: '2020-11-02', category: 'diu', url: '/devops-industry-updates-14/' },
    { id: '2020-10-19-DevOps-Industry-Updates-13', title: 'DevOps Industry Updates #13', date: '2020-10-19', category: 'diu', url: '/devops-industry-updates-13/' },
    { id: '2020-10-05-DevOps-Industry-Updates-12', title: 'DevOps Industry Updates #12', date: '2020-10-05', category: 'diu', url: '/devops-industry-updates-12/' },
    { id: '2020-09-23-DevOps-Industry-Updates-11', title: 'DevOps Industry Updates #11', date: '2020-09-23', category: 'diu', url: '/devops-industry-updates-11/' },
    { id: '2020-09-08-DevOps-Industry-Updates-10', title: 'DevOps Industry Updates #10', date: '2020-09-08', category: 'diu', url: '/devops-industry-updates-10/' },
    { id: '2020-08-25-DevOps-Industry-Updates-9', title: 'DevOps Industry Updates #9', date: '2020-08-25', category: 'diu', url: '/devops-industry-updates-9/' },
    { id: '2020-08-10-DevOps-Industry-Updates-8', title: 'DevOps Industry Updates #8', date: '2020-08-10', category: 'diu', url: '/devops-industry-updates-8/' },
    { id: '2020-07-28-DevOps-Industry-Updates-7', title: 'DevOps Industry Updates #7', date: '2020-07-28', category: 'diu', url: '/devops-industry-updates-7/' },
    { id: '2020-07-20-DevOps-Industry-Updates-6', title: 'DevOps Industry Updates #6', date: '2020-07-20', category: 'diu', url: '/devops-industry-updates-6/' },
    { id: '2020-07-13-DevOps-Industry-Updates-5', title: 'DevOps Industry Updates #5', date: '2020-07-13', category: 'diu', url: '/devops-industry-updates-5/' },
    { id: '2020-07-06-DevOps-Industry-Updates-4', title: 'DevOps Industry Updates #4', date: '2020-07-06', category: 'diu', url: '/devops-industry-updates-4/' },
    { id: '2020-06-22-DevOps-Industry-Updates-3', title: 'DevOps Industry Updates #3', date: '2020-06-22', category: 'diu', url: '/devops-industry-updates-3/' },
    { id: '2020-06-09-DevOps-Industry-Updates-2', title: 'DevOps Industry Updates #2', date: '2020-06-09', category: 'diu', url: '/devops-industry-updates-2/' },
    { id: '2020-05-24-DevOps-Industry-Updates-1', title: 'DevOps Industry Updates #1', date: '2020-05-24', category: 'diu', url: '/devops-industry-updates-1/' },
    { id: '2020-03-23-DevOps-Industry-Updates-Mar-2020', title: 'DevOps Industry Updates - Mar 2020', date: '2020-03-23', category: 'diu', url: '/devops-industry-updates-march-2020/' },
    { id: '2020-02-29-DevOps-Industry-Updates-Feb-2020', title: 'DevOps Industry Updates - Feb 2020', date: '2020-02-29', category: 'diu', url: '/devops-industry-updates-february-2020/' },
    { id: '2020-01-31-DevOps-Industry-Updates-Jan-2020', title: 'DevOps Industry Updates - Jan 2020', date: '2020-01-31', category: 'diu', url: '/devops-industry-updates-january-2020/' },
    { id: '2020-3-8-Jira-GSheets-Exporter', title: 'Jira to Google Sheets Exporter', date: '2020-03-08', category: 'project', url: '/jira-to-google-sheets-exporter/' },
    { id: '2020-2-8-SSL-Cert-Checker', title: 'SSL Certificate Checker', date: '2020-02-08', category: 'project', url: '/ssl-certificate-checker/' },
    { id: '2020-1-31-WLAD-5-Industry-Updates', title: 'WLAD #5 Industry Updates', date: '2020-01-31', category: 'diu', url: '/wlad-5-industry-updates/' },
    { id: '2019-10-30-Coreys-Image-Classifier', title: "Corey's Image Classifier", date: '2019-10-30', category: 'project', url: '/coreys-image-classifier/' },
    { id: '2019-10-27-NHL-Game-Notifier', title: 'NHL Game Notifier', date: '2019-10-27', category: 'project', url: '/nhl-game-notifier/' },
    { id: '2019-10-25-WLAD-4-Industry-Updates', title: 'WLAD #4 Industry Updates', date: '2019-10-25', category: 'diu', url: '/wlad-4-industry-updates/' },
    { id: '2019-8-29-WLAD-3-Industry-Updates', title: 'WLAD #3 Industry Updates', date: '2019-08-29', category: 'diu', url: '/wlad-3-industry-updates/' },
    { id: '2019-6-13-WLAD-2-Industry-Updates', title: 'WLAD #2 Industry Updates', date: '2019-06-13', category: 'diu', url: '/wlad-2-industry-updates/' },
    { id: '2019-5-28-CV-Meetup-Talk', title: 'CV Meetup Talk', date: '2019-05-28', category: 'project', url: '/cv-meetup-talk/' },
    { id: '2019-4-25-AMI-Bakery', title: 'My AMI Bakery tool', date: '2019-04-25', category: 'project', url: '/ami-bakery/' }
];

// Initialize blog
document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blogGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';
    
    function renderBlogPosts(filter = 'all') {
        if (!blogGrid) return;
        
        const filteredPosts = filter === 'all' 
            ? blogPosts 
            : blogPosts.filter(post => post.category === filter);
        
        blogGrid.innerHTML = filteredPosts.map(post => {
            const date = new Date(post.date);
            const formattedDate = date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            return `
                <article class="blog-card" data-category="${post.category}">
                    <div class="blog-card-header">
                        <span class="blog-category">${post.category === 'diu' ? 'Industry Updates' : 'Project'}</span>
                        <time class="blog-date" datetime="${post.date}">${formattedDate}</time>
                    </div>
                    <h3 class="blog-card-title">
                        <a href="${post.url}">${post.title}</a>
                    </h3>
                </article>
            `;
        }).join('');
    }
    
    // Filter button handlers
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderBlogPosts(currentFilter);
        });
    });
    
    // Initial render
    renderBlogPosts();
});
