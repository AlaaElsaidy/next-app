'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image';
export default function TodoPage() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [editId, setEditId] = useState(null)

  async function fetchTodos() {
    const res = await fetch('/api/todos')
    setTodos(await res.json())
  }

  useEffect(() => { fetchTodos() }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData()
    form.append('title', title)
    form.append('description', description)
    if (image) form.append('image', image)

    const method = editId ? 'PUT' : 'POST'
    const url = editId ? `/api/todos/${editId}` : '/api/todos'
    await fetch(url, { method, body: form })

    setTitle('')
    setDescription('')
    setImage(null)
    setEditId(null)
    fetchTodos()
  }

  async function handleDelete(id) {
    await fetch(`/api/todos/${id}`, { method: 'DELETE' })
    fetchTodos()
  }

  function startEdit(todo) {
    setTitle(todo.title)
    setDescription(todo.description)
    setEditId(todo._id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-orange-400 px-6 py-10 font-sans">
      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-md">
         My Todo List
      </h1>

  
      <div className="max-w-2xl mx-auto bg-[#112240] border border-gray-700 rounded-xl shadow-lg p-8 mb-14">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-700 bg-[#0a192f] text-orange-300 focus:ring-2 focus:ring-orange-400"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="px-4 py-2 rounded-md border border-gray-700 bg-[#0a192f] text-orange-300 focus:ring-2 focus:ring-orange-400 resize-none"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
                       file:text-sm file:font-semibold 
                       file:bg-orange-400 file:text-[#0a192f] hover:file:bg-orange-500 cursor-pointer"
          />
          <button
            type="submit"
            className="py-2 bg-orange-400 text-[#0a192f] rounded-lg font-semibold 
                       hover:bg-orange-500 transition"
          >
            {editId ? 'Save Changes' : 'Add Todo'}
          </button>
        </form>
      </div>

      <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {todos.length === 0 ? (
          <p className="col-span-full text-center text-orange-300 italic">
            No tasks yet… Start by adding one!
          </p>
        ) : (
          todos.map((t) => (
            <div
              key={t._id}
              className="bg-[#112240] border border-gray-700 rounded-xl shadow-md 
                         overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all"
            >
              {t.imageUrl && (
                <Image
                  src={t.imageUrl}
                  alt="Todo"
                  className="h-52 w-full object-cover border-b border-gray-700"
                />
              )}

              <div className="flex-1 p-5 flex flex-col">
                <h2 className="font-bold text-xl mb-2 text-orange-400">
                  {t.title}
                </h2>
                <p className="text-orange-300 text-sm leading-relaxed flex-1">
                  {t.description}
                </p>
              </div>

              <div className="flex justify-between items-center px-5 py-3 bg-[#0a192f] border-t border-gray-700">
                <button
                  onClick={() => startEdit(t)}
                  className="text-blue-400 hover:text-blue-500 font-semibold tracking-wide"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="text-red-400 hover:text-red-500 font-semibold tracking-wide"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}