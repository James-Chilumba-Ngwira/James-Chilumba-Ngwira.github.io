 import { motion } from "framer-motion";
 import { ArrowRight, Leaf } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroImage from "@/assets/hero-esg.jpg";
 
 const HeroSection = () => {
   return (
     <section className="relative min-h-[70vh] flex items-center overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt="ESG Meeting"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 gradient-hero opacity-85" />
       </div>
 
       {/* Content */}
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-3xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="flex items-center gap-3 mb-6"
           >
             <div className="bg-secondary p-3 rounded-xl shadow-glow">
               <Leaf className="h-8 w-8 text-secondary-foreground" />
             </div>
             <span className="text-xl md:text-2xl font-bold text-primary-foreground">
               ESG KBTU
             </span>
           </motion.div>
 
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
           >
             KBTU ESG Competence Center
           </motion.h1>
 
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl"
           >
             Your partner in sustainable development and ESG transformation. 
             We bring together science, business, and education to help organizations 
             implement modern sustainable development practices.
           </motion.p>
 
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-wrap gap-4"
           >
             <Button size="lg" variant="secondary" className="group">
               Learn More
               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Button>
             <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
               Our Services
             </Button>
           </motion.div>
         </div>
       </div>
 
       {/* Decorative Elements */}
       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
     </section>
   );
 };
 
 export default HeroSection;