"use client"
import { X } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
  type: "terms" | "privacy"
}

export function TermsModal({ isOpen, onClose, type }: TermsModalProps) {
  if (!isOpen) return null

  const isTerms = type === "terms"

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white text-black rounded-lg shadow-2xl max-w-4xl max-h-[80vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {isTerms ? "Terms of Service" : "Política de Privacidade"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] text-sm leading-relaxed">
          {isTerms ? (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">1. Termos</h3>
                <p>
                  Ao acessar o site Help Meta, concorda em cumprir estes termos de serviço, todas as leis e regulamentos
                  aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você
                  não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais
                  contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. Uso de Licença</h3>
                <p>
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
                  site Help Meta, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de
                  uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>modificar ou copiar os materiais;</li>
                  <li>
                    usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não
                    comercial);
                  </li>
                  <li>
                    tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Help Meta;
                  </li>
                  <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>
                    transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
                  </li>
                </ul>
                <p className="mt-2">
                  Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
                  rescindida por Help Meta a qualquer momento.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Isenção de responsabilidade</h3>
                <p>
                  Os materiais no site da Help Meta são fornecidos 'como estão'. Help Meta não oferece garantias,
                  expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem
                  limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não
                  violação de propriedade intelectual ou outra violação de direitos.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. Limitações</h3>
                <p>
                  Em nenhum caso o Help Meta ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem
                  limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso
                  ou da incapacidade de usar os materiais em Help Meta, mesmo que Help Meta ou um representante
                  autorizado da Help Meta tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. Precisão dos materiais</h3>
                <p>
                  Os materiais exibidos no site da Help Meta podem incluir erros técnicos, tipográficos ou fotográficos.
                  Help Meta não garante que qualquer material em seu site seja preciso, completo ou atual. Help Meta
                  pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">6. Links</h3>
                <p>
                  O Help Meta não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de
                  nenhum site vinculado. A inclusão de qualquer link não implica endosso por Help Meta do site. O uso de
                  qualquer site vinculado é por conta e risco do usuário.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Modificações</h3>
                <p>
                  O Help Meta pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar
                  este site, você concorda em ficar vinculado à versão atual destes termos de serviço.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Lei aplicável</h3>
                <p>
                  Estes termos e condições são regidos e interpretados de acordo com as leis do Help Meta e você se
                  submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </p>
              </section>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-center text-gray-600">© 2025 CNPJ: 40.109.546/0001-08 - Help Mídias</p>
                <p className="text-center text-gray-600 mt-2">Para dúvidas: contato@helpmeta.com.br</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Política de Privacidade</h3>
                <p>
                  A sua privacidade é importante para nós. É política da Help Meta respeitar a sua privacidade em
                  relação a qualquer informação que possamos coletar no site Help Meta, e outros sites que possuímos e
                  operamos.
                </p>
              </section>

              <section>
                <p>
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um
                  serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também
                  informamos por que estamos coletando e como será usado.
                </p>
              </section>

              <section>
                <p>
                  Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
                  Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e
                  roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>
              </section>

              <section>
                <p>
                  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando
                  exigido por lei.
                </p>
              </section>

              <section>
                <p>
                  O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não
                  temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por
                  suas respectivas políticas de privacidade.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Quem somos?</h3>
                <p>
                  Nossa empresa é a Help Mídias Agência de Publicidade LTDA, inscrita no CNPJ sob n. 40.109.546/0001-08.
                  Trabalhamos em colaboração com nossos parceiros para idealizar e priorizar soluções tecnológicas, bem
                  como construir os aspectos técnicos de projetos na web 3.0.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">A gestão dos Dados Pessoais</h3>
                <p>
                  A gestão dos Dados Pessoais realizada por nossa empresa obedece ao que dispõe a Lei Geral de Proteção
                  de Dados (Lei 13.709/18) no sentido de associar toda utilização dos Dados Pessoais a finalidade e
                  bases legais específicas.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Cookies</h3>
                <p>
                  Cookies são pequenos arquivos que armazenam as informações do usuário na internet. A Help Meta utiliza
                  cookies, próprios e de terceiros, que são utilizados para:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Aprimorar o desempenho, funcionalidades e utilização dos recursos do Portal;</li>
                  <li>Monitorar o número de visitantes de nossa plataforma;</li>
                  <li>Lembrar das preferências do usuário ao navegar na plataforma;</li>
                  <li>Enviar ao usuário anúncios personalizados;</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Compromisso do Usuário</h3>
                <p>
                  O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Help Meta oferece no
                  site:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Não se envolver em atividades ilegais ou contrárias à boa fé;</li>
                  <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica ou pornográfica;</li>
                  <li>Não causar danos aos sistemas físicos e lógicos da Help Meta;</li>
                </ul>
              </section>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-center text-gray-600">Política de Privacidade atualizada em 04 de agosto de 2023.</p>
                <p className="text-center text-gray-600 mt-2">© 2025 CNPJ: 40.109.546/0001-08 - Help Mídias</p>
                <p className="text-center text-gray-600 mt-2">Para dúvidas: contato@helpmeta.com.br</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
