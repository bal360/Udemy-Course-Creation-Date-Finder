const http = require('http')
const { parse } = require('qs')

const { getCourseId, getCourseCreationDate } = require('./utils')
const layout = require('./layout')


const port = process.env.PORT || 3000
const server = http.createServer(async (req, res) => {
  
  let body = ''
  if (req.method === 'POST') {

    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', async () => {
      const parsedReq = parse(body)
      const courseURL = parsedReq.courseURL
      
      const courseId = await getCourseId(courseURL)
      const course = await getCourseCreationDate(courseId)
      const date = new Date(course.created).toDateString()
      console.log('Date:', date)
      
  
      res.writeHead(200);
      res.end(layout({created: `${date}` || ''}));
    })
  } else {
    res.end(layout({created: ''}))
  }

})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})