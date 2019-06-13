const express = require('express');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const multer = require('multer');

const routes = new express.Router();

const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;