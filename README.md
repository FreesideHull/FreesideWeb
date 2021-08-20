# Freeside Web

This is an [Eleventy](https://11ty.dev/) powered website with [TailWind CSS](https://tailwindcss.com/) and [PostCSS](https://postcss.org/) integration built to serve as a replacement for the Freeside website.

## Benefits
The following are the benefits provided by each page. Take note of these and consider them when making changes in the future.

### Landing page (index)
- Provides concise introduction to Freeside with calls to action.
- Provides links to all social media/communication methods.
- Provides clear routes to projects, showcases, resources and posts.

### About page (about/index)
- Provides clear information about Freeside
- Provides links to all social media/communication methods
- Provides information about getting involved and benefits of getting involved.

### History page (history/index)
TODO

### Blog (blog/index)
- Replaces index of previous site to create a dedicated blog page
- Lists blog posts from [```data/posts```](internal/_includes/data/posts)

### Posts (data/posts)
- Posts ported from old blog to maintain meta data/seo.
- Updated metadata to comply with eleventy.
- Allows Freeside to use eleventy as it's main blog platform, retiring [Freeside-Blog](https://github.com/FreesideHull/Freeside-Blog)

## Structure

The structure of Freeside Web is separated into **internal** and **public** with configuation files existing outside of these directories. Below is an explanation of the struture:

## Configuration files

```.eleventy.js``` is the main eleventy configuration file.

```eleventyComputed.js``` controls [Computed Data](https://www.11ty.dev/docs/data-computed/) within the website.

```tailwind.config.js```is the main Tailwind CSS config file. Advanced configuration/customisation can be done here.

```postcss.config.js``` is the main PostCSS config file. Advanced processing for CSS should be done here.

## internal 
Contains the structure, data and other resources for the website *prior* to it being rendered into html.

#### index.njk
This page is primarily made up of content with the header and footer snippets being defined using [```layouts/home```](internal/_includes/layouts/home.njk). 

#### _includes
Contains all of the major resources for the website, including ```css```, ```img```, ```js```,```layouts``` and ```snippets```.

```css``` contains all of the style files. The styling is provided by Tailwind CSS which is primarily running "out of the box". Customisation of Tailwind can be done in ```tailwind.config.js```. Any processing / removal of unused styles / optimisation should be done with ```postcss.config.js```.

```img``` contains images used within the website. **note:** some images reside only in the public img folder.

```js``` conains all of the js files relevant to functionality of the website.

```layouts``` contains all of the layout files, these are in nunjuck format. There is a home, default, blog and post layout.

```snippets``` contains 'snippets' which aid layouts. For example, ```nav``` & ```footer``` snippets can be found in each layout to provide a uniform layout.  The ```alumni``` snippet should be used as the profile for each alumnus profile.

### about

Contains the index.njk which serves the about page. 


### alumni 

Contains the index.njk which serves the alumni page. 

Also contains individual alumnus profiles. Profiles should be named as per the alumnus tag, e.g. ```closebracket.njk```, ```sleepyxuras.njk```.

### blog

Contains the index.njk which serves the blog page. This should display a list of blog posts using ```eleventyComputed.js``` and posts from ```data/posts```.

### data 

Contains any/all relevant data for the website.

#### data/posts

Contains markdown files which are displayed on the blog. The former data structure has been retained aside from the date format which was changed to comply with eleventy's standards. Any further blog posts should be placed in this directory so that they can be displayed on the website.

Each post should start with the following:

```
layout: layouts/post
title: Your title
date: "2021-08-20"
tags: sometag
```

### history

## public 
Contains the structure, data and other resources for the website *after* it has been rendered into html.

## Getting Started 
Once you have the repo cloned and available your system, run the following commands:

1. Install all the needed dependancies as per package.json.
```
npm install
```

2. Once the dependancies have been installed, you can start the site by running
```
npm start
```