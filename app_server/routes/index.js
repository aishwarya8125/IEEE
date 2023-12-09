var express = require('express');
var router = express.Router();
var ctrlPages = require('../controllers/pages');

router.get('/', ctrlPages.home);
router.get('/events', ctrlPages.events);
router.get('/chapters', ctrlPages.chapters);
router.get('/faq', ctrlPages.faq);
router.get('/contact', ctrlPages.contact);
router.get('/chap1', ctrlPages.chap1);
router.get('/chap2', ctrlPages.chap2);
router.get('/chap3', ctrlPages.chap3);

module.exports = router;

