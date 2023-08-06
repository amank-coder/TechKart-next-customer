export default function Footer(){
    return(
        <div className="bg-[#222] text-[#aaa] text-sm md:text-base">
            <div className="py-[50px] px-[20px] max-w-[1000px] mx-auto flex justify-between gap-4">
                <div className="max-w-[300px]">
                    <div className="mb-4 text-white">About</div>
                    <div className="text">
                    TechKart is a leading e-commerce platform offering high-quality electronic products and gadgets at competitive prices, with 
                    a focus on excellent customer service and staying at the forefront of technology trends.
                    </div>
                </div>
                <div className="max-w-[300px] flex flex-col gap-2">
                    <div className="mb-4 text-white">Categories</div>
                    <span className="text text-t" >Mobile phones</span>
                    <span className="text text-t" >Laptops</span>
                    <span className="text text-t" >LED TVs</span>

                </div>
                <div className="max-w-[300px]">
                    <div className="text-white mb-4">Contact</div>
                    <div className="flex mb-[10px]">
                        <div className="text">
                        TechKart Private Limited,
                        UFO Business Center, Patliputra
                        Patna, 800013,
                        Bihar, India
                        </div>
                    </div>
                    <div className="c-item">
                        <div className="text">
                            <a href="tel:766-732-0067">Mobile: 766 732 0067</a>
                        </div>
                    </div>
                    <div className="c-item">
                        <div className="text">
                            <a href="mailto:techwizard@gmail.com">Email: techwizard@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}