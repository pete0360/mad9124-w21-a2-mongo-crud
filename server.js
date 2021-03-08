import createDebug from 'debug'
const debug = createDebug('assg02:httpServer')
import http from 'http'
import app from './app.js'

const httpServer = http.createServer(app)

const port = process.env.PORT || 3030
httpServer.listen(port, () => { 
    debug(`HTTP server is listening on port ${httpServer.address().port}`)
})

