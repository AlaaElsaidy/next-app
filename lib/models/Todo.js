import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
)

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema)