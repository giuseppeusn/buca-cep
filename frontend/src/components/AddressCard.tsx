"use client";

import { CepType } from "@/types/CepType";
import { ClipboardCheck } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

export default function AddressCard({ data }: { data: CepType | undefined }) {
  function handleCopy() {
    const formattedCopy = `${data?.address}, ${data?.district} - ${data?.city}/${data?.state} - ${data?.code}`;

    navigator.clipboard.writeText(formattedCopy);

    toast.success("Endereço copiado!", {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }

  return (
    <>
      {data && (
        <div className="p-4 mt-12 shadow-sm rounded-lg border border-gray-900 bg-gray-900 relative grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center col-span-2">
            <p className="font-bold">Endereço</p>
            <p className="col-span-2 text-white py-1 text-center">
              {data.address}
            </p>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <p className="font-bold">Bairro</p>
            <p className="col-span-2 text-white py-1 text-center">
              {data.district}
            </p>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <p className="font-bold">CEP</p>
            <p className="col-span-2 text-white py-1 text-center">
              {data.code}
            </p>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <p className="font-bold">Cidade</p>
            <p className="col-span-2 text-white py-1 text-center">
              {data.city}
            </p>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <p className="font-bold">Estado</p>
            <p className="col-span-2 text-white py-1 text-center">
              {data.state}
            </p>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <p className="font-bold">Copiar</p>
            <button
              className="flex flex-col items-center text-white font-bold p-1 bg-gray-700 hover:bg-gray-600 rounded justify-center col-span-2 my-1"
              onClick={handleCopy}
              type="button"
            >
              <ClipboardCheck className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
