const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
  async getCourse(id) {
    try {
      const { data } = await axios.get(`https://www.udemy.com/api-2.0/courses/${id}/?fields[course]=created,title`)
      return data
    } catch (err) {
      console.log(err)
    }
  },
  async getCourseId(parsedCourseURL) {
    try {
      const response = await axios.get(parsedCourseURL)
      return cheerio.load(response.data)('body').attr()['data-clp-course-id']
    } catch (err) {
      console.log(err)
    }
  },
  async parseURL(courseURL) {
    const urlArray = courseURL.split('/').filter(el => el !== '')
    
    if (urlArray.length === 4) {
      return courseURL
    } 

    let parsedURLString = ''
    for (let i = 0; i <= 3; i++) {
      let el = urlArray[i]
      if (el === 'https:') {
        parsedURLString += `${el}//`
      } else {
        parsedURLString += `${el}/`
      }
    }
    return parsedURLString
  }
}
