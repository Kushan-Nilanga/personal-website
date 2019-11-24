const axios = require('axios')
axios_repo = require('axios')
const cheerio = require('cheerio')
cheerio_repo = require('cheerio')
const str = require('string')

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
            repo_name = $(this).find('h3>a').text().trim()
            console.log(repo_name)

            // The github link is made here
            repo_link = "https://github.com/Kushan-Nilanga/" + repo_name
            console.log(repo_link)

            // The repository description
            repo_desc = $(this).find('p').text().trim()
            console.log(repo_desc)

            // The main programming language in which the repos are made
            repo_lang = $(this).find('.repo-language-color').next().text().trim()
            console.log(repo_lang)

            // The number of stars that repository have
            repo_stars = $(this).find('.octicon-star').parent().text().trim()
            console.log(repo_stars)

            // The number of forks the repository have
            repo_forks = $(this).find('.octicon-repo-forked').parent().text().trim()
            console.log(repo_forks)

            // The time that the repository last updated
            repo_update = $(this).find('relative-time').text().trim()
            console.log(repo_update)

            // The licensing of the repository
            repo_law = $(this).find('.octicon-law').parent().text().trim()
            console.log(repo_law)

            console.log("")

            // creating new entries if doesn't exist
            if (!strapi.query('projects').find({project_name:repo_name})) {
                console.log("ran")
                strapi.query('projects').create(
                    {
                        project_name: repo_name,
                        project_github: repo_link,
                        project_description: repo_desc,
                        project_forks: repo_forks,
                        project_stars: repo_stars,
                        project_updated: repo_update,
                        project_law: repo_law,
                        project_language: repo_lang
                    }
                ).catch(console.error)
            } else {
                // updating entries if exists
                strapi.query('projects').update(
                    {project_name:repo_name},
                    {
                        project_github: repo_link,
                        project_description: repo_desc,
                        project_forks: repo_forks,
                        project_stars: repo_stars,
                        project_updated: repo_update,
                        project_law: repo_law,
                        project_language: repo_lang
                    }
                ).catch(console.error)
            }
        })
    })
    .catch(console.error);