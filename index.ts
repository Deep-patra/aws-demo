import * as express from 'express'

const app = express()

app.get("/hello", async (req, res) => {
  res.status(200).json({ message: "HELLO" })
})

app.listen(4000, (() => {
  console.log("SERVER IS LISTENING AT PORT", 4000)
}))