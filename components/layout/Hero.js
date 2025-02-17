import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-8">
      <h1 className="text-4xl font-semibold">Everything <br /> is better <br/> with a &nbsp; <span className="text-primary">Pizza</span></h1>
      <p className="my-4 text-gray-500 text-sm">Pizza is the missing piece</p>
      <div className="flex gap-4 text-sm">
        <button className="flex gap-2 items-center bg-primary uppercase text-white px-8 py-2 rounded-full">
            Order Now
            <Right />
            </button>
        <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More
            <Right />
            </button>
      </div>
      </div>
      <div className="relative">
        <Image src={"/pizza.png"} layout="fill" objectFit="contain" alt={""} />
      </div>
    </section>
  );
}
