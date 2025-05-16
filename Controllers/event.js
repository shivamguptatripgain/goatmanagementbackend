const BenificiaryDetails = require('../Models/BenificiaryDetails')
const Villages = require('../Models/Villages')
const { sendResponse } = require('../utils/sendResponse');
const mongoose = require('mongoose');


// const createEvent = async (req, res) => {

//    try {
//       const requiredFields = [
//          "image",
//          "heading",
//          "date",
//          "description"
//       ];

//       const missingOrEmptyFields = requiredFields.filter(field => {
//          const fieldValue = req.body[field];
//          return !(fieldValue && fieldValue.trim());
//       });

//       if (missingOrEmptyFields.length > 0) {
//          return sendResponse(res, 400, Missing or empty fields: ${missingOrEmptyFields.join(", ")}, false);
//       }

//       const newModule = await Events.create({
//          ...req.body
//       });
//       // const { id, ...responseData } = newModule.toJSON();
//       sendResponse(res, 201, "Event created successfully", true, newModule);
//    } catch (error) {
//       console.error("Error creating module:", error);
//       sendResponse(res, 500, "Internal Server Error", false);
//    }
// }

 const createEvent = async (req, res) => {
   try {
      const requiredFields = [
         'beneficiaryName',
         'contactNumber',
         'numberOfGoats',
         'disease',
         'dateOfReceiving',
         'kidsMale',
         'kidsFemale',
         'villageId',
         'husbandName',
         'dateOfReceiving'
         
      ];

      const missingOrEmptyFields = requiredFields.filter(field => {
         const value = req.body[field];
         return typeof value !== "string" || value.trim() === "";
      });

      if (missingOrEmptyFields.length > 0) {
         return sendResponse(
            res,
            400,
            `Missing or empty fields: ${missingOrEmptyFields.join(", ")}`,
            false
         );
      }

      // Get uploaded file (if any)

      const newEvent = await BenificiaryDetails.create({
         ...req.body      });

      sendResponse(res, 201, "Event created successfully", true, newEvent);
   } catch (error) {
      console.error("Error creating event:", error);
      sendResponse(res, 500, "Internal Server Error", false);
   }
};



// get all booking
const getAllEvent = async (req, res) => {

   try {
      const events = await BenificiaryDetails.find()

      // res.status(200).json({success:true, message:"Successful!", data:events})
      sendResponse(res, 200, "Fetch Success", true, events);

   } catch (error) {
      sendResponse(res, 500, "Internal Server Error", false);
   }
}

const deleteEvent = async (req, res) => {
   const id = req.params.id;
   try {
      if (!id) {
         return sendResponse(res, 400, "ID is required", false);
      }
      if (!mongoose.Types.ObjectId.isValid(id)) {
         return sendResponse(res, 400, "Invalid ID format", false);
      }

      const event = await BenificiaryDetails.findById(id);

      if (!event) {
         return sendResponse(res, 404, "Event not found", false);
      }

      await BenificiaryDetails.findByIdAndDelete(id);
      sendResponse(res, 200, "Event deleted successfully", true);
   } catch (error) {
      console.error("Error deleting event:", error);
      sendResponse(res, 500, "Internal Server Error", false);
   }
};



const createVillages = async (req, res) => {
   try {
      const requiredFields = [];
      const missingOrEmptyFields = requiredFields.filter(field => {
         const value = req.body[field];
         return typeof value !== "string" || value.trim() === "";
      });

      if (missingOrEmptyFields.length > 0) {
         return sendResponse(
            res,
            400,
            `Missing or empty fields: ${missingOrEmptyFields.join(", ")}`,
            false
         );
      }
      const newEvent = await Villages.create({
         ...req.body
      });

      sendResponse(res, 201, "Event created successfully", true, newEvent);
   } catch (error) {
      console.error("Error creating event:", error);
      sendResponse(res, 500, "Internal Server Error", false);
   }
};
const deleteVillage = async (req, res) => {
   try {
      const { id } = req.params;

      const deletedVillage = await Villages.findByIdAndDelete(id);

      if (!deletedVillage) {
         return sendResponse(res, 404, "Village not found", false);
      }

      sendResponse(res, 200, "Village deleted successfully", true, deletedVillage);
   } catch (error) {
      console.error("Error deleting village:", error);
      sendResponse(res, 500, "Internal Server Error", false);
   }
};
const updateVillage = async (req, res) => {
   try {
      const { id } = req.params;

      const updatedVillage = await Villages.findByIdAndUpdate(id, req.body, {
         new: true, // return the updated document
         runValidators: true // ensure model validations run
      });

      if (!updatedVillage) {
         return sendResponse(res, 404, "Village not found", false);
      }

      sendResponse(res, 200, "Village updated successfully", true, updatedVillage);
   } catch (error) {
      console.error("Error updating village:", error);
      sendResponse(res, 500, "Internal Server Error", false);
   }
};


const getAllVillages= async (req, res) => {

   try {
      const events = await Villages.find()

      sendResponse(res, 200, "Fetch Success", true, events);

   } catch (error) {
      sendResponse(res, 500, "Internal Server Error", false);
   }
}

const getBeneficiaryDetailsofParticularVillage = async (req, res) => {
   try {
       const benificiaries = await BenificiaryDetails.find({ villageId: req.params.id });
       res.json({ benificiaries });
   } catch (err) {
       console.error(err);
       res.status(500).json({ error: 'Server error' });
   }
}


const updateBeneficiary = async (req, res) => {
   try {
       const { id } = req.params;
       const updatedBeneficiary = await BenificiaryDetails.findByIdAndUpdate(id, req.body, { new: true });
       res.json(updatedBeneficiary);
   } catch (err) {
       console.error(err);
       res.status(500).json({ error: 'Server error' });
   }
}



module.exports = { createEvent, getAllEvent, deleteEvent, createVillages, getAllVillages,getBeneficiaryDetailsofParticularVillage,updateBeneficiary,deleteVillage,updateVillage };