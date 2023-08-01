const router = require('express').Router();
const artworksController = require('../controllers/artworksController');

router.get('', artworksController.all);
router.post('/:id', artworksController.create);
router.get('/:id', artworksController.one);
router.put('/:id', artworksController.update);
router.delete('/:id', artworksController.destroy);



module.exports = router;