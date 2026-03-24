const Patient = require('../models/patient');

exports.createPatient = async (req,res)=>{
    const p = await Patient.create(req.body);
    res.json(p);
};

exports.getAllPatients = async (req,res)=>{
    const p = await Patient.find();
    res.json({patients:p});
};

exports.deletePatient = async (req,res)=>{
    await Patient.deleteOne({patientId:req.params.id});
    res.json({msg:"deleted"});
};