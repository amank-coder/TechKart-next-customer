import { mongooseConnect } from "@/lib/mongoose";
import Header from "../components/Header";
import { Product } from "@/models/Product";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function ProductPage({product}){
    const {addProduct} = useContext(CartContext)

    return(
        <div className="bg-[#eee] h-screen">
            <Header />
            <div className="max-w-[800px] mx-auto px-[20px] py-[20px] flex flex-col md:flex-row gap-12">
            <div className="bg-white p-4 rounded-lg">
                <img src={product.images[0]} alt='' />
            </div>
            <div>
            <h1 className="mb-4">{product.title}</h1>
            <p className="mb-8">{product.description}</p>
            <div className="flex items-center gap-8">
            <p>&#8377;{product.price}</p>
            <button className="bg-blue-600 px-[15px] py-[8px] rounded-md border flex items-center gap-1 text-white" onClick={()=>addProduct(product._id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
         </svg>

        <p>Add to cart</p>
        </button>
            </div>
            
            </div>
            
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    await mongooseConnect()
    const {id} = context.query
    const product= await Product.findById(id)
    return{
        props:{
            product:JSON.parse(JSON.stringify(product)),
        }
    }
}