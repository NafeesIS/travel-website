import React from "react";
import pic1 from "../../public/photo-1.avif";
import pic2 from "../../public/photo-2.avif";
import pic3 from "../../public/photo-3.avif";
import pic4 from "../../public/photo-4.avif";
import pic5 from "../../public/photo-5.avif";
import Image from "next/image";
const Plan = () => {
  return (
    <div className="max-w-[1400x] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <Image
          className="object-cover w-full h-full p-2 row-span-3"
          src={pic1}
          alt="photo-1"
        />
        <Image
          className="object-cover w-full h-full p-2 row-span-2"
          src={pic2}
          alt="photo-2"
        />
        <Image
          className="object-cover w-full h-full p-2 row-span-2"
          src={pic3}
          alt="photo-3"
        />
        <Image
          className="object-cover w-full h-full p-2 row-span-3"
          src={pic4}
          alt="photo-4"
        />
        <Image
          className="object-cover w-full h-full p-2 row-span-2"
          src={pic5}
          alt="photo-5"
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your next trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          voluptatibus nam facere ea, minima nobis et doloremque ducimus eos
          sit.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          perferendis, culpa suscipit laudantium unde in autem? Inventore,
          facere numquam sed ratione obcaecati quis ad quia harum. Nobis hic
          odio quas.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-lg">
            Learn More
          </button>
          <button className="bg-black border-black text-white hover:shadow-lg">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
