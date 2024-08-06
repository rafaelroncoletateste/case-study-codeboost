import Image from "next/image";
import IconSeach from "@/assets/icon-search.svg";

export function Search() {
  return (
    <div className="flex items-center gap-4">
      <Image src={IconSeach} alt="Search" />
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent outline-none text-white pr-5 placeholder:text-white"
      />
    </div>
  );
}
