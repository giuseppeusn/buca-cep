import { Search } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center drop-shadow-xl">
      <p className="text-6xl lg:text-7xl font-bold uppercase w-full text-center">
        Busca
      </p>
      <div className="w-full -mt-3 flex">
        <p className="text-6xl lg:text-7xl font-bold ">CEP</p>
        <Search className="self-end w-full h-auto mt-3" />
      </div>
    </div>
  );
}
