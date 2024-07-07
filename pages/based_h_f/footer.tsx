import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <span className="text-lg font-semibold">JiSaNoAi Family</span>
        <span className="text-xs text-gray-600">
          &copy; 2024 JiSaNoAi. All rights reserved.
        </span>
        <nav>
          <ul className="flex space-x-4">
            {/* <li>
              <Link href="/opensource">
                <a className="text-gray-600 hover:text-gray-800">OpenSource</a>
              </Link>
            </li> */}
            <li className="text-sm">
              <Link href="/policy/policy">Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
