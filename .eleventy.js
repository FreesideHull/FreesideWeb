module.exports = config => {

    // Layout aliases
    config.addLayoutAlias('home', 'layouts/home.njk')
    config.addLayoutAlias('page', 'layouts/page.njk')
    config.addLayoutAlias('contact', 'layouts/contact.njk')
    config.addLayoutAlias('post', 'layouts/post.njk')
    config.addLayoutAlias('blog', 'layouts/blog.njk')
    // Include static assets
    config.addPassthroughCopy('internal/css')
    config.addPassthroughCopy('internal/js')
    config.addPassthroughCopy('internal/img')
    config.addPassthroughCopy('favicon.png')
    config.addPassthroughCopy('favicon.svg')

    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'internal',
            output: 'public',
            includes: '_includes',
            data: 'globals'
        }
    }
    
}

