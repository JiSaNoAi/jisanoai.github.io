import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

export default function Header({ setCurrentPage }: HeaderProps) {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" onClick={() => setCurrentPage("main")}>
            <Image
              src="/images/logo/logo.png"
              width={50}
              height={50}
              alt="JiSaNoAi 로고"
              className="cursor-pointer"
            />
          </Link>
          <Link href="/" onClick={() => setCurrentPage("main")}>
          <span className="font-bold font-sans text-xl">JiSaNoAi</span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-600 items-center text-sm">
            <li>
              <Link href="/" onClick={() => setCurrentPage("main")}>
                <span className="font-bold">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setCurrentPage("about")}>
              <span className="font-bold">About</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setCurrentPage("apps")}>
              <span className="font-bold">Apps</span>
              </Link>
            </li>
            <li>
            {/* <Link href="/policy/policy"><span className="font-bold">Policy</span></Link> */}
            <Link href="/" onClick={() => setCurrentPage("policy")}>
              <span className="font-bold">Policy</span>
              </Link>
            </li>
            <li>
              <Link href="https://paypal.me/sidcodeme" target="_blank">
                <button className="bg-black text-white px-2 py-1 rounded hover:bg-gray-800 text-sm">
                  Help JiSaNoAi with money
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
