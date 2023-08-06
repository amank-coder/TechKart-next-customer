import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewProducts from './components/NewProducts'
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ product, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={product}/>
      <NewProducts products={newProducts}/>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(){
  await mongooseConnect()  
  const product=await Product.findById('64cf30b91ec015d4c5b12875')
  const newProducts= await Product.find({},null,{sort:{'_id':-1},limit:8})
    return{
      props:{product:JSON.parse(JSON.stringify(product)),
        newProducts:JSON.parse(JSON.stringify(newProducts))}
    }
}

