import Link from "next/link";
import Logged from "./Logged";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-green-100">
      <div className="container mx-auto flex items-center justify-between px-5">
        <Link href={"/"} className="flex items-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-8 w-8 rounded-full bg-green-500 p-2 text-white md:h-10 md:w-10"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Course App</span>
        </Link>

        <Logged />
      </div>
    </nav>
  );
};

export default Navbar;
