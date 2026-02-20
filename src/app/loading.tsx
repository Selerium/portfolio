import { primary } from "../styles/fonts";

export default function Loading() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className="bg-black w-dvw h-dvh flex justify-center items-center">
      <div className="loaderParent w-32 h-32 flex justify-start items-start rounded-full border border-primary relative">
        <img
          src={`${basePath}/custom-cursor.png`}
          className="rotate-90 w-1/3 h-1/3 object-cover object-left"
          alt="Loading"
        />
        <div className="absolute flex justify-center items-center w-full h-full">
          <h1
            className={`loaderChild text-3xl ${primary.className} tracking-tight pr-0.5 pb-0.5 text-center font-semibold`}
          >
            adi
          </h1>
        </div>
      </div>
    </div>
  );
}
