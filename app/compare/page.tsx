"use client";

import React from "react";

const ComparePage = () => {
  return (
    <main className="w-full min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Ապրանքների համեմատում
      </h1>

      {/* DESCRIPTION */}
      <p className="text-white/80 max-w-[700px] mb-12">
        Այս էջում դուք կկարողանաք համեմատել տարբեր ապրանքներ՝ ըստ
        գնի, բնութագրերի և այլ կարևոր պարամետրերի։
        Սա թեստային տեքստ է՝ էջի ճիշտ աշխատելու և
        նավիգացիայի ստուգման համար։
      </p>

      {/* MOCK BLOCK */}
      <div className="border border-white/20 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Համեմատման հատված (Mock)
        </h2>
        <p className="text-white/70">
          Այստեղ հետագայում կհայտնվեն ընտրված ապրանքների քարտերը։
        </p>
      </div>

      {/* PLACEHOLDER ROW */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 border border-white/20 rounded-lg p-5">
          <h3 className="font-semibold mb-2">Ապրանք 1</h3>
          <p className="text-white/60 text-sm">
            Գին, տեխնիկական տվյալներ, նկար և այլն։
          </p>
        </div>

        <div className="flex-1 border border-white/20 rounded-lg p-5">
          <h3 className="font-semibold mb-2">Ապրանք 2</h3>
          <p className="text-white/60 text-sm">
            Համեմատվող երկրորդ ապրանքի տվյալներ։
          </p>
        </div>

        <div className="flex-1 border border-white/20 rounded-lg p-5">
          <h3 className="font-semibold mb-2">Ապրանք 3</h3>
          <p className="text-white/60 text-sm">
            Երրորդ ապրանքի ինֆորմացիա։
          </p>
        </div>
      </div>

    </main>
  );
};

export default ComparePage;
