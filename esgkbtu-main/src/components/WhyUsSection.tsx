 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Check } from "lucide-react";
 
 const reasons = [
   "KBTU is the first university in Central Asia to be a certified GRI training partner",
   "A team of experts bringing together practitioners, researchers and specialists in sustainable development and ESG",
   "Flexible training format – online, offline and corporate programs",
   "Practical cases, real tools and results that can be applied immediately",
 ];
 
 const WhyUsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section className="py-20 gradient-hero" ref={ref}>
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
             Why Choose Us?
           </h2>
         </motion.div>
 
         <div className="max-w-3xl mx-auto">
           {reasons.map((reason, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: -30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="flex items-start gap-4 mb-6 last:mb-0"
             >
               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-glow">
                 <Check className="h-5 w-5 text-secondary-foreground" />
               </div>
               <p className="text-lg text-primary-foreground/90 leading-relaxed">
                 {reason}
               </p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default WhyUsSection;