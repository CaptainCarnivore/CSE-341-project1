const express = require('express');
const router = express.Router();


const contactsController = require('../controllers/contacts');
const validate = require('../utilities/validation');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validate.contactValidationRules(), validate.contactValidate, contactsController.createContact);

router.put('/:id', validate.contactValidationRules(), validate.contactValidate, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;