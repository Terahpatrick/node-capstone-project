const express = require('express');
const ArticleController = require('../controllers/article.controller');
const ArticleCommentController = require('../controllers/articleComment.controller');

const router = express.Router();
const auth = require('../middlewares/auth');


router.post('/', auth, ArticleController.createSingleArticle);
router.patch('/:articleId', auth, ArticleController.updateSingleArticle);
router.delete('/:articleId', auth, ArticleController.deleteSingleArticle);
router.post('/:articleId/comment', auth, ArticleCommentController.writeComment);

module.exports = router;
