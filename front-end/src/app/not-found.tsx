import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-3 text-black">
      <Image src={"/sleek.svg"} alt="sleek" width={200} height={200} />
      <div className="flex flex-col items-center ">
        <h2 className="text-6xl font-extrabold border-b p-2 border-slate-900 w-full text-center mb-2">
          404
        </h2>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Page Not Found</h1>
          <p>Could not find requested resource</p>
          <Link
            href="/"
            className="bg-slate-900 mt-4 px-4 py-2 rounded-lg text-white font-bold flex flex-row-reverse gap-2"
          >
            <ArrowUpRight />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
