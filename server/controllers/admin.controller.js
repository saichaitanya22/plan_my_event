const Admin = require("../models/admin");

module.exports.create = function (req, res) {
    // Validate request
    Admin.findOne({username: req.body.username}, function (err, admin) {
        if (admin) {
            console.log('Username already registered');
            res.redirect('/');
        } else if (err) {
            console.log(err.message);
            res.redirect('/');
        } else {
            //Create a admin
            const admin = new Admin({
                username: req.body.username,
                password: req.body.password
            })
            admin.save().then(data => {
                console.log("Data inserted!");

                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Admin."
                });
            });
        }
    });
};

module.exports.findOne = function (req, res) {
    const id = req.params.id;
    Admin.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found Admin with id " + id});
            else res.send(data);
        })
        .catch(err => {
            console.log("Error: ", err);
            res.status(500).send({message: "Error retrieving Admin with id=" + id});
        });
};

module.exports.update = function (req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Admin.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Admin with id=${id}. Maybe Admin was not found!`
                });
            } else res.send({message: "Admin was updated successfully."});
        })
        .catch(err => {
            console.log("Error: ", err);
            res.status(500).send({
                message: "Error updating Admin with id=" + id
            });
        });
};

module.exports.delete = function (req, res) {
    const id = req.params.id;
    Admin.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`
                });
            } else {
                res.send({
                    message: "Admin was deleted successfully!"
                });
            }
        })
        .catch(err => {
            console.log("Error: ", err);
            res.status(500).send({
                message: "Could not delete Admin with id=" + id
            });
        });
};
