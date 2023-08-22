import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-50">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-green-100 md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-green-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Course App</span>
        </a>
        <p className="mt-4 text-sm text-green-200 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-green-200 sm:py-2 sm:pl-4">
          &copy; 2023 Course App
          <Link
            href="https://twitter.com/akkshitgupta"
            className="ml-1 text-green-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            @akkshitgupta
          </Link>
        </p>
        <span className="mt-4 inline-flex justify-center gap-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <Link href="https://www.github.com/akkshitgupta">
            <FaGithub className="h-6 w-6 text-green-200" />
          </Link>
          <Link href="https://www.twitter.com/akkshitgupta">
            <FaTwitter className="h-6 w-6 text-green-200" />
          </Link>
          <Link href="https://www.linkedin.com/in/akkshitgupta">
            <FaLinkedinIn className="h-6 w-6 text-green-200" />
          </Link>
        </span>
      </div>
    </footer>
  );
}
