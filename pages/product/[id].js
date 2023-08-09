import { mongooseConnect } from "@/lib/mongoose";
import Header from "../components/Header";
import { Product } from "@/models/Product";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Link from "next/link";
import Footer from "../components/Footer";

export default function ProductPage({product, related}){
    const {addProduct} = useContext(CartContext)

    return(
        <div className="bg-[#eee] h-full">
            <Header />
            <div className="max-w-[800px] mx-auto px-[30px] py-[30px] flex flex-col md:flex-row gap-12">
            <div className="bg-white p-4 rounded-lg w-[300px] h-[280px]">
                <img src={product.images[0]} alt='' className="px-auto py-auto" />
            </div>
            <div className="md:w-1/2">
            <h1 className="mb-4 text-2xl">{product.title}</h1>
            <p className="mb-8">{product.description}</p>
            <div className="flex items-center gap-8">
            <p className="font-semibold text-2xl">&#8377;{product.price}</p>
            <button className="bg-blue-600 px-[15px] py-[8px] rounded-md border flex items-center gap-1 text-white" onClick={()=>addProduct(product._id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
         </svg>

        <p>Add to cart</p>
        </button>
            </div>
            
            </div>
            
            </div>
            <div className="max-w-[800px] mx-auto mt-16 pb-8">
                <h1 className="text-3xl mb-8">Related Products</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {related.map(product=>(
                <div key={product._id} >
                    <Link href={'/product/'+product._id} className="bg-white p-[20px] h-[120px] text-center flex justify-center items-center box-content rounded-lg"><img src={product.images[0]} alt='' className="max-w-full max-h-[110px]"/></Link>
                    <div>
                    <Link href={'/product/'+product._id}>{product.title}</Link>
                    <div className="flex justify-between">
                    <div className="font-semibold">&#8377;{product.price}</div>
                    <button className="px-[15px] py-[2px] flex items-center rounded-md text-[#5542F6] text-sm border border-[#5542F6] hover:bg-[#5542F6] hover:text-white font-semibold" onClick={()=>addProduct(product._id)}>
                    Add to Cart
                    </button>
                    </div>
                    
                    </div>
                    
                    </div>
            ))}
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context){
    await mongooseConnect()
    const {id} = context.query
    const product= await Product.findById(id)
    const related= await Product.find({category:product.category})
    return{
        props:{
            product:JSON.parse(JSON.stringify(product)),
            related:JSON.parse(JSON.stringify(related)),
        }
    }
}