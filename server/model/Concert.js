const mongoose = require("mongoose")

const concertSchema = mongoose.Schema({
    concert_name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    ticket_price:{
        type:Number,
        required:true
    },
    available_tickets:{
        type:Number,
        required:true
    },
    
})

module.exports = mongoose.model('Concert',concertSchema);