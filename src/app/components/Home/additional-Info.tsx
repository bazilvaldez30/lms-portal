import { additionalInfoData } from "@/app/shared/datas";
import React from "react";

export default function AdditionalInfo() {
  return (
    <section className="flex flex-wrap justify-center gap-6 bg-custom-1 py-4 md:gap-24">
      {additionalInfoData.map((item) => (
        <div
          key={item.title}
          className="flex w-full items-center justify-center gap-3 py-4 md:w-auto"
        >
          <div className="text-6xl text-white">{item.icon}</div>
          <div className="space-y-2">
            <p className="font-semibold text-white">{item.value}</p>
            <h3 className="text-sm font-semibold text-custom-2">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
}
