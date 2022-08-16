const express = require('express');
const path = require('path');
const app = express();
// 开放静态文件
app.use(express.static(path.join(__dirname, 'assets')))
app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(80, () => console.log('服务器启动成功'));