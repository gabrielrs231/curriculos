import Link from "next/link"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} GestãoCurrículos. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-sm items-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <FiGithub size={16} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <FiLinkedin size={16} /> LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <FiInstagram size={16} /> Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}