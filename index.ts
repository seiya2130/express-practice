import express, { Application, Errback, NextFunction, Request, Response } from 'express'
import Todo from './todo'
import apiRoutes from './api-routes/index'
import './ db'
const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes);

app.use(function(req, res) {
  res.status(404).json({ msg: 'Not Found' })
})

app.use(function(err: Error, req: Request, res: Response, next: NextFunction){
  if(res.headersSent){
    return next(err);
  }
  res.status(500).json({ msg: '不正なエラーが発生しました'})
});

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}