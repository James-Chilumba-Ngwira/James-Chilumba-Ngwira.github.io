 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Briefcase, GraduationCap, Globe, Lightbulb } from "lucide-react";
 
 const features = [
   {
     icon: Briefcase,
     title: "Business Solutions",
     description: "Expert consulting for sustainable business practices",
   },
   {
     icon: GraduationCap,
     title: "Education & Training",
     description: "Certified courses and professional development",
   },
   {
     icon: Globe,
     title: "International Standards",
     description: "Alignment with global ESG frameworks and GRI",
   },
   {
     icon: Lightbulb,
     title: "Innovation",
     description: "Cutting-edge sustainable technology solutions",
   },
 ];
 
 const AboutSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section className="py-20 bg-background" ref={ref}>
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto mb-16"
         >
           <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
             About Us
           </span>
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
             Leading ESG Excellence in Central Asia
           </h2>
           <p className="text-muted-foreground text-lg">
             The KBTU ESG Competence Center brings together science, business, and education 
             to help companies, financial institutions, universities, and businesses implement 
             modern sustainable development practices. We offer a full range of solutions—from 
             training courses and workshops to expert consulting and ESG strategy development.
           </p>
         </motion.div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {features.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
             >
               <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:shadow-glow transition-all duration-300">
                 <feature.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
               </div>
               <h3 className="text-lg font-semibold text-foreground mb-2">
                 {feature.title}
               </h3>
               <p className="text-muted-foreground text-sm">
                 {feature.description}
               </p>
             </motion.div>
           ))}
         </div>
 
         {/* Unique Training Opportunity */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center"
         >
           <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
             This is a <strong className="text-secondary">unique opportunity</strong> for specialists 
             in Kazakhstan and the CIS to undergo training according to international standards, 
             without traveling abroad, in Kazakh, Russian and English.
           </p>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default AboutSection;