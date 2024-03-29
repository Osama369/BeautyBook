import mongoose from "mongoose";
import { Schema } from "mongoose";

// schema for booking 
const bookingSchema= new Schema ({
    salon:{
        type:mongoose.Types.ObjectId,
        ref:"Salon",
        required:true
    },
    salonName:{
        type:String,
    },

    user:{
        // ref from User model object
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },

    services:[{
       
    }],

     appointmentDate: { // date of appointment user can select any date if the date is available
        type: Date,
       // required: true,
      },
     
      timeSlot: { // time slot of the appointment
        type: String,
      // required: true,
      },

      paymentProofImg:{ // will be uploaded by the user after the payment is done
        type:String,  // image
        required :true  
      },
       userContact: { // contact of the user
        type: String,
       
      },
      userName: { // name of the user
        type: String,
       
      },
      status: {  // status of the booking
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
      },

      isPaid: { // 20 % of the total amount will be paid by the user
        type: Boolean,
        default: false,
      },
}
, {
    timestamps: true,
  }
);


export const Booking = mongoose.model("Booking", bookingSchema);