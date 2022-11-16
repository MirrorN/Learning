/* 不使用 es6 的语法 */
const express = require('express')


/* 开启 es6 语法 */
import express from 'express'

const router = express.Router()

router.get('/api/func1', function (req, res) {
  console.log(req.query)
  res.send('dddd')
})

function testGet(req, res) {
  console.log(req)
  res.send('ddddd')
}

router.get('/test', testGet)

/* 不使用 es6 语法导出 */
module.exports = router

/* 使用 es6 语法导出 */
export default router