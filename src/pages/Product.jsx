import React, { useEffect, useState } from 'react'
import api from '../services/api';
import { Link } from 'react-router-dom';

const Product = () => {


    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const [products,setProducts] = useState([]);
  
    useEffect(()=>{
        api.get("/products")
        .then((res)=>{
            setProducts(res.data);
            console.log(res.data);
            // console.log("api call")
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
            
        });
    },[])

    const handleDelete = (id) =>{

        const confirmDelete = window.confirm(
            "Are you sure want to delete?"
        );

        if(confirmDelete){

        console.log(id);
        const updatedProducts = products.filter(
            (product) => product.id !== id
        );
        setProducts(updatedProducts);
        
    }
}
// loading state
if(loading) {
    return(
    <div className='p-6'>
        <h1>Loading Products</h1>
    </div>
    );
}

//no products found statement Search result ellamfilteredProducts la save aaguthu
const filteredProducts = products.filter((product)=>
product.title
.toLowerCase()
.includes(search.toLowerCase())
)

  return (
    <div className="p-6">
  
    
      {/* {products.map((product) => (
<div key={product.id} className='border p-3 mb-3 rounded'>
    <img src={product.image} alt={product.title} className='w-full h-48 object-contain'/>
<h3 className='font-semibold mt-2 line-clamp-2'>{product.title}</h3>
<p className='text-green-600 font-bold'>{product.price}</p>
</div>
        )) } */}
    
{/* search box input  */}
<input type='text' placeholder='Search Product' value={search} onChange={(e)=>setSearch(e.target.value)} className='border p-2 mb-4 rounded'/>
        <table className="w-full table-fixed border-collapse">
            <thead>
                <tr className="bg-slate-800 text-white">
                    <th className="p-3">Id</th>
                    <th className="p-3">Image</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Price</th>
                    <th className='p-3'>Actions</th>
                </tr>
            </thead>
            <tbody>
               
            { filteredProducts.length === 0 ? (
                <tr>
                    <td colSpan="5" className='text-center py-10 text-red-500 font-semibold text-lg'>
                        No Products Found
                    </td>
                </tr>
            ):(
          
              filteredProducts.map((product)=>(
                    <tr key={product.id} className='border-b h-20'>
                    
                    <td className='p-3 text-center' >{product.id}</td>
                    <td className='p-3'><img src={product.image} alt={product.title}  className="w-16 h-16 object-contain mx-auto"></img></td>
                    <td className="p-3 text-left w-125 truncate">{product.title}</td>
                    <td className='p-3 text-center'>  ₹ {product.price}</td>

                    <td className='p-3'>
                    <Link to={`/edit-product/${product.id}`} className='bg-blue-500 text-white px-3 py-1 rounded'>Edit</Link>
                        <button className="bg-red-500 text-white text-center px-3 py-1 rounded" onClick={() => handleDelete(product.id)}>Delete</button>
                    </td>

                    </tr>

                ))
            )} 
            
            </tbody>
        </table>

    </div>
  );


}

export default Product
