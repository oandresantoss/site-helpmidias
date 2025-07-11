"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
  type: "terms" | "privacy"
}

export function TermsModal({ isOpen, onClose, type }: TermsModalProps) {
  const isTerms = type === "terms"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-black/95 border border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {isTerms ? "Termos de Serviço" : "Política de Privacidade"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-gray-300">
            {isTerms ? (
              <>
                <section>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">1. Aceitação dos Termos</h3>
                  <p>
                    Ao acessar e usar os serviços da Help Mídias IA, você concorda em cumprir e estar vinculado a estes
                    Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve usar nossos
                    serviços.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">2. Descrição dos Serviços</h3>
                  <p>
                    A Help Mídias IA oferece soluções em inteligência artificial, automação de processos, infraestrutura
                    Docker, consultoria estratégica e produtos white-label. Nossos serviços incluem, mas não se limitam
                    a:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Desenvolvimento de automações com N8N</li>
                    <li>Implementação de marketing automation com Mautic</li>
                    <li>Configuração de infraestrutura Docker</li>
                    <li>Consultoria em IA e tecnologia</li>
                    <li>Soluções white-label personalizadas</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">3. Responsabilidades do Usuário</h3>
                  <p>Você concorda em:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Fornecer informações precisas e atualizadas</li>
                    <li>Usar nossos serviços de forma legal e ética</li>
                    <li>Não interferir no funcionamento dos nossos sistemas</li>
                    <li>Respeitar os direitos de propriedade intelectual</li>
                    <li>Manter a confidencialidade de suas credenciais de acesso</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">4. Propriedade Intelectual</h3>
                  <p>
                    Todos os direitos de propriedade intelectual relacionados aos nossos serviços, incluindo software,
                    documentação, designs e conteúdo, permanecem de propriedade da Help Mídias IA ou de seus
                    licenciadores.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">5. Limitação de Responsabilidade</h3>
                  <p>
                    A Help Mídias IA não será responsável por danos indiretos, incidentais, especiais ou consequenciais
                    decorrentes do uso ou incapacidade de usar nossos serviços, mesmo que tenhamos sido avisados da
                    possibilidade de tais danos.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-red-400 mb-3">6. Modificações dos Termos</h3>
                  <p>
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em
                    vigor imediatamente após a publicação. O uso continuado dos nossos serviços após as modificações
                    constitui aceitação dos novos termos.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">7. Contato</h3>
                  <p>
                    Para questões sobre estes Termos de Serviço, entre em contato conosco através do email:
                    atendimento@helpmidiasdigital.com.br
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">1. Informações que Coletamos</h3>
                  <p>Coletamos as seguintes informações:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Informações de contato (nome, email, telefone)</li>
                    <li>Informações sobre seu projeto e necessidades</li>
                    <li>Dados de uso dos nossos serviços</li>
                    <li>Informações técnicas (IP, navegador, dispositivo)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">2. Como Usamos suas Informações</h3>
                  <p>Utilizamos suas informações para:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Fornecer e melhorar nossos serviços</li>
                    <li>Comunicar sobre projetos e atualizações</li>
                    <li>Personalizar sua experiência</li>
                    <li>Cumprir obrigações legais</li>
                    <li>Prevenir fraudes e garantir segurança</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">3. Compartilhamento de Informações</h3>
                  <p>
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando
                    necessário para fornecer nossos serviços ou quando exigido por lei.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">4. Segurança dos Dados</h3>
                  <p>
                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas
                    informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">5. Seus Direitos</h3>
                  <p>Você tem o direito de:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Acessar suas informações pessoais</li>
                    <li>Corrigir informações incorretas</li>
                    <li>Solicitar a exclusão de seus dados</li>
                    <li>Retirar seu consentimento</li>
                    <li>Portabilidade dos dados</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-red-400 mb-3">6. Cookies e Tecnologias Similares</h3>
                  <p>
                    Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site e
                    personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu
                    navegador.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">7. Contato</h3>
                  <p>
                    Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato
                    conosco através do email: atendimento@helpmidiasdigital.com.br
                  </p>
                </section>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
