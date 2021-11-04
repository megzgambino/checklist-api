const router = require('express').Router()
const ChecklistController = require('../controllers/ChecklistControllers')
const ItemController = require('../controllers/ItemControllers')
const TemplateController = require('../controllers/TemplateControllers')

//Checklist Routes
router.get('/checklists', ChecklistController.showAll)
router.get('/checklists/:id', ChecklistController.showOne)
router.post('/checklists/', ChecklistController.create)
router.patch('/checklists/:id', ChecklistController.update)
router.delete('/checklists/:id', ChecklistController.delete)


//Item Routes
router.get('/checklists/items', ItemController.showAll)
router.get('/checklists/items/:id', ItemController.showOne)
router.post('/checklists/items', ItemController.create)
router.patch('//checklists/items/:id', ItemController.update)
router.delete('/checklists/items/:id', ItemController.delete)


//templates Routes
router.get('/checklists/templates', TemplateController.showAll)
router.get('/checklists/templates/:id', TemplateController.showOne)
router.post('/checklists/templates', TemplateController.create)
router.patch('//checklists/templates/:id', TemplateController.update)
router.delete('/checklists/templates/:id', TemplateController.delete)





module.exports = router