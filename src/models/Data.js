import mongoose from "mongoose";

const {Schema} = mongoose;

const dataSchema = new Schema({
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

export default mongoose.models.Data ||
  mongoose.model("Data", dataSchema);