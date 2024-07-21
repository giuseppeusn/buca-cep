"use client";

import { CepType } from "@/types/CepType";
import { cn } from "@/utils/cn";
import React from "react";

export default function AddressCard({
  code,
  address,
  district,
  city,
  state,
}: CepType) {
  return (
    <div className="mt-12 shadow-sm border border-gray-900 rounded-lg overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-900">
          <tr>
            <th className="py-3 px-6">Endereço</th>
            <th className="py-3 px-6">Bairro</th>
            <th className="py-3 px-6">Cidade/UF</th>
            <th className="py-3 px-6">CEP</th>
          </tr>
        </thead>
        <tbody className="text-center bg-gray-700">
          <tr>
            <td className="py-3 px-6">{address}</td>
            <td className="py-3 px-6">{district}</td>
            <td className="py-3 px-6">
              {city}/{state}
            </td>
            <td className="py-3 px-6">{code}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
