import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Leaf, Users, Shield, Target } from "lucide-react";

const ESGPrinciples = () => {
  const ref = useRef(null);

  const principles = [
    {
      icon: Leaf,
      title: "Environmental",
      description: "Developing carbon neutrality strategies, creating green campus infrastructure, and integrating sustainable practices into operations."
    },
    {
      icon: Users,
      title: "Social",
      description: "Supporting inclusive education, employee well-being, student ESG initiatives, and community partnerships for sustainable development."
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Implementing ethical codes, transparency policies, academic integrity standards, and anti-corruption measures across the institution."
    }
  ];

  const policies = [
    "Corporate Governance Code",
    "Code of Business Ethics",
    "Code of Ethics for Students",
    "Academic Integrity Policy",
    "Anti-corruption Policy",
    "Quality, Environmental Protection, Health and Safety Policy",
    "Sustainable Development Policy",
    "Sustainable Procurement Policy",
    "Sustainable Investment Policy",
    "Equity, Diversity, and Inclusion (DEI) Policy"
  ];

  const initiatives = [
    {
      title: "ESG as Strategic Development Vector",
      description: "KBTU considers ESG as an integral part of its development strategy."
    },
    {
      title: "Integration into Education and Research",
      description: "Implementing ESG principles into educational programs and stimulating sustainable development research."
    },
    {
      title: "ESG Competence Center",
      description: "A unique platform for sustainable technology development, research coordination, and ecosystem cooperation."
    },
    {
      title: "Carbon Neutrality Strategy",
      description: "Consistently developing measures to reduce carbon footprint with defined targets and decarbonization approaches."
    },
    {
      title: "Green Campus Initiative",
      description: "Implementing environmentally sustainable infrastructure including energy-saving technologies and renewable energy sources."
    },
    {
      title: "ESG Campus Community",
      description: "Creating platforms for student and employee involvement in ESG activities and volunteer projects."
    },
    {
      title: "Strategic Partnerships",
      description: "Active cooperation with businesses, government, and international organizations to promote ESG principles."
    },
    {
      title: "International Rankings",
      description: "Striving to improve position in international sustainability and ESG rankings."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ESG Principles at KBTU
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                KBTU's Commitment to Sustainable Development, Social Responsibility, and Transparent Governance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Three Pillars of ESG
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                KBTU's sustainable development strategy is built on three fundamental pillars
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Commitment to ESG
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  The Kazakh-British Technical University (KBTU) consistently implements a sustainable development strategy based on ESG (environmental, social, and corporate governance) principles. The adoption of these principles reflects the university's commitment to contributing to a sustainable future, ensuring transparency, inclusiveness, and a responsible attitude toward the environment and society.
                </p>
                <p>
                  KBTU's comprehensive approach to sustainable development combines the development of ESG-relevant policies with concrete achievements and clear plans for the future through the systematic integration of these values into all aspects of the university's activities.
                </p>
                <p>
                  Our university is implementing specific initiatives that confirm KBTU's broad competencies and leadership in this area.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Regulatory Documents */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Key Regulatory Documents & Policies
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                In support of its commitment to the ESG agenda, KBTU has approved and implemented the following policies:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {policies.map((policy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    <p className="text-foreground">{policy}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Evidence of ESG Commitment
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                KBTU demonstrates its commitment through comprehensive initiatives and actions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {initiative.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                KBTU strives to continuously improve its sustainability strategies, expand partnerships, and integrate ESG values into its educational, scientific, and management activities. These efforts are aimed not only at meeting international standards but also at developing a new generation of leaders capable of building a sustainable future.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ESGPrinciples;
