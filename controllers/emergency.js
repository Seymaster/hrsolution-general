const EmergencyModel = require("../models/Emergency")

exports.postEmergency = (req, res, next) =>{
    const {relationship,email,primary_cont,first_name,last_name,gender,home_phone,work_phone,address1,address2,state,zip_code,country} = req.body;
    const newRelationship = EmergencyModel({relationship,email,primary_cont,first_name,last_name,gender,home_phone,work_phone,address1,address2,state,zip_code,country})
    newRelationship.save((err,data)=>{
        if(err){
            if (err.code == 11000) {
                let error = err['errmsg'].split(':')[2].split(' ')[1].split('_')[0];
                res.status(500).send({
                    message: `${error} Emergency Contact saved already`,
                    status: 11000,
                    error: err
                });
                return false;
            }
            res.status(500).send({
                status:500,
                message:"Could not save Emergency Contacts"
            });
        }
        else{
            // console.log(data)
            res.status(200).send({
                status:200,
                message: "Emergency Contact created successfully",
                data: data
            });
        };
    }

    );  
};

exports.getallEmergency = (req,res,next)=>{
    EmergencyModel.find()
    .then( data => {
        res.status(200).send({
            status: 200,
            message: "Emergency Contacts Loaded Successfully",
            data: data
        });
    })
    .catch(err =>{
        res.status(500).send({
            status: 500,
            message: "No Emergency Contacts available for this user",
            err: err
        })
    });
};