import { useContext, useEffect, useState } from 'react'
import Header from './components/Header.js'
import { CartContext } from './components/CartContext.js'
import axios from 'axios'
import Link from 'next/dist/client/link.js'
export default function Cart(){
    
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext)
    const [products, setProducts] = useState([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(()=>{
        if(cartProducts.length>0){
            axios.post('/api/cart',{ids:cartProducts})
            .then(res=>setProducts(res.data))
        }
    },[cartProducts])

    useEffect(()=>{
        if(window?.location.href.includes('success')){
            setIsSuccess(true)
            clearCart()
        }
    },[])
    function increment(id){
        addProduct(id)
    }
    function decrement(id){
        removeProduct(id)

    }
    let total=0
    for(const productId of cartProducts){
        const price= products.find(p=>p._id===productId)?.price || 0
        total+=price
    }

    if(isSuccess){
        return(
            <div className='text-center w-full mt-8'>
                <h1 className='text-green-500 font-bold text-3xl'>Payment Successful !</h1>
                <h1 className='text-2xl'>Your order has been placed</h1>
                <Link href={'/'}>Go to Home</Link>
            </div>
        )
    }

    async function goToPayment(){
        const res= await axios.post('/api/checkout',{
            name, email, address, city, state, pincode,
            cartProducts
        })
        if(res.data.url){
            window.location=res.data.url
        }
    }

    

    return(
        <div className='bg-[#eee]'>
        <Header />
        <div className='max-w-[800px] mx-auto px-[20px]'>
            <div className='grid md:grid-cols-2 grid-rows-2 gap-[40px] pt-16'>
                <div className='bg-white rounded-md p-[30px]'>
                    {!products.length&&(
                        <div>Your Cart is empty</div>
                    )}
                    <h1 className='text-2xl font-bold'>Cart</h1>
                    {products.length>0 && (
                    <table className='w-full'>
                        <thead>
                            <tr className='text-left text-sm text-[#aaa] uppercase border-b'>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>

                        </thead>
                        <tbody>
                        {products.map(product=>(
                                <tr key={product._id} className='border-b'>
                                
                                <td className='pb-4 pt-2'>
                                <img src={product.images[0]} alt='' className='h-12'/>
                                {product.title}
                                </td>
                                <td className='pb-8'>
                                <button className='mr-2 bg-gray-200 rounded-md px-1.5' onClick={()=>decrement(product._id)}>-</button>
                                {cartProducts.filter(id=>id===product._id)?.length}
                                <button className='ml-2 bg-gray-200 rounded-md px-1' onClick={()=>increment(product._id)}>+</button>
                                </td>
                                <td className='pb-8'>&#8377;{cartProducts.filter(id=>id===product._id)?.length*product.price}</td>
                                </tr>
                            ))

                            }
                            <tr>
                                <td></td>
                                <td></td>
                                <td>&#8377;{total}</td>
                            </tr>
                        </tbody>
                    </table>
                    )    

                    }
                    
                </div>
                {!!cartProducts.length&&(
                    <div className='bg-white rounded-md p-[30px]'>
                    <h1 className='text-2xl font-bold mb-8'>Order Confirmation</h1>
                    <input type='text' placeholder='Name' name='name' value={name} onChange={e=>setName(e.target.value)} className='border border-black rounded-md px-2 mb-4 w-full'/>
                    <input type='text' placeholder='Email' name='email' value={email} onChange={e=>setEmail(e.target.value)} className='border border-black rounded-md px-2 mb-4 w-full'/>
                    <input type='text' placeholder='Address' name='address' value={address} onChange={e=>setAddress(e.target.value)} className='border border-black rounded-md px-2 mb-4 w-full'/>
                    <div className='flex w-full gap-2 mb-4'>
                    <input type='text' placeholder='City' name='city' value={city} onChange={e=>setCity(e.target.value)} className='border border-black rounded-md px-2 w-1/2'/>
                    <input type='text' placeholder='State' name='state' value={state} onChange={e=>setState(e.target.value)} className='border border-black rounded-md px-2 w-1/2'/>    
                    </div>
                    
                    <input type='text' placeholder='Pincode' name='pincode' value={pincode} onChange={e=>setPincode(e.target.value)} className='border border-black rounded-md px-2 mb-4 w-full'/>
                    <button onClick={goToPayment} className="bg-black px-[20px] py-2 rounded-md text-white w-full">Continue to Payment</button>
                    
                </div>        
                        )}
                
            </div>
        </div>
        </div>
    )
}