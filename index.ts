import express, { Application, Request, Response } from 'express'
import Todo from './todo'
import apiRoutes from './api-routes/index'
import './ db'
const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes);

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}