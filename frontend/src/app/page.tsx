"use client";

import AddressCard from "@/components/AddressCard";
import Logo from "@/components/Logo";
import getAddress from "@/hooks/getAddress";
import { CepType } from "@/types/CepType";
import CepMask from "@/utils/cepMask";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<CepType | undefined>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function validateCep(cep: string) {
    const sanitizedCep = cep.replace(/\D/g, "");
    if (sanitizedCep.length < 8) {
      toast.error("CEP deve ter 8 dígitos");
      return false;
    }

    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (validateCep(cep)) {
      const toastId = toast.loading("Buscando CEP...");

      const { response, error } = await getAddress(cep);

      if (error) {
        toast.update(toastId, {
          render: error,
          type: "error",
          isLoading: false,
          hideProgressBar: true,
          autoClose: 3000,
        });

        setOpen(false);
        setData(undefined);
      } else if (response) {
        toast.update(toastId, {
          render: response.message,
          type: "success",
          isLoading: false,
          hideProgressBar: true,
          autoClose: 3000,
        });

        setData(response.result);
        setOpen(true);
      }
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div
        className={cn(
          open ? "-translate-y-16" : "translate-y-0",
          "flex flex-col justify-center items-center sm:w-1/2 md:w-1/3 space-y-5 w-full px-7 lg:px-0 transition-all duration-500"
        )}
      >
        <Logo />
        <form
          className="relative h-14 w-full justify-center items-center flex"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            value={cep}
            placeholder="Digite o CEP que deseja buscar..."
            className="text-gray-700 w-full h-14 p-3 outline-none rounded-lg text-md lg:text-lg transition-all ease-in-out duration-500 font-semibold absolute"
            onChange={(e) => {
              setCep(CepMask(e.target.value));
              open && setOpen(false);
            }}
            onFocus={() => setOpen(false)}
            onBlur={() => data && setOpen(true)}
            autoComplete="off"
            role="presentation"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-3 py-2 m-2 outline-none rounded-lg text-md lg:text-lg transition-all ease-in-out duration-500 font-semibold absolute right-0 hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-500"
            disabled={!cep || loading}
          >
            Buscar
          </button>
        </form>
      </div>
      <div
        className={cn(
          open ? "opacity-100 !translate-y-44 z-10" : "opacity-0",
          "w-full md:w-1/2 translate-y-28 transition-all duration-500 absolute -z-20 px-3 lg:px-0"
        )}
      >
        <AddressCard data={data} />
      </div>
    </main>
  );
}
