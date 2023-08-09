import { mongooseConnect } from "@/lib/mongoose";
import Header from "../components/Header";
import { Product } from "@/models/Product";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Link from "next/link";
import Footer from "../components/Footer";



export default function CategoryPage({product, category}){
    const {addProduct} = useContext(CartContext)

    return(
        <div className="bg-[#eee] h-full">
            <Header />
            
            <div className="max-w-[800px] mx-auto mt-12 pb-16">
                <h1 className="text-3xl mb-8">{category}</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {product.map(p=>(
                <div key={p._id} >
                    <Link href={'/product/'+p._id} className="bg-white p-[20px] h-[120px] text-center flex justify-center items-center box-content rounded-lg"><img src={p.images[0]} alt='' className="max-w-full max-h-[110px]"/></Link>
                    <div>
                    <Link href={'/product/'+p._id}>{p.title}</Link>
                    <div className="flex justify-between">
                    <div className="font-semibold">&#8377;{p.price}</div>
                    <button className="px-[15px] py-[2px] flex items-center rounded-md text-[#5542F6] text-sm border border-[#5542F6] hover:bg-[#5542F6] hover:text-white font-semibold" onClick={()=>addProduct(p._id)}>
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
    const {cat} = context.query
    const product= await Product.find({category:cat})
    return{
        props:{
            product:JSON.parse(JSON.stringify(product)),
            category: cat
        }
    }
}