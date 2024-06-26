import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'

import { router } from './routes'

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
