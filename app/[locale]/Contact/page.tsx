import Image from "next/image";
import Link from "next/link";



export default function Contact() {
    return (
        <div className="custom__container">
      <div className='flex items-center gap-2 mb-8 text-[#393939] lg:text-lg mr-auto md:pl-9 text-sm'>
        <Link  href={"/"} className='text-[#868686]'>Home</Link>
        <Image
        src={"/arrow-right.svg"}
        alt="Arrow Right"
        width={24}
        height={24}
        />
      <div className='font-semibold'>Contact Us</div>
      </div>
        </div>
    )
}