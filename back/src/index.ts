require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
import { App } from './app'

new App().server.listen(process.env.PORT, () => {
  console.log(
    `Running on ${process.env.NODE_ENV} enviroment on port ${process.env.PORT}`,
  )
})
