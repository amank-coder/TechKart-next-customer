import { useState } from "react"
import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/models/Product"
export default function Search(){
    const [query, setQuery]= useState("")
    const onChange = (e)=>{
        setQuery(e?.target?.value)
    }

    return(
        <div className="bg-white h-full w-full z-20 fixed">
            <div className="mx-auto max-w-[800px]">
            <input type="text" placeholder="search for products..." className="p-4 px-8 w-full overflow-hidden text-gray-500 mt-4 border border-sky-700 rounded-lg" value={query}
                        onChange={onChange}/>
            <div>

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