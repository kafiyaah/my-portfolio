import Link from "next/link";
export default function NavBar() {

return (
<nav className="bg-white text-[#000] sticky top-0 z-100 shadow-sm font-sans">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-20 items-center justify-between">
    <div className="text-l font-semibold tracking-tight">
            <Link href="/">Hey!, It's K! </Link>
          </div>
          <div className="flex space-x-6 text-base font-bold" > 
          {[
              { href: "/my-projects", label: "Projects" },
              { href: "/my-interests", label: "Interests" },
              { href: "/my-story", label: "My Story" },
              { href: "/get-in-touch", label: "Get in Touch" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative group transition-colors duration-300 hover:text-black"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-1 origin-center bg-green-900 transition-all duration-300 ease-in-out group-hover:w-full" />
              </Link>
            ))}
    </div>
    </div>
    </div>
    </nav>
)}

