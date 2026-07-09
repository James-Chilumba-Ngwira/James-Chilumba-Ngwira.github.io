 import { Mail, Phone, MapPin, Send, Facebook, Youtube, Instagram } from "lucide-react";
 import logoImg from "@/assets/esg-kbtu-logo.png";
 
 const Footer = () => {
   return (
     <footer id="contact" className="bg-primary text-primary-foreground">
       <div className="container mx-auto px-4 py-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
           {/* Logo & Contact */}
           <div>
             <div className="flex items-center gap-3 mb-4">
               <img src={logoImg} alt="ESG KBTU Logo" className="h-12 md:h-14 object-contain" />
             </div>
             <p className="text-2xl font-bold text-secondary mb-4">8 727 357 42 42</p>
             <div className="space-y-2 text-sm opacity-80">
               <div className="flex items-start gap-2">
                 <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                 <span>Republic of Kazakhstan Almaty, Tole bi street, 59</span>
               </div>
               <div className="flex items-center gap-2">
                 <Mail className="h-4 w-4" />
                 <a href="mailto:kense@kbtu.kz" className="hover:text-secondary transition-colors">kense@kbtu.kz</a>
               </div>
               <div className="flex items-center gap-2">
                 <Mail className="h-4 w-4" />
                 <a href="mailto:helpdesk@kbtu.kz" className="hover:text-secondary transition-colors">helpdesk@kbtu.kz</a>
               </div>
             </div>
           </div>
 
           {/* Education */}
           <div>
             <h4 className="text-lg font-bold mb-4 text-secondary">Education</h4>
             <ul className="space-y-2 text-sm opacity-80">
               <li><a href="#" className="hover:text-secondary transition-colors">Undergraduate</a></li>
               <li><a href="#" className="hover:text-secondary transition-colors">Graduate</a></li>
               <li><a href="#" className="hover:text-secondary transition-colors">Postgraduate</a></li>
               <li><a href="#" className="hover:text-secondary transition-colors">Academy of Corporate Education</a></li>
               <li><a href="#" className="hover:text-secondary transition-colors">International admission</a></li>
             </ul>
           </div>
 
           {/* Admission */}
           <div>
             <h4 className="text-lg font-bold mb-4 text-secondary">Admission</h4>
             <ul className="space-y-2 text-sm opacity-80">
               <li className="flex items-center gap-2">
                 <Phone className="h-4 w-4" />
                 <span>+7 (727) 357 42 51</span>
               </li>
               <li className="flex items-center gap-2">
                 <Mail className="h-4 w-4" />
                 <a href="mailto:admission@kbtu.kz" className="hover:text-secondary transition-colors">admission@kbtu.kz</a>
               </li>
             </ul>
           </div>
 
           {/* Useful Links */}
           <div>
             <h4 className="text-lg font-bold mb-4 text-secondary">Useful Links</h4>
             <ul className="space-y-2 text-sm opacity-80">
               <li><a href="#" className="hover:text-secondary transition-colors">Vacancy</a></li>
               <li><a href="#" className="hover:text-secondary transition-colors">Procurement</a></li>
             </ul>
 
             {/* Social Links */}
             <div className="mt-6 flex gap-3">
               {[Send, Facebook, Youtube, Instagram].map((Icon, i) => (
                 <a
                   key={i}
                   href="#"
                   className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                 >
                   <Icon className="h-5 w-5" />
                 </a>
               ))}
             </div>
           </div>
         </div>
 
         <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
           <p>
             Any use of materials is permitted only with a hyperlink to{" "}
             <a href="https://kbtu.edu.kz" className="underline hover:text-secondary transition-colors">
               https://kbtu.edu.kz
             </a>
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;