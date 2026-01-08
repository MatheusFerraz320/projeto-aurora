export default function Home() {
  return (
    <section className="flex flex-col w-full">
      {/* Seção principal */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/home1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6 py-12 text-white">
          <h1 className="text-5xl font-extrabold mb-8 leading-tight animate-slideIn">
            Conscientização e Combate à Violência Doméstica
          </h1>
          <p className="text-lg md:text-xl max-w-4xl leading-relaxed animate-fadeIn">
            Este projeto acadêmico foi desenvolvido com o objetivo de ampliar o conhecimento
            sobre a violência doméstica, suas diferentes formas de manifestação e os impactos
            sociais que ela causa. A proposta é oferecer informações claras e acessíveis,
            apresentar recursos de apoio disponíveis e destacar a importância da legislação
            brasileira no combate a esse problema. Além disso, busca fomentar a conscientização
            coletiva, incentivando a sociedade a agir de forma solidária e responsável.
          </p>
        </div>
      </div>

      {/* Informações */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/home2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6 py-12 text-white">
          <h2 className="text-3xl font-bold mb-4 animate-slideIn">Informações</h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed animate-fadeIn">
            Nesta seção são apresentados dados estatísticos atualizados, sinais de alerta que
            podem indicar situações de violência e campanhas nacionais de conscientização,
            como o “X vermelho na mão”. Também são explicadas as diferentes formas de violência
            doméstica — física, psicológica, sexual, patrimonial e moral — para que seja possível
            reconhecer e combater cada uma delas.
          </p>
        </div>
      </div>

      {/* Recursos */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/home3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6 py-12 text-white">
          <h2 className="text-3xl font-bold mb-4 animate-slideIn">Recursos</h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed animate-fadeIn">
            Esta seção reúne os principais canais de apoio disponíveis para vítimas de violência
            doméstica. São detalhados os serviços oferecidos pelas Delegacias da Mulher, ONGs
            especializadas com contatos diretos, linhas de denúncia como o Disque 180, além do
            aplicativo SOS Mulher da Polícia Militar de São Paulo. Também são destacadas as
            medidas protetivas previstas na Lei Maria da Penha, que garantem segurança e amparo
            legal às vítimas.
          </p>
        </div>
      </div>
    </section>
  )
}