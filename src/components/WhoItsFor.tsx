import { motion } from "framer-motion";

const traits = [
  { label: "1–3 locations", color: "border-l-primary" },
  { label: "Shopify or similar online store", color: "border-l-secondary" },
  { label: "Running their own product line alongside other brands", color: "border-l-accent" },
];

const WhoItsFor = () => {
  return (
    <section className="py-12 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Audience
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Who it's for
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Hybrid retailers and emerging CPG brands:
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          {traits.map((trait, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-5 border border-border border-l-4 ${trait.color} bg-background`}
            >
              <span className="font-mono text-xs text-accent tracking-widest w-8">
                0{i + 1}
              </span>
              <p className="text-base font-medium text-foreground">{trait.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;