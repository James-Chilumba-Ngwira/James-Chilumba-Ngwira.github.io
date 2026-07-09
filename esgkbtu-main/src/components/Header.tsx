 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Menu, X, Search } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Link } from "react-router-dom";
 import logoImg from "@/assets/esg-kbtu-logo.png";
 
 const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
   return (
     <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <div className="flex items-center gap-3">
             <img src={logoImg} alt="ESG KBTU Logo" className="h-12 md:h-16 object-contain" />
           </div>
 
           {/* Search Bar - Desktop */}
           <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
             <Input
               type="text"
               placeholder="Search..."
               className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
             />
             <Button size="sm" variant="secondary">
               <Search className="h-4 w-4" />
               Search
             </Button>
           </div>
 
           {/* Language Switcher */}
           <div className="flex items-center gap-1">
             {["KZ", "RU", "EN"].map((lang) => (
               <button
                 key={lang}
                 className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                   lang === "EN"
                     ? "bg-primary-foreground text-primary"
                     : "text-primary-foreground hover:bg-primary-foreground/10"
                 }`}
               >
                 {lang}
               </button>
             ))}
           </div>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden ml-2 text-primary-foreground"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
           </button>
         </div>
 
         {/* Breadcrumb */}
         <div className="hidden md:flex items-center gap-4 py-2 text-sm text-primary-foreground">
           <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
           <span>/</span>
           <Link to="/esg-principles" className="hover:text-secondary transition-colors">ESG Principles</Link>
           <span>/</span>
           <a href="#services" className="hover:text-secondary transition-colors">Services</a>
         </div>
       </div>
 
       {/* Mobile Menu */}
       {isMenuOpen && (
         <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="md:hidden bg-primary border-t border-primary-foreground/10"
         >
           <div className="container mx-auto px-4 py-4">
             <div className="flex items-center gap-2 mb-4">
               <Input
                 type="text"
                 placeholder="Search..."
                 className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
               />
               <Button size="sm" variant="secondary">
                 <Search className="h-4 w-4" />
               </Button>
             </div>
             <nav className="space-y-2">
               <Link to="/" className="block text-primary-foreground hover:text-secondary transition-colors">Home</Link>
               <Link to="/esg-principles" className="block text-primary-foreground hover:text-secondary transition-colors">ESG Principles</Link>
               <a href="#services" className="block text-primary-foreground hover:text-secondary transition-colors">Services</a>
               <a href="#contact" className="block text-primary-foreground hover:text-secondary transition-colors">Contact</a>
             </nav>
           </div>
         </motion.div>
       )}
     </header>
   );
 };
 
 export default Header;