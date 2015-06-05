var express = require('express');
var router = express.Router();
var path = require('path');

/* GET angular partials views */
router.get('/:partialPath', function(req, res, next) {
  res.render(path.join('partialsAngular/', req.params.partialPath));
});

module.exports = router;
