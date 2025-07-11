"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TermsModalProps {
  isOpen?: boolean
  onClose?: () => void
  type?: "terms" | "privacy"
}

export function TermsModal({ isOpen, onClose, type = "terms" }: TermsModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [currentType, setCurrentType] = useState<"terms" | "privacy">("terms")

  const handleOpenChange = (open: boolean) => {
    if (onClose && isOpen !== undefined) {
      if (!open) onClose()
    } else {
      setInternalOpen(open)
    }
  }

  const openTerms = () => {
    setCurrentType("terms")
    if (onClose && isOpen !== undefined) {
      // Controlled mode - do nothing, parent handles
    } else {
      setInternalOpen(true)
    }
  }

  const openPrivacy = () => {
    setCurrentType("privacy")
    if (onClose && isOpen !== undefined) {
      // Controlled mode - do nothing, parent handles
    } else {
      setInternalOpen(true)
    }
  }

  const actualOpen = isOpen !== undefined ? isOpen : internalOpen
  const actualType = type || currentType

  const termsContent = (
    <div className="space-y-4 text-sm text-gray-300">
      <h3 className="text-lg font-semibold text-white">1. Aceitação dos Termos</h3>
      <p>
        Ao acessar e usar os serviços da Help Mídias IA, você concorda em cumprir e estar vinculado a estes Termos de
        Serviço.
      </p>

      <h3 className="text-lg font-semibold text-white">2. Descrição dos Serviços</h3>
      <p>
        A Help Mídias IA oferece soluções de automação, inteligência artificial, infraestrutura e consultoria
        tecnológica para empresas e indivíduos.
      </p>

      <h3 className="text-lg font-semibold text-white">3. Responsabilidades do Usuário</h3>
      <p>
        Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que
        ocorrem em sua conta.
      </p>

      <h3 className="text-lg font-semibold text-white">4. Propriedade Intelectual</h3>
      <p>
        Todo o conteúdo, marcas registradas, e propriedade intelectual relacionados aos nossos serviços são de
        propriedade da Help Mídias IA.
      </p>

      <h3 className="text-lg font-semibold text-white">5. Limitação de Responsabilidade</h3>
      <p>
        A Help Mídias IA não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes
        do uso de nossos serviços.
      </p>

      <h3 className="text-lg font-semibold text-white">6. Modificações</h3>
      <p>
        Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
        imediatamente após a publicação.
      </p>

      <h3 className="text-lg font-semibold text-white">7. Contato</h3>
      <p>
        Para questões sobre estes Termos de Serviço, entre em contato conosco através do email:
        atendimento@helpmidiasdigital.com.br
      </p>
    </div>
  )

  const privacyContent = (
    <div className="space-y-4 text-sm text-gray-300">
      <h3 className="text-lg font-semibold text-white">1. Informações que Coletamos</h3>
      <p>
        Coletamos informações que você nos fornece diretamente, como nome, email, telefone e informações sobre seu
        projeto quando você entra em contato conosco.
      </p>

      <h3 className="text-lg font-semibold text-white">2. Como Usamos suas Informações</h3>
      <p>
        Utilizamos suas informações para fornecer nossos serviços, responder às suas solicitações, melhorar nossos
        serviços e comunicar com você sobre atualizações relevantes.
      </p>

      <h3 className="text-lg font-semibold text-white">3. Compartilhamento de Informações</h3>
      <p>
        Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para
        fornecer nossos serviços ou quando exigido por lei.
      </p>

      <h3 className="text-lg font-semibold text-white">4. Segurança dos Dados</h3>
      <p>
        Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações
        pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
      </p>

      <h3 className="text-lg font-semibold text-white">5. Cookies e Tecnologias Similares</h3>
      <p>
        Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, analisar o tráfego e
        personalizar conteúdo.
      </p>

      <h3 className="text-lg font-semibold text-white">6. Seus Direitos</h3>
      <p>
        Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais. Entre
        em contato conosco para exercer esses direitos.
      </p>

      <h3 className="text-lg font-semibold text-white">7. Alterações nesta Política</h3>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas
        através do nosso site ou por email.
      </p>

      <h3 className="text-lg font-semibold text-white">8. Contato</h3>
      <p>
        Para questões sobre esta Política de Privacidade, entre em contato conosco através do email:
        atendimento@helpmidiasdigital.com.br
      </p>
    </div>
  )

  // If used as standalone buttons (not controlled)
  if (isOpen === undefined && onClose === undefined) {
    return (
      <div className="flex items-center space-x-4 text-sm">
        <Dialog open={actualOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <button
              onClick={openTerms}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            >
              Termos de Serviço
            </button>
          </DialogTrigger>
          <DialogContent className="bg-black/90 border-white/20 text-white max-w-2xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {actualType === "terms" ? "Termos de Serviço" : "Política de Privacidade"}
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] pr-4">
              {actualType === "terms" ? termsContent : privacyContent}
            </ScrollArea>
          </DialogContent>
        </Dialog>

        <span className="text-gray-600">•</span>

        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={openPrivacy}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              Política de Privacidade
            </button>
          </DialogTrigger>
          <DialogContent className="bg-black/90 border-white/20 text-white max-w-2xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Política de Privacidade
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] pr-4">{privacyContent}</ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  // Controlled mode
  return (
    <Dialog open={actualOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-black/90 border-white/20 text-white max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {actualType === "terms" ? "Termos de Serviço" : "Política de Privacidade"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">{actualType === "terms" ? termsContent : privacyContent}</ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
