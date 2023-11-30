import mongoose from "mongoose";

const {Schema} = mongoose;

const dataSchema = new Schema({
      id: {
        type: Number,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      nameGe: {
        type: String,
        required: true,
      },
      nameEn: {
        type: String,
        required: true,
      }

})

const dataArray = new Schema({
  message: {
    type: String,
    required: true,
  },
  data: [dataSchema]
})

export default mongoose.models.Data ||
  mongoose.model("Data", dataArray);