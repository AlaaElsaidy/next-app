import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) throw new Error('Please add your MONGODB_URI inside .env.local')

let cached = global.mongoose
if (!cached) cached = global.mongoose = { conn: null, promise: null }

export default async function dbConnect() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    }).then((m) => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}