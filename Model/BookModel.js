const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    total_pages: {
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt:{
        type: Date,
        default: () => Date.now()
    },
    publish_date: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    isbn: {
        type: Number,
        required: true,
        min: 0
    },
});

bookSchema.statics.findByTitle = function (title) {
    return this.where({name: new RegExp(title, "i")});
}

// Before running the save function, update the updatedAt then save it
bookSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Book", bookSchema);