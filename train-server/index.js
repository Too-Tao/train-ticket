const express = require('express')
const apiMocker = require('mocker-api')
const path = require('path')

const app = express()
apiMocker(app, path.resolve('./mockData/mock.js'))

app.listen(3001, function () {
  console.log('服务器已启动')
})