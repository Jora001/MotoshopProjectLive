/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Yamaha MT-09",
    price: "12,750 $",
    image: "/bikes/mt09.png",
    brand: "Yamaha",
    engine: "889 cc",
    power: "119 HP",
    weight: "189 kg",
    speed: "240 km/h",
    country: "Japan",
  },
  {
    id: 2,
    name: "KTM 890 Duke R",
    price: "13,200 $",
    image: "/bikes/ktm890.png",
    brand: "KTM",
    engine: "889 cc",
    power: "121 HP",
    weight: "188 kg",
    speed: "245 km/h",
    country: "Austria",
  },
  {
    id: 3,
    name: "Suzuki GSX-S1000",
    price: "11,900 $",
    image: "/bikes/gsxs1000.png",
    brand: "Suzuki",
    engine: "999 cc",
    power: "152 HP",
    weight: "214 kg",
    speed: "250 km/h",
    country: "Japan",
  },
  {
    id: 4,
    name: "Honda CBR650R",
    price: "10,400 $",
    image: "/bikes/cbr650r.png",
    brand: "Honda",
    engine: "649 cc",
    power: "95 HP",
    weight: "208 kg",
    speed: "230 km/h",
    country: "Japan",
  },
];

const specs = [
  { label: "Բրենդ", key: "brand" },
  { label: "Շարժիչ", key: "engine" },
  { label: "Հզորություն", key: "power" },
  { label: "Քաշ", key: "weight" },
  { label: "Առավելագույն արագություն", key: "speed" },
  { label: "Արտադրող երկիր", key: "country" },
];

export default function ComparePage() {
  const [products, setProducts] = useState(initialProducts);

  const emptySlots = [1, 2, 3, 4];

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const columns = `220px repeat(${products.length || 4}, 260px)`;

  return (
    <main className="bg-black text-white min-h-screen pt-[100px]">

      {/* HERO */}
      <section className="relative h-[280px]">
        <Image
          src="/Images/bec.jpg"
          alt="Compare Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-10 left-16 text-3xl font-bold">
          Համեմատություն
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="relative mt-[30px] flex justify-center px-6">
        <div className="overflow-x-auto w-full flex justify-center">
          <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div
              className="grid border-b"
              style={{ gridTemplateColumns: columns }}
            >
              <div className="border-r bg-white" />

              {products.length === 0
                ? emptySlots.map((slot) => (
                    <div
                      key={slot}
                      className="border-r last:border-r-0 flex flex-col items-center p-6"
                    >
                      {/* IMAGE PLACEHOLDER */}
                      <div className="h-[160px] flex flex-col items-center justify-center w-full">
                        <span className="text-gray-400 text-sm">
                          No Image
                        </span>
                      </div>

                      {/* DIVIDER LINE */}
                      <div className="w-full  mt-4 mb-3" />

                      {/* SELECT */}
                      <select >
                        <option>Ընտրել մոտոցիկլետ</option>
                      </select>
                    </div>
                  ))
                : products.map((product) => (
                    <div
                      key={product.id}
                      className="relative "
                    >
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="absolute top-3 right-3 z-10 text-gray-400 hover:text-black"
                      >
                        <X size={18} />
                      </button>

                      <div className="relative h-[160px]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>

                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-sm">
                          {product.name}
                        </h3>

                        <p className="text-sm text-blue-600 mt-1">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>

            {/* SPECS */}
            {specs.map((spec, i) => (
              <div
                key={i}
                className="grid"
                style={{ gridTemplateColumns: columns }}
              >
                <div className="border-r px-4 py-3 font-medium text-sm bg-gray-50">
                  {spec.label}
                </div>

                {(products.length === 0 ? emptySlots : products).map(
                  (product: any, index: number) => (
                    <div
                      key={index}
                      className="border-r last:border-r-0 px-4 py-3 text-sm"
                    >
                      {products.length === 0
                        ? ""
                        : product[spec.key as keyof typeof product]}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}