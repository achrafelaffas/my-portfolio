import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-center py-4 mt-10">
      <div className="mb-2">
        <p>© {new Date().getFullYear()} Achraf. All Rights Reserved.</p>
        <p>
          Built with <span className="text-red-500">❤️</span> using React and
          Tailwind CSS.
        </p>
      </div>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/achrafelaffas"
          className="text-gray-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/achrafelaffas"
          className="text-gray-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-gray-400 hover:text-white"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
