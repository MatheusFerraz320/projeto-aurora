// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-red-200 text-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Nome fictício do projeto */}
        <h1 className="text-xl font-bold tracking-wide">
          Projeto Aurora
        </h1>

        {/* Links */}
        <ul className="flex space-x-6 font-medium">
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
    </nav>
  )
}