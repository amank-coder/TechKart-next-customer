import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function Featured({product}){  
    const {addProduct} = useContext(CartContext)
    function addFeaturedToCart(){
        addProduct(product?._id)
    }
    
    return(

        <div>
            <div className="parallax h-[700px] bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-51-laptop-promotion-banner-background-image_191785.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
            <div className="text-white text-8xl tracking-widest font-bold mx-16 md:mx-48  pt-24">SALE</div>
            <h1 className="text-white text-2xl mx-16 md:mx-48 mt-12">Acer Inspiron 5173</h1>
            <p className="text-white mx-16 md:mx-48">Starting from 8,799</p>
             <div className="flex gap-4 pt-[60px] mx-16 md:mx-48 text-white">

         <button className="px-[15px] py-[4px] border border-white">Read more</button>
        <button className="bg-[#0a0723] px-[15px] py-[5px]rounded-md border flex items-center gap-1" onClick={addFeaturedToCart}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
         </svg>

        <p>Add to cart</p>
        </button>
        </div>
        </div>
        </div>
    )
}