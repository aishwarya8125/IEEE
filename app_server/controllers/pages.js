// ../controllers/pages.js

// Function for the home page
module.exports.home = function(req, res) {
    res.render('home', { title: 'Home Page' });
  };
  
  // Function for the events page
module.exports.events = function(req, res) {
    res.render('index', { title: 'Events Page' });
  };
  
  // Function for the chapters page
module.exports.chapters = function(req, res) {
    res.render('index', { title: 'Chapters Page' });
  };
  
  // Function for the FAQ page
module.exports.faq = function(req, res) {
    res.render('index', { title: 'FAQ Page' });
  };
  
  // Function for the contact page
module.exports.contact = function(req, res) {
    res.render('index', { title: 'Contact Page' });
  };
  
module.exports.chap1 = function(req, res) {
    res.render('index', { title: 'Chap1' });
  };

module.exports.chap2 = function(req, res) {
    res.render('index', { title: 'Chap2' });
  };

module.exports.chap3 = function(req, res) {
    res.render('index', { title: 'Chap3' });
  };