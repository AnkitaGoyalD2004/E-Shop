import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return (
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
            <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/31098330/pexels-photo-31098330/free-photo-of-cozy-cup-of-coffee-with-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 tramsition-opacity easy duration-500 "
            />
            <Image src="https://images.pexels.com/photos/29311799/pexels-photo-29311799/free-photo-of-coffee-cup-on-walnut-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill 
            sizes="25vw"
            />
            </div>

            <div className="flex justify-between ">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My Description</div>
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>

            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
            <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/31096961/pexels-photo-31096961/free-photo-of-serene-snowy-forest-path-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 tramsition-opacity easy duration-500 "
            />
            <Image src="https://images.pexels.com/photos/31093867/pexels-photo-31093867/free-photo-of-aerial-view-of-calm-blue-ocean-coastline.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill 
            sizes="25vw"
            />
            </div>

            <div className="flex justify-between ">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My Description</div>
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>

            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
            <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/31100469/pexels-photo-31100469/free-photo-of-scenic-cityscape-reflection-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 tramsition-opacity easy duration-500 "
            />
            <Image src="https://images.pexels.com/photos/29311799/pexels-photo-29311799/free-photo-of-coffee-cup-on-walnut-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill 
            sizes="25vw"
            />
            </div>

            <div className="flex justify-between ">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My Description</div>
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>

            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
            <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/29704087/pexels-photo-29704087/free-photo-of-artistic-desk-setup-with-sketches-and-coffee.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 tramsition-opacity easy duration-500 "
            />
            <Image src="https://images.pexels.com/photos/29311799/pexels-photo-29311799/free-photo-of-coffee-cup-on-walnut-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill 
            sizes="25vw"
            />
            </div>

            <div className="flex justify-between ">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My Description</div>
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList;