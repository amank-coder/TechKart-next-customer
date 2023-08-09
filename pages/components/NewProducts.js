import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function NewProducts({products}){
    const {addProduct} = useContext(CartContext)
    return(
        <div className="bg-[#eee] h-full pb-16">
        <div className="max-w-[800px] lg:max-w-[1000px] mx-auto px-[20px] py-[20px] font-bold text-2xl pt-8">
            <h1>Categories</h1>
            <div className="flex flex-wrap justify-between gap-4 md:gap-0 mt-4">
                <Link href={'/category/'+'mobile'} className="bg-[url('https://media.istockphoto.com/id/1193842936/photo/mobile-communication-concept-global-communication-network.webp?b=1&s=170667a&w=0&k=20&c=oHUUjJBFUM47PBu24btnPFkPiZUd1Cs2jG_2mV4oGds=')] bg-cover p-[20px] rounded-md h-[140px] w-full md:w-[220px] cursor-pointer">
                    <h1 className="text-center text-white">Mobile Phones</h1>
                </Link>
                <Link href={'/category/'+'laptop'} className="bg-[url('https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover p-[20px] rounded-md h-[140px] w-full md:w-[220px] cursor-pointer">
                    <h1 className="text-center text-white">Laptops</h1>
                </Link>
                <Link href={'/category/'+'tv'} className="bg-[url('https://www.popsci.com/uploads/2021/03/24/LED_TV_Lights_with_Microphone_and_Camera.jpg?auto=webp')] bg-cover p-[20px] rounded-md h-[140px] w-full md:w-[220px] cursor-pointer">
                    <h1 className="text-center text-white">LED TVs</h1>
                </Link>
            </div>
        </div>
        <h1 className="max-w-[800px] lg:max-w-[1000px] mx-auto px-[20px] font-bold text-2xl pt-8">New Arrivals</h1>

        <div className="max-w-[800px] lg:max-w-[1000px] mx-auto px-[20px] py-[20px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] ">
                {products.length>0 && products.map(product=>(
                    
                    <div key={product._id}>
                    <Link href={'/product/'+product._id} className="bg-white p-[20px] h-[150px] text-center flex justify-center items-center box-content rounded-lg"><img src={product.images[0]} alt='' className="max-w-full max-h-[130px] hover:scale-125"/></Link>
                    <div>
                    <Link href={'/product/'+product._id}>{product.title}</Link>
                    <div className="md:flex justify-between items-center">
                    <div className="font-semibold">&#8377;{product.price}</div>
                    <button className="px-4 py-2 rounded-md text-[#5542F6] text-sm border border-[#5542F6] hover:bg-[#5542F6] hover:text-white font-semibold w-full md:w-auto" onClick={()=>addProduct(product._id)}>
                    Add to Cart
                    </button>
                    </div>
                    
                    </div>
                    
                    </div>
                    
                ))}
      
        </div>
        </div>
    )
}