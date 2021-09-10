const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
  async getCourseCreationDate(id) {
    try {
      const { data } = await axios.get(`https://www.udemy.com/api-2.0/courses/${id}/?fields[course]=created`)
      return data.created
    } catch (err) {
      console.log(err)
    }
  },
  async getCourseId(courseURL) {
    try {
      const response = await axios.get(courseURL)
      return cheerio.load(response.data)('body').attr()['data-clp-course-id']
    } catch (err) {
      console.log(err)
    }
  },
  // splitURLForAlreadyPurchasedCourse(courseURL) {
  
  // }
}
