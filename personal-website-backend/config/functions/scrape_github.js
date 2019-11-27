const axios = require('axios')
axios_repo = require('axios')
const cheerio = require('cheerio')
cheerio_repo = require('cheerio')


// URL of my github profile
const url = "https://github.com/Kushan-Nilanga?tab=repositories"

// Scraping
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        // Fetching data on user repos
        const repo_urls = $("#user-repositories-list > ul > .public");

        repo_urls.each(function () {
            // By the navigation link the repo name can be extracted
            const repo_name = $(this).find('h3>a').text().trim()
            //console.log(repo_name)

            // The github link is made here
            const repo_link = "https://github.com/Kushan-Nilanga/" + repo_name
            //console.log(repo_link)

            // The repository description
            const repo_desc = $(this).find('p').text().trim()
            //console.log(repo_desc)

            // The main programming language in which the repos are made
            const repo_lang = $(this).find('.repo-language-color').next().text().trim()
            //console.log(repo_lang)

            // The number of stars that repository have
            const repo_stars = $(this).find('.octicon-star').parent().text().trim()
            //console.log(repo_stars)

            // The number of forks the repository have
            const repo_forks = $(this).find('.octicon-repo-forked').parent().text().trim()
            //console.log(repo_forks)

            // The time that the repository last updated
            const repo_update = $(this).find('relative-time').text().trim()
            //console.log(repo_update)

            // The licensing of the repository
            const repo_law = $(this).find('.octicon-law').parent().text().trim()
            //console.log(repo_law)

            // Try update records if doesn't exist creates a record
            strapi.query('projects').update(
                { project_name: repo_name },
                {
                    project_github: repo_link,
                    project_description: repo_desc,
                    project_forks: repo_forks,
                    project_stars: repo_stars,
                    project_updated: repo_update,
                    project_law: repo_law,
                    project_language: repo_lang
                }
            ).catch(function(){
                strapi.query('projects').create(
                    {
                        project_name:repo_name,
                        project_github: repo_link,
                        project_description: repo_desc,
                        project_forks: repo_forks,
                        project_stars: repo_stars,
                        project_updated: repo_update,
                        project_law: repo_law,
                        project_language: repo_lang,
                        project_thumbnail: {url:"https://flow.org/assets/featurette-bigger-1bf46c79a08d766c5e04d856bd0e3913cfc2524b8a734f3a1648e04250c7f0b3.gif"}
                    }
                ).catch(console.error)
            })
        })
    })
    .catch(console.error);