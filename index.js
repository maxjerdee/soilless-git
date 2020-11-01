const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000

console.log(__dirname);


express()
  .use(express.static('./public'))
  .set('views', './views')
  .set('view engine', 'pug')
  .get('/', (req, res) => {
    res.render('pages/index');
    console.log('Homepage Visit')})
  .get('/test', (req, res) => {
    res.render('pages/test')
  })
  .get('/blog-1', (req, res) => {
    res.render('pages/blog-1')
  })
  .get('/blog-2', (req, res) => {
    res.render('pages/blog-2')
  })
  .get('/blog-3', (req, res) => {
    res.render('pages/blog-3')
  })
  .get('/blog-4', (req, res) => {
    res.render('pages/blog-4')
  })
  .get('/Article', (req, res) => {
    res.render('pages/article')
  })
  .get('/Blog', (req, res) => {
    res.render('pages/blog')
  })
  .get('/About-Us', (req, res) => {
    res.render('pages/about-us')
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
