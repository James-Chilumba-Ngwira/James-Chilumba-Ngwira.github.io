 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import trainingImg from "@/assets/esg-training.jpg";
 import consultingImg from "@/assets/esg-consulting.jpg";
 import networkingImg from "@/assets/esg-networking.jpg";
 
 const services = [
   {
     image: trainingImg,
     title: "Courses & Training",
     description:
       "We have developed programs to help you understand international ESG standards, implement responsible business practices, and prepare world-class ESG reporting.",
     alignment: "left",
   },
   {
     image: consultingImg,
     title: "ESG Consulting",
     description:
       "Diagnosing the current level of ESG, preparing ESG reports, supporting companies in obtaining ESG ratings, and developing sustainable development strategies.",
     alignment: "right",
   },
   {
     image: networkingImg,
     title: "Networking & Events",
     description:
       "ESG networking, workshops and master classes on ESG in finance, green technologies, ESG reporting, carbon footprint management, sustainable supply chains, and the campus as an ESG ecosystem.",
     alignment: "left",
   },
 ];
 
 const ServicesSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="services" className="py-20 bg-muted/30" ref={ref}>
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
             What We Offer
           </span>
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
             Our Services
           </h2>
         </motion.div>
 
         <div className="space-y-16 md:space-y-24">
           {services.map((service, index) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 40 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: index * 0.15 }}
               className={`flex flex-col ${
                 service.alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"
               } gap-8 md:gap-12 items-center`}
             >
               <div className="flex-1">
                 <div className="relative group overflow-hidden rounded-2xl shadow-card">
                   <img
                     src={service.image}
                     alt={service.title}
                     className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>
               </div>
               <div className="flex-1">
                 <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                   {service.title}
                 </h3>
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   {service.description}
                 </p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ServicesSection;