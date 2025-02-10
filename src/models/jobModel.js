import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: { type: [String], required: true },
    requirements: { type: [String], required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    type: {
      type: String,
      enum: ['full time', 'part time', 'contract'],
      required: true,
    },
    location: { type: String, required: true },
    level: {
      type: String,
      enum: ['Entry-Level', 'Mid-Level', 'Senior-Level'],
      required: true,
    },
    shift: { type: String, enum: ['day', 'night', 'flexible'], required: true },
    jobCategories: { type: [String], required: true }, // Array of job categories
    isUrgent: { type: Boolean, default: false }, // Boolean for urgency
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
