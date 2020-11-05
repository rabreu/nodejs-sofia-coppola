const express = require('express');
const router = express.Router();
const controller = require('../controllers/workController');
const cors = require('cors')

router.get('/coppola_works', cors(), controller.getAll);
router.get('/coppola_works/:_id', cors(), controller.getById);
router.post('/coppola_works', cors(), controller.addWork)
router.put('/coppola_works/:_id', cors(), controller.updateWork)
router.delete('/coppola_works/:_id', cors(), controller.deleteWork)

router.get('/coppola_works_as_director', cors(), controller.getAllAsDirector);


module.exports = router;
