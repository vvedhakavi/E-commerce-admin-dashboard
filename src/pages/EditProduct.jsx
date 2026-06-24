import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api';

const EditProduct = () => {

    const {id} = useParams();
    console.log(id);
    const [message,setMessage] = useState("");
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    
    // const products = [
    //     {id:1,title:"shirt"},
    //      {id:2,title:"bag"},
    //       {id:3,title:"watch"}
    // ] //temporary data

    const [product,setProduct] = useState(null);

    useEffect(()=>{
         console.log(id);
        api.get(`/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
            
            setTitle(res.data.title);
            setPrice(res.data.price)

            console.log(res.data);
            
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[id]);

    if(!product){
        return<h1>Loading...</h1>
    }

    // const selectProducts = products.find(
    //     (product) => product.id === Number(id)
    // );

    // console.log(selectProducts);
    
const handleUpdate = () =>{

 api.put(`/products/${id}`,{
  title,
  price,
 })
 .then((res)=>{
  console.log(res.data);
  console.log("Updated Product");
  
  setMessage("Product Updated Successfully")
  setTimeout(()=>{
    setMessage("");
  },3000)
 })
  
 .catch((err) =>{
  console.log(err);
  
 })
};

  return (
    <div className='p-6'>
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
       
       {
        message && (<p className='bg-green-100 text-green-700 p-2 rounded mb-4'>{message}</p>)
       }

       <div className="max-w-md bg-white shadow p-4 rounded">

        <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}  className="w-full border p-2 mb-3"/>
        <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}  className="w-full border p-2 mb-3"/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpdate}>Update Product</button>
       </div>

    </div>
  )
}

export default EditProduct
