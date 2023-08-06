import { mongooseConnect } from "@/lib/mongoose";
import Header from "./components/Header";
import { Product } from "@/models/Product";
import Link from 'next/link'
import { useContext } from "react";
import { CartContext } from "./components/CartContext";

export default function ProductsPage({products}){
    const {addProduct} = useContext(CartContext)
    
    return(
        <div className="bg-[#eee] h-full">
            <Header />
            <div className="max-w-[800px] lg:max-w-[1000px] mx-auto px-[20px] py-[20px]">
            <h1>All Products</h1>
            <div className="max-w-[800px] lg:max-w-[1000px] mx-auto py-[20px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] ">
            {products.map(product=>(
                <div key={product._id}>
                    <Link href={'/product/'+product._id} className="bg-white p-[20px] h-[150px] text-center flex justify-center items-center box-content rounded-lg"><img src={product.images[0]} alt='' className="max-w-full max-h-[130px]"/></Link>
                    <div>
                    <Link href={'/product/'+product._id}>{product.title}</Link>
                    <div className="flex justify-between">
                    <div>&#8377;{product.price}</div>
                    <button className="px-[15px] py-[2px] flex items-center rounded-md text-[#5542F6] text-sm border border-[#5542F6] hover:bg-[#5542F6] hover:text-white font-semibold" onClick={()=>addProduct(product._id)}>
                    Add to Cart
                    </button>
                    </div>
                    
                    </div>
                    
                    </div>
            ))}
            </div>
            
        
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    await mongooseConnect()  
    const products= await Product.find()
      return{
        props:{products:JSON.parse(JSON.stringify(products)),
      }
  }
}