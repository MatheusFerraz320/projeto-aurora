export default function Informacoes() {
  return (
    <section
      className="p-10 min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/bgInfo.jpg')" }}
    >
      {/* Overlay para legibilidade */}
      <div className="bg-black bg-opacity-60 p-6 rounded-xl">
        {/* Título principal */}
        <h2 className="text-4xl font-bold mb-6 text-yellow-300 hover:scale-[1.02] transition-transform duration-300 ease-in-out animate-slideIn">
          Informações
        </h2>

        {/* Texto introdutório */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeIn max-w-4xl">
          A violência doméstica pode se manifestar de várias formas: física, psicológica,
          sexual, econômica, patrimonial e moral. Reconhecer os sinais é o primeiro passo
          para combater esse problema social. Este projeto acadêmico busca detalhar
          informações sobre a conscientização e o combate à violência doméstica,
          apresentando soluções colaborativas junto a órgãos públicos e ONGs.
        </p>

        {/* Grid de informações */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Dados Estatísticos */}
          <div className="p-6 bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-xl animate-slideIn">
            <h3 className="font-semibold text-xl text-yellow-300 mb-3">
              Dados Estatísticos
            </h3>
            <ul className="list-disc pl-6 leading-relaxed">
              <li> Em 2024, o Brasil registrou mais de <strong>245 mil casos</strong> de violência doméstica denunciados.</li>
              <li> A cada hora, cerca de <strong>30 mulheres</strong> sofrem algum tipo de agressão.</li>
              <li> O Disque 180 recebeu mais de <strong>1 milhão de chamadas</strong> relacionadas à violência contra a mulher em 2023.</li>
            </ul>
          </div>

          {/* Sinais de Alerta */}
          <div className="p-6 bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-xl animate-slideIn">
            <h3 className="font-semibold text-xl text-yellow-300 mb-3">
              Sinais de Alerta
            </h3>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Controle excessivo sobre a vítima</li>
              <li>Agressões verbais e psicológicas</li>
              <li>Isolamento social imposto</li>
              <li>Violência física ou sexual</li>
              <li>Dependência econômica forçada</li>
            </ul>
          </div>
        </div>

        {/* Responsabilidade da Sociedade */}
        <div className="mt-10 p-6 bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-xl animate-fadeIn">
          <h3 className="font-semibold text-xl text-yellow-300 mb-3">
            Responsabilidade da Sociedade
          </h3>
          <p className="leading-relaxed mb-4">
            O combate à violência doméstica não é apenas responsabilidade das vítimas ou das
            autoridades. A sociedade como um todo deve estar atenta aos sinais e agir de forma
            solidária. Vizinhos, familiares, colegas de trabalho e amigos podem perceber mudanças
            de comportamento, sinais físicos de agressão ou isolamento social. Denunciar e apoiar
            é essencial para salvar vidas e promover relações familiares saudáveis.
          </p>
          <p className="leading-relaxed">
            O <strong>"X vermelho na mão"</strong> faz parte da campanha nacional <em>"Sinal Vermelho contra a Violência Doméstica"</em>, uma iniciativa do Conselho Nacional de Justiça (CNJ) e da Associação dos Magistrados Brasileiros (AMB). 
            Essa ação permite que mulheres vítimas de violência peçam socorro de forma discreta, mostrando o sinal em farmácias e outros locais participantes para alertar sobre a situação e acionar ajuda, como a Polícia Militar (190) ou a Central de Atendimento à Mulher (180).
          </p>

          {/* Imagem da campanha */}
          <div className="mt-8 flex justify-center">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto bg-gray-700 rounded-lg shadow-lg p-4 overflow-hidden">
              <img
                src="/sinalVermelho.jpg"
                alt="campanhaSinalVermelho"
                className="object-contain w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}