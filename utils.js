const axios = require('axios')
const cheerio = require('cheerio')
const chalk = require('chalk')

// +++++ PROGRAM FLOW +++++

  // == getCourseId(courseURL) ==
    // a. User submits url of course home page
    // b. Axios request to url
    // c. Cheerio to scrape for course id
  
  // == getCourseCreationDate(courseId) ==
    // d. Interpolate id into url for axios request to udemy api
    // e. Get course creation date from 'created' property

  // == renderDate(dateString) ==
    // f. Render creation date back to user

module.exports = {
  async getCourseCreationDate(id) {
    try {
      // const id = await getCourseId()
      const { data } = await axios.get(`https://www.udemy.com/api-2.0/courses/${id}/?fields[course]=title,url,created`)
      return data
    } catch (err) {
      console.log(err)
    }
  },
  async getCourseId(courseURL) {
    try {
      const response = await axios.get(courseURL)
      // console.log(chalk.gray('Course ID:'), chalk.blue(cheerio.load(response.data)('body').attr()['data-clp-course-id']))
      return cheerio.load(response.data)('body').attr()['data-clp-course-id']
    } catch (err) {
      // throw new Error(chalk.bold.red('Verify url and try again'))
      console.log(err)
    }
  },
  // splitURLForAlreadyPurchasedCourse(courseURL) {
  //   try {

  //   }
  // }
}
