import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col items-center gap-8 py-10 shadow-[0_-10px_15px_-3px] shadow-shadow">
      <a href="mailto:steffentveit@outlook.com" className="nav-link flex items-center gap-2">Email: steffentveit@outlook.com <ExternalLink size={18}/></a>
      <p>Copyright © 2025 by Steffen Tveit | All rights reserved</p>
    </footer>
  );
}

export default Footer;
