const axios = require('axios')
const cheerio = require('cheerio')
const str = require('string')
const url = "https://github.com/Kushan-Nilanga?tab=repositories"

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const statsTable = $("#user-repositories-list > ul > .public > div > div > h3");
        console.log(statsTable.length)

        statsTable.each(function(){
            const link = $(this).find('a').text().trim()
            console.log("https://github.com/Kushan-Nilanga/"+link)
        })
    })
    .catch(console.error);