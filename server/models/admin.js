const mongoose = require('mongoose');

const {Schema} = mongoose;

const adminSchema = new Schema(
    {
        username: {
            type: String,
            required: [true],
            minLength: 3,
            maxLength: 30
        },
        password: {
            type: String,
            required: [true],
            minLength: 6
        }
    }
);

adminSchema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;