const axios = require('axios')
axios_repo = require('axios')
const cheerio = require('cheerio')
cheerio_repo = require('cheerio')
const str = require('string')
const url = "https://github.com/Kushan-Nilanga?tab=repositories"

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const repo_urls = $("#user-repositories-list > ul > .public");

        repo_urls.each(function(){
            repo_link = $(this).find('h3>a').text().trim()
            repo_link = "https://github.com/Kushan-Nilanga/"+repo_link
            console.log(repo_link)

            repo_lang = $(this).find('p').text().trim()
            console.log(repo_lang)

            repo_desc = $(this).find('.repo-language-color').next().text().trim()
            console.log(repo_desc)

            // Add the functionality to get read me details 
            // but not necessory
            /*
            axios_repo(repo).then(response_repo=>{
                const html_repo = response_repo.data
                const $_repo = cheerio_repo.load(html_repo)      
            })
            */
           console.log("")
        })
    })
    .catch(console.error);