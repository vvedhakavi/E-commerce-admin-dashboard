import React, { useState } from 'react'

const AddProduct = () => {

    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");

    const handleSubmit = () =>{
        const newProduct = {
            id: Date.now(),
            title,
            price,
        }
        console.log(newProduct);
        
    }

  return (
    
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">
      Add Product
    </h1>

    <div className="max-w-md bg-white p-6 rounded shadow">
      <form className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded"
       onClick={handleSubmit}>
          Add Product
        </button>

      </form>
    </div>
  </div>

  )
}

export default AddProduct
