const LanguageModel = require("../models/Language");

exports.postLanguage = (req, res, next) =>{
    const {language,proficiency} = req.body;
    const newLanguage = LanguageModel({language,proficiency});
    newLanguage.save((err,data)=>{
        if(err){
            if (err.code == 11000) {
                let error = err['errmsg'].split(':')[2].split(' ')[1].split('_')[0];
                res.status(500).send({
                    message: `${error} Language saved already`,
                    status: 11000,
                    error: err
                });
                return false;
            }
            res.status(500).send({
                status:500,
                message:"Could not save Language"
            });
        }
        else{
            // console.log(data)
            res.status(200).send({
                status:200,
                message: "Language created successfully",
                data: data
            });
        };
    }

    ); 
};

exports.getallLanguage = (req,res,next) =>{
    LanguageModel.find()
    .then( data =>{
        res.status(200).send({
            status: 200,
            message: "Language loaded Successfully",
            data: data
        });
    })
    .catch(err =>{
        res.status(500).send({
            status: 500,
            message: "No Language available for this user",
            err: err
        });
    });
};

exports.updateLanguage = (req, res, next) =>{
    const langId = req.params.id;
    const langupdate = req.body;
    langupdate['date_modified'] = new Date();
    LanguageModel.findOneAndUpdate({_id:langId},{$set:langupdate},{new:true,upsert:true})
    .then((data) =>{
        res.status(200).send({
            status: 200,
            message: "language updated",
            data: data
        });
    })
    .catch((err)=>{
        res.status(500).send({
            status: 500,
            message: " An error occurred"
        });
    });
};


exports.deloneLanguage = (req, res, next) =>{
    const langId = req.params.id;
    LanguageModel.remove({_id:langId})
    .exec((err,data) =>{
        if (err) {
            res.status(500).send({
                status: 500,
                message: "An error Occurred"
            });
            return false;
        }
        res.status(200).send({
            status:200,
            message: `language with id: ${langId} deleted`
        });
    });

};