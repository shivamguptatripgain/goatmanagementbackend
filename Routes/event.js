const { 
    createEvent, 
    getAllEvent, 
    deleteEvent, 
    createVillages, 
    getAllVillages, 
    getBeneficiaryDetailsofParticularVillage,
    updateBeneficiary
  } = require('../Controllers/event');
  
  const express = require('express');
  const router = express.Router();

  

  // Event Routes
  router.get('/', getAllEvent);
  router.delete('/delete/:id', deleteEvent);
  
  // Village Routes
  router.post('/create', createEvent);
  router.post('/villages/create', createVillages);
  router.get('/villages', getAllVillages);
  router.delete('/villages/delete/:id', deleteEvent);
  router.get('/villages/:id', getBeneficiaryDetailsofParticularVillage);

  router.patch('/update-beneficiary/:id', updateBeneficiary);
  
  module.exports = router;
  