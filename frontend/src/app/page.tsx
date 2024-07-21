"use client";

import AddressCard from "@/components/AddressCard";
import Logo from "@/components/Logo";
import { CepType } from "@/types/CepType";
import CepMask from "@/utils/cepMask";
import { cn } from "@/utils/cn";
import { useState } from "react";

const mock = {
  code: "zipcode",
  state: "state",
  city: "city",
  district: "district",
  address: "address",
};

export default function Home() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<CepType>();

  const [open, setOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div
        className={cn(
          open ? "-translate-y-16" : "translate-y-0",
          "flex flex-col justify-center items-center md:w-1/2 space-y-5 w-full px-7 md:px-0 transition-all duration-500"
        )}
      >
        <Logo />
        <div className="relative w-full h-14 md:w-1/2 justify-center items-center flex">
          <input
            type="text"
            value={cep}
            placeholder="Digite o CEP que deseja buscar..."
            className="text-gray-700 w-full h-14 p-3 outline-none rounded-lg text-lg transition-all ease-in-out duration-500 hover:cursor-pointer focus:cursor-text font-semibold absolute"
            onChange={(e) => setCep(CepMask(e.target.value))}
          />
          <button
            type="button"
            className="bg-gray-700 text-white px-3 py-2 m-2 outline-none rounded-lg text-lg transition-all ease-in-out duration-500 font-semibold absolute right-0 hover:bg-gray-600"
          >
            Buscar
          </button>
        </div>
      </div>
      <div
        className={cn(
          open ? "opacity-100 !translate-y-44 z-10" : "opacity-0",
          "w-1/3 translate-y-28 transition-all duration-500 absolute -z-20"
        )}
      >
        <AddressCard {...mock} />
      </div>
      <button
        type="button"
        className="bg-gray-700 text-white px-3 py-2 m-2 outline-none rounded-lg text-lg transition-all ease-in-out duration-500 font-semibold absolute right-0 hover:bg-gray-600"
        onClick={() => setOpen(!open)}
      >
        Teste
      </button>
    </main>
  );
}
