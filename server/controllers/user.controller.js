const User = require("../models/user");

module.exports.create = function(req, res){
    // Validate request
    User.findOne({email : req.body.email}, function(err, user){
       if(user){
           console.log('Email ID already registered');
           res.redirect('/');
       } else if(err){
           console.log(err.message);
           res.redirect('/');
       } else{
           //Create a user
           const user = new User({
               username: req.body.username,
               password: req.body.password,
               phone: req.body.phone,
               email: req.body.email,
               address: req.body.address,
               vendor: req.body.vendor
           })
           user.save().then(data => {
               console.log("Data inserted!");

               res.send(data);
           }).catch(err => {
               res.status(500).send({
                   message:
                       err.message || "Some error occurred while creating the User."
               });
           });
       }
    });
};

module.exports.findOne = function(req, res){
    const id = req.params.id;
    User.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
};

module.exports.update = function(req, res){
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe User was not found!`
                });
            } else res.send({ message: "User was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

module.exports.delete = function(req, res){
    const id = req.params.id;
    User.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            } else {
                res.send({
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

module.exports.findAllVendors = function(req, res){
    User.find({ vendor: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vendors."
            });
        });
}
