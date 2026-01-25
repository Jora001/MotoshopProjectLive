"use client";

import React from "react";

const WishlistPage = () => {
  return (
    <main className="w-full min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Ընտրված ապրանքներ
      </h1>

      {/* DESCRIPTION */}
      <p className="text-white/80 max-w-[700px] mb-12">
        Այստեղ ցուցադրվում են ձեր նախընտրած ապրանքները։
        Դուք կարող եք հետագայում արագ վերադառնալ և
        համեմատել կամ գնել դրանք։
        Այս պահին էջը թեստային է։
      </p>

      {/* EMPTY STATE */}
      <div className="border border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold mb-2">
          Wishlist-ը դատարկ է
        </h2>
        <p className="text-white/70 max-w-[400px]">
          Դուք դեռ չեք ավելացրել որևէ ապրանք ցանկում։
          Սեղմեք սրտիկի իկոնի վրա՝ ապրանք ավելացնելու համար։
        </p>
      </div>

      {/* MOCK ITEMS (հետագայում կհանես) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-white/20 rounded-lg p-5">
          <h3 className="font-semibold mb-2">Ապրանք 1</h3>
          <p className="text-white/60 text-sm">
            Ընտրված ապրանքի ինֆորմացիա։
          </p>
        </div>

        <div className="border border-white/20 rounded-lg p-5">
          <h3 className="font-semibold mb-2">Ապրանք 2</h3>
          <p className="text-white/60 text-sm">
            Նկար, գին, հիմնական տվյալներ։
          </p>
        </div>

        <div className="border border-white/20 rounded-lg p-5">
          <h3 className="font-semibold mb-2">Ապրանք 3</h3>
          <p className="text-white/60 text-sm">
            Wishlist-ում պահված ապրանք։
          </p>
        </div>
      </div>

    </main>
  );
};

export default WishlistPage;
