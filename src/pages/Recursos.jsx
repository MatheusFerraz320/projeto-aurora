export default function Recursos() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/recursosBg.jpg')" }}
    >
      {/* Overlay sombreado */}
      <div className="bg-black bg-opacity-60 p-4 sm:p-6 md:p-10 rounded-xl">
        {/* Título principal */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-red-400 animate-slideIn mt-6 text-center">
          Recursos e Apoio
        </h2>

        {/* Texto introdutório */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 animate-fadeIn max-w-md sm:max-w-2xl md:max-w-4xl text-white mx-auto text-center">
          <strong>
            Se você ou alguém que conhece está passando por violência doméstica,
            procure ajuda. Existem serviços especializados e canais de denúncia que podem salvar vidas.
            Não fique em silêncio.
          </strong>
        </p>

        {/* Lista de recursos */}
        <ul className="space-y-6">
          {/* Delegacias da Mulher */}
          <li className="p-4 sm:p-6 bg-gray-900 bg-opacity-70 text-white rounded-lg shadow-md animate-slideIn">
            <h3 className="font-semibold text-lg sm:text-xl text-red-300 mb-3">
              Delegacias da Mulher
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              As Delegacias Especializadas de Atendimento à Mulher (DEAMs) oferecem acolhimento,
              registro de ocorrência e encaminhamento de medidas protetivas. A mulher deve procurar
              a delegacia sempre que sofrer agressão física, psicológica, sexual ou qualquer forma
              de violência.
            </p>
          </li>

          {/* ONGs de Apoio */}
          <li className="p-4 sm:p-6 bg-gray-900 bg-opacity-70 text-white rounded-lg shadow-md animate-slideIn">
            <h3 className="font-semibold text-lg sm:text-xl text-red-300 mb-3">
              ONGs de Apoio
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              Organizações que oferecem suporte psicológico, jurídico e social às vítimas de violência.
            </p>
            <ul className="list-disc pl-6 text-sm sm:text-base leading-relaxed">
              <li>Instituto Maria da Penha – (85) 3038-3636</li>
              <li>TamoJuntas – (71) 99909-1234</li>
              <li>Rede Feminista de Saúde – (11) 3105-1580</li>
              <li>Centro de Defesa da Mulher – (31) 3272-8737</li>
            </ul>
          </li>

          {/* Linhas de Denúncia */}
          <li className="p-4 sm:p-6 bg-gray-900 bg-opacity-70 text-white rounded-lg shadow-md animate-slideIn">
            <h3 className="font-semibold text-lg sm:text-xl text-red-300 mb-3">
              Linhas de Denúncia
            </h3>
            <ul className="list-disc pl-6 text-sm sm:text-base leading-relaxed">
              <li>Disque 180 – Central de Atendimento à Mulher</li>
              <li>Disque 100 – Direitos Humanos</li>
              <li>Polícia Militar – 190 (em casos de emergência)</li>
            </ul>
          </li>

          {/* App SOS Mulher */}
          <li className="p-4 sm:p-6 bg-gray-900 bg-opacity-70 text-white rounded-lg shadow-md animate-slideIn">
            <h3 className="font-semibold text-lg sm:text-xl text-red-300 mb-3">
              Aplicativo SOS Mulher (PM-SP)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              O aplicativo SOS Mulher, da Polícia Militar de São Paulo, é destinado a mulheres que
              possuem medidas protetivas concedidas pela Justiça. Ele permite acionar rapidamente a PM
              em caso de risco, enviando a localização da vítima para uma viatura próxima.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Para utilizar, é necessário ter a medida protetiva registrada no sistema da PM. O app
              está disponível para Android e iOS e funciona como um botão de emergência discreto.
            </p>
          </li>

          {/* Legislação */}
          <li className="p-4 sm:p-6 bg-gray-900 bg-opacity-70 text-white rounded-lg shadow-md animate-slideIn">
            <h3 className="font-semibold text-lg sm:text-xl text-red-300 mb-3">
              Legislação e Medidas Protetivas
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              A Lei Maria da Penha (Lei nº 11.340/2006) prevê medidas protetivas de urgência que
              podem ser solicitadas pela vítima diretamente na delegacia ou ao juiz. Essas medidas
              visam garantir a segurança da mulher e podem incluir:
            </p>
            <ul className="list-disc pl-6 text-sm sm:text-base leading-relaxed mb-2">
              <li>Afastamento imediato do agressor do lar ou local de convivência.</li>
              <li>Proibição de contato com a vítima, familiares e testemunhas.</li>
              <li>Suspensão da posse ou restrição do porte de armas do agressor.</li>
              <li>Encaminhamento da vítima e seus dependentes para programas de proteção.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed">
              Essas medidas podem ser concedidas em até 48 horas após a denúncia, e o descumprimento
              configura crime, com possibilidade de prisão imediata do agressor.
            </p>
          </li>
        </ul>

        {/* Orientação geral + Referências */}
        <div className="mt-10 p-4 sm:p-6 bg-gray-900 bg-opacity-70 text-white rounded-lg shadow-md animate-fadeIn">
          <h3 className="font-semibold text-lg sm:text-xl text-red-300 mb-3">
            Orientação para Mulheres e Sociedade
          </h3>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            A violência doméstica é um problema coletivo. Mulheres devem buscar ajuda sem medo,
            utilizando os canais disponíveis. A sociedade também tem papel fundamental: vizinhos,
            familiares e colegas podem perceber sinais e denunciar. O silêncio fortalece o agressor,
            enquanto a denúncia salva vidas. A legislação brasileira garante proteção e mecanismos
            de denúncia, mas é essencial que todos estejam atentos e engajados.
          </p>

          {/* Referências oficiais */}
          <div className="mt-6 bg-black bg-opacity-40 p-4 rounded-lg">
            <h4 className="font-semibold text-base sm:text-lg text-red-200 mb-2">
              Referências Oficiais
            </h4>
            <ul className="list-disc pl-6 text-xs sm:text-sm leading-relaxed text-gray-200">
              <li>Conselho Nacional de Justiça (CNJ) – Campanha Sinal Vermelho contra a Violência Doméstica</li>
              <li>Associação dos Magistrados Brasileiros (AMB) – Apoio institucional à campanha</li>
              <li>Fórum Brasileiro de Segurança Pública – Relatórios anuais sobre violência contra a mulher</li>
              <li>Ministério da Mulher, da Família e dos Direitos Humanos – Central de Atendimento 180</li>
              <li>Lei nº 11.340/2006 – Lei Maria da Penha</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}