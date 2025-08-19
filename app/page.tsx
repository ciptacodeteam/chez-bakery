"use client"

import Image from "next/image";
import Link from "next/link";

import placeholder from "@/public/images/sample.jpg"
import momentOne from "@/public/images/moment-1.jpg"
import momentTwo from "@/public/images/moment-2.jpg"
import momentThree from "@/public/images/moment-3.jpg"
import momentFour from "@/public/images/moment-4.jpg"
import momentFive from "@/public/images/moment-5.jpg"
import footer from "@/public/images/footer.jpg"
import founder from "@/public/images/founder.jpeg"

import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-40 bg-[url(/images/hero-mobile.jpeg)] bg-cover">
        <div className="mt-32 w-11/12 mx-auto">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">Baked with Love, <br /> Served With Joy</h1>
            <p className="w-9/12 text-xs mt-2">From flaky pastry to decadent custom cakes - made fresh daily, just for you.</p>
          </div>

          <div className="text-xs mt-10">
            <Link href="" className="bg-amber-700 text-white px-4 py-2 rounded-full mr-3">View Menu</Link>
            <Link href="" className="border border-white px-4 py-2 rounded-full text-white">Place an Order</Link>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="w-11/12 mx-auto my-20">
        <div>
          <div className="">
            <h1 className="text-3xl">A Taste of Veluora</h1>
            <p className="mt-2 text-slate-600">Crafted in small batches. Always fresh. Always unforgettable.</p>
          </div>

          <Link href="" className="border border-amber-700 px-4 py-2 rounded-full text-amber-700 hidden">View Menu</Link>
        </div>

        <div className="my-10">
          <div className="relative bg-[url(/images/sample.jpg)] h-[300px] bg-cover bg-no-repeat rounded-xl">
            <div className="bg-black/20 w-full h-full rounded-xl">
              <div className="absolute bottom-5 left-5">
                <h1 className="font-semibold text-white text-2xl">ASDz</h1>
                <p className="w-3/4 text-white">Light, aromatic, and dusted with citrus glaze.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Cake */}
        <div className="my-10">
          <div className="relative bg-amber-100 h-[500px] rounded-xl">
            <div className="absolute top-5 right-5">
              <h1>CHEZ</h1>
            </div>

            <div className="absolute bottom-10 left-5">
              <h1 className="text-3xl font-semibold">Special Cakes for Special Moments</h1>
              <p className="mt-2">Whether it&apos;s a wedding, birthday, or just because - our custom cakes are made to match your moment. Gluten-free and vegan options available.</p>
            </div>
          </div>

          <div>
            <Image src={placeholder} height={500} width={400} alt="cake" className="rounded-xl hidden" />
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <Link href="" className="border border-amber-700 px-4 py-2 rounded-full text-amber-700">View full menu</Link>
        </div>
      </div>

      {/* Moments */}
      <div className="my-20 w-11/12 mx-auto">
        <div>
          <h1 className="text-3xl">Baked Beauty</h1>
          <p className="mt-2">A peek at our favourites from chez to customers.</p>
        </div>

        <div className="my-10">
          <Image src={momentOne} width={400} height={300} alt="moment" className="rounded-xl my-5"/>
          <Image src={momentTwo} width={400} height={300} alt="moment" className="rounded-xl my-5"/>
          <Image src={momentThree} width={400} height={300} alt="moment" className="rounded-xl my-5"/>
          <Image src={momentFour} width={400} height={300} alt="moment" className="rounded-xl my-5"/>
          <Image src={momentFive} width={400} height={300} alt="moment" className="rounded-xl my-5"/>
        </div>
      </div>

      {/* Meet the baker */}
      <div className="my-20 w-11/12 mx-auto">
        <div>
          <h1 className="text-3xl">Meet the Baker</h1>
          <p className="mt-2 text-sm mb-10">Veloura Bakes bagan in a tiny home kitchen with one mission: to make people smile through pastries. our foudner, Catherine Valencia Pho, believes baking is both science and soul - and every item here reflects that belief.</p>
          <Link href="" className="border border-amber-700 px-4 py-2 rounded-full text-amber-700">Learn more about us &rarr;</Link>
        </div>

        <Image src={founder} alt="founder" width={400} height={400} className="rounded-xl mt-14"/>
      </div>

      {/* Ready to Order */}
      <div className="my-20 w-11/12 mx-auto">
        <div className="bg-amber-100 rounded-xl px-4 py-10">
          <h1 className="mb-10">CHEZ</h1>
          <div>
            <h1 className="text-3xl">Ready to Order?</h1>
            <p className="mt-2 mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Link href="" className="bg-amber-700 px-4 py-3 rounded-full text-white">Order Now &rarr;</Link>
          </div>
        </div>
      </div>

      <footer className="my-20 w-11/12 mx-auto">
        <Image src={footer} alt="footer" width={400} height={400} className="rounded-xl" />

        <div className="bg-amber-100 py-10 px-5 my-5 rounded-xl">
          <h1 className="text-3xl mb-10">Visit or Reach Out</h1>
          <ul>
            <li className="flex items-center my-1"><MapPinIcon className="w-4 h-4 mr-2"/> Jl. Williem Iskandar No. 73, Medan</li>
            <li className="flex items-center my-1"><PhoneIcon className="w-4 h-4 mr-2"/> (+62) 8112345678</li>
            <li className="flex items-center my-1"><ClockIcon className="w-4 h-4 mr-2"/> Open Mon-Sun | 8 AM - 10 PM</li>
          </ul>
        </div>

        <div className="flex items-center bg-amber-100 px-5 py-5 rounded-xl">
          <h1 className="w-4/12">CHEZ</h1>
          
          <div className="w-10/12 text-right">
            <ul className="flex flex-wrap justify-end">
              <li className="ml-4">About</li>
              <li className="ml-4">About</li>
              <li className="ml-4">About</li>
              <li className="ml-4">About</li>
              <li className="ml-4">About</li>
            </ul>

            <p className="text-xs mt-2">Copyright &copy; 2025 CHEZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
