 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Award, ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const SpecialOfferSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section className="py-20 bg-background" ref={ref}>
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
             Special Offer
           </span>
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="relative bg-card rounded-3xl overflow-hidden shadow-card-hover"
         >
           <div className="absolute top-0 right-0 w-1/2 h-full gradient-hero opacity-10" />
           
           <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
             {/* GRI Badge */}
             <div className="flex-shrink-0">
               <div className="relative">
                 <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-primary flex flex-col items-center justify-center text-primary-foreground p-4 shadow-lg">
                   <Award className="h-10 w-10 mb-2" />
                   <span className="text-3xl md:text-4xl font-bold">GRI</span>
                   <span className="text-xs md:text-sm text-center mt-1 opacity-90">TRAINING PARTNER</span>
                   <span className="text-2xl md:text-3xl font-bold mt-1 text-secondary">2025</span>
                 </div>
                 <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                   Official
                 </div>
               </div>
             </div>
 
             {/* Content */}
             <div className="flex-1 text-center md:text-left">
               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                 GRI Certified Training Partner
               </h3>
               <p className="text-muted-foreground text-lg mb-4">
                 KBTU is an official certified GRI training partner in the Asia-Pacific region. 
                 We are the only university to offer <strong className="text-foreground">the certified course 
                 "Reporting with the GRI Standards,"</strong> part of the official GRI Certified 
                 Sustainability Professional training program.
               </p>
               <p className="text-secondary font-medium mb-6">
                 First university in Central Asia to be a certified GRI training partner!
               </p>
               <Button size="lg" className="group">
                 Register Now
                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
               </Button>
             </div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default SpecialOfferSection;