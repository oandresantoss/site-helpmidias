"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TermsModal } from "@/components/terms-modal"
import {
  Brain,
  Zap,
  Globe,
  Users,
  Target,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin,
  Server,
  Settings,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function MetaversoNeuralNetwork() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"terms" | "privacy">("terms")

  const openModal = (type: "terms" | "privacy") => {
    setModalType(type)
    setModalOpen(true)
  }

  useEffect(() => {
    // Chatwoot Script - versão otimizada
    const script = document.createElement("script")
    script.src = "https://chat.helpmidiasdigital.com.br/packs/js/sdk.js"
    script.async = true
    script.defer = true

    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: "HupGbJuuTe4HaeFhcPXo1GGS",
          baseUrl: "https://chat.helpmidiasdigital.com.br",
        })
      }
    }

    document.head.appendChild(script)

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Fixed Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center p-1">
                <img
                  src="/images/logo-helpmidias.png"
                  alt="Help Mídias IA"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                HELP MÍDIAS IA
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Início
              </a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Serviços
              </a>
              <a href="#community" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                Comunidade
              </a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <Button
              onClick={() => window.open("https://bit.ly/helpmidias-ia", "_blank")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="mr-2 h-4 w-4" />
              Falar com IA
            </Button>
          </div>
        </div>
      </header>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-bounce-slow" />
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-24 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-purple-500/30 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Comunidade DAO Ativa
            </span>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              SOLUÇÕES
            </div>
            <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              AUTOMATIZADAS
            </div>
            <div className="bg-gradient-to-r from-pink-400 via-cyan-500 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              COM INTELIGÊNCIA
            </div>
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              ARTIFICIAL
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            A Help Mídias IA desenvolve soluções inteligentes para{" "}
            <span className="text-purple-400">automatizar processos</span>,{" "}
            <span className="text-cyan-400">escalar atendimento</span> e{" "}
            <span className="text-pink-400">construir o futuro</span> através da nossa comunidade DAO
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={() => window.open("https://discord.gg/bwKqTUzAvw", "_blank")}
              className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              <Users className="mr-2 h-5 w-5" />
              Entrar na Comunidade
            </Button>
            <Button
              onClick={() => window.open("https://bit.ly/helpmidias-ia", "_blank")}
              variant="outline"
              className="px-8 py-4 text-lg border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar com IA
            </Button>
          </div>

          {/* Tech Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Brain, title: "IA & Automação", desc: "N8N, Mautic e integrações avançadas" },
              { icon: Users, title: "Comunidade DAO", desc: "Discord, WhatsApp e networking" },
              { icon: Globe, title: "Ecossistema", desc: "Help Meta, MDC TV e mais" },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              NOSSOS SERVIÇOS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Especialistas em IA, automação e infraestrutura para escalar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "Automação com IA",
                desc: "Soluções inteligentes para automatizar processos e aumentar conversões",
                features: [
                  "Automação com N8N",
                  "Marketing com Mautic",
                  "Integrações Avançadas",
                  "Chatbots Inteligentes",
                ],
                gradient: "from-purple-600 to-pink-600",
                borderColor: "border-purple-500/30",
              },
              {
                icon: Server,
                title: "Infraestrutura Docker",
                desc: "Clusters escaláveis, seguros e prontos para crescer com seu negócio",
                features: ["Docker Swarm Profissional", "Load Balancer", "Monitoramento 24/7", "Backups Automáticos"],
                gradient: "from-cyan-600 to-blue-600",
                borderColor: "border-cyan-500/30",
              },
              {
                icon: Settings,
                title: "Consultoria Estratégica",
                desc: "Domine sua tecnologia e escale com autonomia total",
                features: [
                  "Análise Técnica",
                  "Arquitetura Recomendada",
                  "Documentação Completa",
                  "Treinamento da Equipe",
                ],
                gradient: "from-green-600 to-teal-600",
                borderColor: "border-green-500/30",
              },
              {
                icon: Globe,
                title: "Soluções White-Label",
                desc: "Produtos prontos para revenda com sua identidade visual",
                features: ["Self-Hosted", "Atendimento Omnichannel", "Micro-SaaS", "Suporte Técnico"],
                gradient: "from-orange-600 to-red-600",
                borderColor: "border-orange-500/30",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`bg-black/40 backdrop-blur-xl border ${service.borderColor} hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => window.open("https://bit.ly/helpmidias-ia", "_blank")}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 border-0 rounded-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Falar com IA
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              NOSSA COMUNIDADE DAO
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Conecte-se com nossa comunidade focada no futuro. Participe das discussões, aprenda e construa o amanhã
              conosco.
            </p>
          </div>

          {/* Community Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "HELP MÍDIAS IA 🤖",
                links: [
                  { name: "Site Principal", url: "https://helpmidiasdigital.com.br/", icon: Globe },
                  { name: "GitHub", url: "https://github.com/helpmidias-ia", icon: ExternalLink },
                  { name: "Discord - A Cúpula", url: "https://discord.gg/bwKqTUzAvw", icon: Users },
                  { name: "WhatsApp Canal", url: "https://whatsapp.com/channel/0029VaBkHaLK0IBfPg77fd3r", icon: Phone },
                ],
                gradient: "from-purple-600 to-pink-600",
                borderColor: "border-purple-500/30",
              },
              {
                title: "HELP META 💼",
                links: [
                  { name: "Site Help Meta", url: "https://helpmeta.com.br/", icon: Globe },
                  { name: "Blog", url: "https://blog.helpmeta.com.br/", icon: ExternalLink },
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/helpmeta/", icon: ExternalLink },
                  {
                    name: "Newsletter",
                    url: "https://www.linkedin.com/newsletters/help-meta-7028499197867745280/",
                    icon: Mail,
                  },
                ],
                gradient: "from-cyan-600 to-blue-600",
                borderColor: "border-cyan-500/30",
              },
              {
                title: "MDC TV 🚀",
                links: [
                  { name: "YouTube", url: "https://www.youtube.com/@modelodeconversao", icon: ExternalLink },
                  { name: "Instagram IA", url: "https://www.instagram.com/helpmidias.ia/", icon: ExternalLink },
                  { name: "LinkedIn IA", url: "https://www.linkedin.com/showcase/helpmidias-ia/", icon: ExternalLink },
                  { name: "Instagram Meta", url: "https://www.instagram.com/_helpmeta/", icon: ExternalLink },
                ],
                gradient: "from-green-600 to-teal-600",
                borderColor: "border-green-500/30",
              },
            ].map((section, index) => (
              <Card
                key={index}
                className={`bg-black/40 backdrop-blur-xl border ${section.borderColor} hover:border-white/30 transition-all duration-500 transform hover:scale-105 group`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group/link"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.gradient} flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300`}
                        >
                          <link.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="group-hover/link:text-purple-400 transition-colors duration-300">
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Membros Comunidade", icon: Users },
              { number: "1000+", label: "Projetos Concluídos", icon: Target },
              { number: "99%", label: "Taxa de Sucesso", icon: Award },
              { number: "24/7", label: "Suporte Técnico", icon: Clock },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              VAMOS CONSTRUIR O FUTURO
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para fazer parte da revolução? Entre em contato e descubra como podemos transformar sua visão em
              realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Solicitar Consultoria
                </h3>
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Seu nome completo"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email profissional"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Descreva seu projeto e necessidades..."
                      rows={4}
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    onClick={() => window.open("https://bit.ly/helpmidias-ia", "_blank")}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 rounded-xl transform hover:scale-105 transition-all duration-300 py-3"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Conversar no WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email Comercial</div>
                      <div className="text-white">atendimento@helpmidiasdigital.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">WhatsApp</div>
                      <div className="text-white">+55 (21) 99787-8324</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Localização</div>
                      <div className="text-white">Rio de Janeiro, Brasil</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center p-1">
              <img
                src="/images/logo-helpmidias.png"
                alt="Help Mídias IA"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              HELP MÍDIAS IA
            </div>
          </div>
          <p className="text-gray-400">© 2024 Help Mídias IA. Comunidade DAO focada no futuro.</p>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-4 text-sm">
              <button
                onClick={() => openModal("terms")}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                Termos de Serviço
              </button>
              <span className="text-gray-600">×</span>
              <button
                onClick={() => openModal("privacy")}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <TermsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
    </div>
  )
}
