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

        repo_urls.each(function(){

            // By the navigation link the repo name can be extracted
            repo_link = $(this).find('h3>a').text().trim()
            console.log(repo_link)
            
            // The github link is made here
            repo_link = "https://github.com/Kushan-Nilanga/"+repo_link
            console.log(repo_link)

            // The repository description
            repo_lang = $(this).find('p').text().trim()
            console.log(repo_lang)

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
            repo_forks = $(this).find('relative-time').text().trim()
            console.log(repo_forks)

            // The licensing of the repository
            repo_law = $(this).find('.octicon-law').parent().text().trim()
            console.log(repo_law)
            
            console.log("")
        })
    })
    .catch(console.error);