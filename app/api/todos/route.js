import dbConnect from '@/lib/dbConnect'
import Todo from '@/lib/models/Todo'

export async function GET() {
  await dbConnect()
  const todos = await Todo.find().sort({ createdAt: -1 })
  return new Response(JSON.stringify(todos), { status: 200 })
}

export async function POST(req) {
  await dbConnect()
  const form = await req.formData()

  const title = form.get('title')
  const description = form.get('description')
  const image = form.get('image')

  let imageUrl = ''
  if (image && image.size) {
    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const ImageKit = (await import('imagekit')).default
    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    })

    const uploaded = await imagekit.upload({
      file: buffer,
      fileName: image.name || `todo-${Date.now()}.jpg`,
    })
    imageUrl = uploaded.url
  }

  const todo = await Todo.create({ title, description, imageUrl })
  return new Response(JSON.stringify(todo), { status: 201 })
}