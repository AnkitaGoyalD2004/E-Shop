import Image from "next/image"
import Link from "next/link"
const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/31048228/pexels-photo-31048228/free-photo-of-close-up-of-blooming-white-apple-blossoms.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/31047848/pexels-photo-31047848/free-photo-of-traditional-gassho-zukuri-house-in-shirakawa-go-japan.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/31108568/pexels-photo-31108568/free-photo-of-charming-historic-street-with-classic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/31098341/pexels-photo-31098341/free-photo-of-elegant-breakfast-with-cappuccino-and-croissants.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/29311799/pexels-photo-29311799/free-photo-of-coffee-cup-on-walnut-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/15833249/pexels-photo-15833249/free-photo-of-yellow-van-parked-in-front-of-green-forested-hills-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/27372369/pexels-photo-27372369/free-photo-of-a-person-holding-a-butterfly-on-their-finger.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/26743790/pexels-photo-26743790/free-photo-of-flowers-on-hill-in-park.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/29311799/pexels-photo-29311799/free-photo-of-coffee-cup-on-walnut-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
                alt="" 
                fill sizes="20vw" className="object-cover" />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList