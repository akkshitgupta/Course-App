import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link
      href={"login"}
      className="duration-350 flex h-[17rem] w-[14rem] flex-col items-center gap-3 overflow-hidden rounded-lg border-2 p-4 shadow-md transition duration-500 ease-in-out hover:scale-105 hover:border-green-200"
    >
      <div className="relative flex w-full justify-center">
        <Image
          src={``}
          alt=""
          width={100}
          height={80}
          className="rounded-md border border-green-400 p-[1px] "
        />
      </div>
    </Link>
  );
}
