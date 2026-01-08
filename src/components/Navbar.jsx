import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-red-200 text-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
   
        <h1 className="text-lg sm:text-xl font-bold tracking-wide">
          Projeto Aurora
        </h1>

      
        <button
          className="sm:hidden text-gray-900 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        
        <ul className="hidden sm:flex space-x-4 md:space-x-6 font-medium">
          <li>
            <a href="/" className="hover:text-red-600 transition-colors">Home</a>
          </li>
          <li>
            <a href="/informacoes" className="hover:text-red-600 transition-colors">Informações</a>
          </li>
          <li>
            <a href="/recursos" className="hover:text-red-600 transition-colors">Recursos</a>
          </li>
        </ul>
      </div>

   
      {open && (
        <div className="sm:hidden bg-red-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-3 font-medium">
            <li>
              <a href="/" className="hover:text-red-600 transition-colors">Home</a>
            </li>
            <li>
              <a href="/informacoes" className="hover:text-red-600 transition-colors">Informações</a>
            </li>
            <li>
              <a href="/recursos" className="hover:text-red-600 transition-colors">Recursos</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}