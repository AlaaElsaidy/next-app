import dbConnect from '@/lib/dbConnect'
import Todo from '@/lib/models/Todo'
import ImageKit from 'imagekit'

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})

export async function PUT(request, { params }) {
  try {
    await dbConnect()
    const { id } = params
    const form = await request.formData()

    const title = form.get('title') || ''
    const description = form.get('description') || ''
    const image = form.get('image')
    const existing = await Todo.findById(id)
    if (!existing) return new Response('Todo not found', { status: 404 })

    let imageUrl = existing.imageUrl
    if (image && image.size) {
      const buffer = Buffer.from(await image.arrayBuffer())
      const upload = await imagekit.upload({
        file: buffer,
        fileName: image.name || `todo-${Date.now()}.jpg`,
      })
      imageUrl = upload.url
    }

    const updated = await Todo.findByIdAndUpdate(
      id,
      { title, description, imageUrl },
      { new: true }
    )
    return new Response(JSON.stringify(updated), { status: 200 })
  } catch (err) {
    console.error('PUT error:', err)
    return new Response('Server error', { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  await dbConnect()
  await Todo.findByIdAndDelete(params.id)
  return new Response(JSON.stringify({ message: 'Deleted' }), { status: 200 })
}