import express from 'express'
import userRouter from './testRouter.js'

const app = express()

app.use('/api', userRouter)

app.listen(80, () => {
  console.log('server running')
})