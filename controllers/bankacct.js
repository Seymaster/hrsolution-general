const BankacctModel = require("../models/bankacct");


exports.postBankacct = (req,res,next)=>{
    const {account_title,bank_name,account_number,bank_code,bank_branch} = req.body;
    const newBankaccount = BankacctModel({account_title,bank_name,account_number,bank_code,bank_branch}) 
    newBankaccount.save((err,data)=>{
        if(err){
            if (err.code == 11000) {
                let error = err['errmsg'].split(':')[2].split(' ')[1].split('_')[0];
                res.status(500).send({
                    message: `${error} account saved already`,
                    status: 11000,
                    error: err
                });
                return false;
            }
            res.status(500).send({
                status:500,
                message:"Could not save bank account"
            });
        }
        else{
            // console.log(data)
            res.status(200).send({
                status:200,
                message: "bank account created successfully",
                data: data
            });
        }
    }

    );  
};

// exports.getallBankacct = (req,res,next)=>{
//     let page = parseInt(req.query.page) || 1;
//     let limit = (parseInt(req.query.limit) > 100?100:parseInt(req.query.limit)) || 20;
//     let search = req.query.q;
//     let userId = req.user._id;
//     let query = {};
//     query.skip = limit * (page-1);
//     query.limit = limit;
//     let filterCriteria = {owned_by: userId};
//     if(search) filterCriteria = {...filterCriteria,name: search};
//     BankacctModel.find(filterCriteria,{},query).exec((err,data) =>{
//         if (err){
//             res.status(500).send({
//                 status: 500,
//                 message: "An error occured",
//                 error: err
//             });
//             return false;
//         }
//         res.status(200).send({
//             status: 200,
//             message: "Bank Account Loaded Successfully",
//             data: data
//         })
//     })
// }

exports.getAllBankacct = (req,res,next)=>{
        BankacctModel.find()
        .then( data => {
            res.status(200).send({
                status: 200,
                message: "Bank Accounts Loaded Successfully",
                data: data
            });
        })
        .catch(err =>{
            res.status(500).send({
                status: 500,
                message: "No Bank Accounts available for this user",
                err: err
            })
        });
};

exports.updateBankacct = (req, res, next) =>{
    const bankacctId = req.params.id;
    const acctupdate = req.body;
    acctupdate['date_modified'] = new Date();
    BankacctModel.findOneAndUpdate({_id:bankacctId},{$set:acctupdate},{new:true,upsert:true})
    .then((data) =>{
        res.status(200).send({
            status: 200,
            message: "Bank details updated",
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

exports.deloneBankacct = (req, res, next) =>{
    const bankacctId = req.params.id;
    console.log(bankacctId)
    BankacctModel.remove({_id:bankacctId})
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
            message: `Bank details with id: ${bankacctId} deleted`
        });
    });

};
