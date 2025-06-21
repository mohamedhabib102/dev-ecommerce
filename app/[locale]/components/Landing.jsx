"use client";
import Image from "next/image"
import Link from "next/link";


export default function Landing() {
    const categories = [
        {   id: 1,
            title: "Lips",
            image: "/lips.svg",
        },
        {   id: 2,
            title: "Eye",
            image: "/eyeC.svg",
        },
        {   id: 3,
            title: "Face",
            image: "/face.svg",
        },
        {   id: 4,
            title: "Body",
            image: "/body.svg",
        },
        {   id: 5,
            title: "Perfume",
            image: "/perfume.svg",
        }
    ]
  return (
    <section className="landing">
        <Image
        src={"/landing.svg"}
        width={1920}
        height={1080}
        alt="Landing Image"
        className="w-full h-[541px] min-[1440px]:h-full object-cover max-[475px]:h-[315px]"
        />
        <div className="py-20">
        <div className="custom__container">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-[#393939] font-semibold text-3xl max-[475px]:text-2xl">Top Categories</h3>
              <Link href="/products" className="block border-[#868686] border-b-[1px] w-fit ml-auto text-[15px] font-bold text-[#868686]">Shop all products</Link>
            </div>
            <div className="overflow-auto"
            style={{
               scrollbarWidth: "none", 
               msOverflowStyle: "none", 
             }}
            >
            <style jsx>{`
               .grid::-webkit-scrollbar {
                 display: none;
               }
             `}</style>
            <div
             className="grid grid-cols-5 gap-4 p-4"
             style={{
                width: "100%",
               minWidth: "800px",
             }}>
             {categories.map((ele, id) => {
               return (
                   <div key={id} className="category">
                       <Image
                           src={ele.image}
                           width={120}
                           height={120}
                           alt={ele.title}
                           className="w-24 h-24 object-cover m-auto"
                       />
                       <h3 className="text-center text-lg font-semibold text-[#393939]">{ele.title}</h3>
                   </div>
               );
           })}
           </div>
            </div>
        </div>
        </div>
    </section>
  );
}