export default function Informacoes() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/sinalVermelho.jpg')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-12 py-24 sm:py-32 text-white">
        {/* Título principal */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-12 leading-tight animate-slideIn">
          Informações sobre Violência Doméstica
        </h1>

        {/* Grid de cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {/* Card 1 - Formas de violência */}
          <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-fadeIn text-left">
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-red-400">
              Formas de Violência Doméstica
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-3">
              A violência doméstica pode se manifestar de diferentes maneiras, todas igualmente graves:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base leading-relaxed">
              <li><strong>Física:</strong> agressões, empurrões, tapas, socos ou qualquer ato que cause dor ou lesão.</li>
              <li><strong>Psicológica:</strong> ameaças, humilhações, manipulação emocional e isolamento social.</li>
              <li><strong>Sexual:</strong> coerção ou imposição de atos sexuais sem consentimento.</li>
              <li><strong>Patrimonial:</strong> destruição de bens, retenção de documentos ou controle financeiro abusivo.</li>
              <li><strong>Moral:</strong> difamação, calúnia e insultos que afetam a dignidade da vítima.</li>
            </ul>
          </div>

          {/* Card 2 - Campanhas de conscientização */}
          <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-fadeIn text-left">
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-red-400">
              Campanhas de Conscientização
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-3">
              Diversas campanhas nacionais e internacionais buscam alertar a sociedade sobre a violência doméstica:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base leading-relaxed">
              <li><strong>Sinal Vermelho:</strong> um “X” vermelho desenhado na palma da mão indica pedido de ajuda silencioso.</li>
              <li><strong>16 Dias de Ativismo:</strong> movimento global que promove ações contra a violência de gênero.</li>
              <li><strong>Campanhas digitais:</strong> uso das redes sociais para ampliar a conscientização e incentivar denúncias.</li>
              <li><strong>Projetos escolares:</strong> iniciativas educativas que ensinam jovens a identificar e combater abusos.</li>
            </ul>
          </div>

          {/* Card 3 - Sinais de alerta */}
          <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-fadeIn text-left">
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-red-400">
              Sinais de Alerta
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-3">
              É fundamental reconhecer os sinais que podem indicar que alguém está em situação de violência:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base leading-relaxed">
              <li><strong>Comportamento:</strong> medo constante, ansiedade, tristeza profunda ou mudanças bruscas de humor.</li>
              <li><strong>Isolamento:</strong> afastamento de amigos, familiares e colegas sem explicação clara.</li>
              <li><strong>Marcas físicas:</strong> hematomas frequentes ou desculpas inconsistentes para justificar ferimentos.</li>
              <li><strong>Controle excessivo:</strong> parceiro que monitora celular, redes sociais ou restringe liberdade.</li>
              <li><strong>Dependência financeira:</strong> falta de acesso a recursos básicos ou retenção de salário.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}