import { Schema, model, models } from "mongoose";

// Define the parent schema
// const ParentSchema = new Schema({
//   firstName: { type: String, required: true },
//   middleName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   phoneNumber: { type: String, required: true, unique: true },
// });

// Define the main schema
const StudentSchema = new Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    grade: { type: String, required: true },
    parent: {
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      lastName: { type: String, required: true },
      phoneNumber: { type: String, required: true, unique: true },
    },
  },
  {
    timestamps: true,
  }
);

// Create the model from the schema
const Student = models.Student || model("Student", StudentSchema);

export default Student;
