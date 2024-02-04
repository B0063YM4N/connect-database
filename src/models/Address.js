import mongoose from "mongoose";

const {Schema} = mongoose;

const addressSchema = new Schema({
      AddressName: {
        type: String,
        required: true,
      },
      Latitude: {
        type: String,
        required: true,
      },
      Longitude: {
        type: String,
        required: true,
      }
})

// const dataArray = new Schema({
//   message: {
//     type: String,
//     required: true,
//   },
//   data: [dataSchema]
// })

export default mongoose.models.Data ||
  mongoose.model("addresses", addressSchema);