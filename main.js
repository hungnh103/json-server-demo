const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if(req.method === 'POST') {
    req.body.createAt = Date.now()
  }
  next()
})

server.use('/api', router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
