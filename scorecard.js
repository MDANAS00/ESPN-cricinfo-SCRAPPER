const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const cheerio = require('cheerio')
const request = require('request')

request(url,cb)

function cb(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        extractmatchDetails(html)
    }
}

function extractmatchDetails(html){
    let $ = cheerio.load(html)

    let descElem = $('.ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid')
    let descArr = descElem.text().split(',')

    let venue = descArr[1].trim()
    let date = descArr[2].trim()

    let result = $('.ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title')
    console.log(venue)
    console.log(date)
    console.log(result.text())
}