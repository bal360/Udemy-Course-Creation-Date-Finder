const http = require('http')
const { parse } = require('qs')

const { scrapeCourseId, getCourse, parseURL } = require('./utils')
const layout = require('./layout')


const port = process.env.PORT || 3000
http.createServer(async (req, res) => {
  
  let body = ''
  if (req.method === 'POST') {

    req.on('data', function(chunk) {
      body += chunk;
    })

    req.on('end', async function() {
      const parsedReq = parse(body)
      const courseURL = parsedReq.courseURL
      
      if (!courseURL.trim().length > 0 || !courseURL.trim().includes('.com')) {
        res.end(layout({}))
      } else {
        const parsedCourseURL = await parseURL(courseURL)
        const courseId = await scrapeCourseId(parsedCourseURL)
        const {created, title} = await getCourse(courseId)
        const creationDate = new Date(created).toDateString()
        
        res.writeHead(200);
        res.end(layout({creationDate, title}));
      }
    })
  } else {
    res.end(layout({}))
  }
}).listen(port)