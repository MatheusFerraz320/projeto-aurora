export default function Contato() {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-red-600 mb-4 hover:scale-105 
      transition-transform duration-300 ease-in-out animate-slideIn">
        Contatos
      </h2>
      <p className="text-gray-700 mb-6 animate-fadeIn">
        Envie sua mensagem ou dúvida. Este formulário é apenas ilustrativo para fins acadêmicos.
      </p>
      <form className="flex flex-col space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Nome"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          placeholder="Mensagem"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
        <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Enviar
        </button>
      </form>
    </section>
  )
}