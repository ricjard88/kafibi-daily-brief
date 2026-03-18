import { motion } from "framer-motion";

const briefItems = [
  {
    borderColor: "border-l-primary",
    label: "Inventory Alert",
    text: 'Rush PO for "Heritage Denim" — stock will deplete by Thursday.',
    action: "Create PO",
  },
  {
    borderColor: "border-l-secondary",
    label: "Rebalance",
    text: "Move 24 units of Coastal Tee from Warehouse → Store #2. Selling 3× faster there.",
    action: "Approve Move",
  },
  {
    borderColor: "border-l-accent",
    label: "Promo Check",
    text: "Weekend promo on Linen Pants is eroding margin. Consider ending 1 day early.",
    action: "Review",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] as const } },
};

const DailyBrief = () => {
  return (
    <section className="py-12 px-6 border-b border-border">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Your Daily Brief — March 18, 2026
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
          Today's priorities
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-primary/5 border border-primary/15 p-1"
        >
          {briefItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`flex items-start gap-4 p-5 border-l-4 ${item.borderColor} bg-background mb-px last:mb-0`}
            >
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
                  {item.label}
                </p>
                <p className="text-base font-medium text-foreground">{item.text}</p>
              </div>
              <button className="text-xs font-semibold border border-primary text-primary px-3 py-1.5 shrink-0 hover:bg-primary hover:text-primary-foreground transition-colors">
                {item.action}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DailyBrief;