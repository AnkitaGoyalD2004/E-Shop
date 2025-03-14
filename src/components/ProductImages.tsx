"use client"

import Image from "next/image"
import { useState } from "react"
const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/31057549/pexels-photo-31057549/free-photo-of-modern-kitchen-with-stainless-steel-appliances.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
]

const ProductImages = () => {

    const [index , setIndex] = useState(0)
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src={images[index].url}
                    alt="" fill sizes="50vw" className="object-cover rounded-md" />
            </div>

            <div className="flex justify-between gap-4 mt-8">
                {images.map((img , i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=> setIndex(i)}>
                <Image src={img.url}
                    alt="" fill sizes="30vw" className="object-cover rounded-md" />
            </div>
                ))}
            
            </div>
        </div>
    )
}

export default ProductImages