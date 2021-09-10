const http = require('http')
const { parse } = require('qs')

const { getCourseId, getCourseCreationDate } = require('./utils')
const layout = require('./layout')


const port = process.env.PORT || 3000
http.createServer(async (req, res) => {
  
  let body = ''
  if (req.method === 'POST') {

    req.on('data', function (chunk) {
      console.log('Chunk', chunk)
      body += chunk;
    })

    req.on('end', async () => {
      const parsedReq = parse(body)
      console.log('Parsed Request:', parsedReq)
      const courseURL = parsedReq.courseURL
      
      if (!courseURL.trim().length > 0) {
        res.end(layout({created: ''}))
      } else {
        const courseId = await getCourseId(courseURL)
        const course = await getCourseCreationDate(courseId)
        const date = new Date(course.created).toDateString()
        console.log('Date:', date)
        
        res.writeHead(200);
        res.end(layout({created: date}));
      }
    })
  } else {
    res.end(layout({created: ''}))
  }
}).listen(port)