const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    mrp: {
        type: Number,
        required: true,
    },

    colors: [
        {
            color: {
                type: String,
            },

            sizes: [
                {
                    size: {
                        type: String,
                    },

                    stock: {
                        type: Number,
                    }
                }
            ],

            description: {
                type: String,
            },

            image: [
                {
                    type: String,
                }
            ],

            price: {
                type: String,
            }
        }
    ],

    category: {
        type: String,
    }

})

//created collection name Product and we can access it through Product
const Product = mongoose.model('PRODUCT', productSchema);

module.exports = Product;