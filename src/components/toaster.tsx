"use client";

import { toasterStore } from "../stores/toasterStore";
import { primary, secondary } from "../styles/fonts";

export default function Toaster() {
  const title = toasterStore((state: any) => state.title);
  const message = toasterStore((state: any) => state.message);
  const showToaster = toasterStore((state: any) => state.showToaster);
  const error = toasterStore((state: any) => state.error);

  return (
    <div className={`border transition-all border-gray-400 bottom-4 min-w-72 max-w-md w-full fixed z-50 h-fit rounded-lg flex flex-col ${showToaster ? 'right-4 opacity-100' : '-right-1/2 opacity-0'}`}>
      <div className={`flex p-4 w-full ${error ? 'bg-red-950' : 'bg-green-950'} rounded-t-lg`}>
        <p className={`${secondary.className} m-0 font-bold text-white`}>{title}</p>
      </div>
      <div className="w-full border border-gray-400"></div>
      <div className="p-4 w-full bg-secondary rounded-b-lg">
        <p className={`${primary.className} m-0 font-light text-white`}>{message}</p>
      </div>
    </div>
  );
}
