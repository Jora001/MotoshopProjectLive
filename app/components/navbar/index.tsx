// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { NAV_LINKS } from "@/constants/navlinks";
// import Image from "next/image";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   if (!mounted) return null;

//   return (
//     <header className="bg-white dark:bg-red-900 shadow-md fixed w-full z-50">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-600 dark:text-orange-400">
//           <Image
//             src="/logo.png"
//             alt="moto logo"
//             width={60}
//             height={0}
//             style={{ height: "auto" }}
//             priority
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-8">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Right Side */}
//         <div className="hidden md:flex items-center space-x-4">
//           {/* Theme Toggle */}
//           <button
//             aria-label="Toggle theme"
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//           >
//             {theme === "light" ? (
//               <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
//             ) : (
//               <Sun className="w-5 h-5 text-yellow-400" />
//             )}
//           </button>

//           {/* Login Button */}
//           <button
//             onClick={() => setShowLoginModal(true)}
//             className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
//           >
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             aria-label="Toggle mobile menu"
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400"
//           >
//             {isOpen ? (
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-red-900 shadow-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-800"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <button
//               onClick={() => {
//                 setShowLoginModal(true);
//                 setIsOpen(false);
//               }}
//               className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-800"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Login Modal */}
//       {showLoginModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-sm w-full relative">
//             <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Login</h2>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
//             />
//             <button className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white py-2 rounded-lg">
//               Sign In
//             </button>
//             <button
//               onClick={() => setShowLoginModal(false)}
//               className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
