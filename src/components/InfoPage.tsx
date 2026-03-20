import { ReactNode } from "react";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

const InfoPage = ({ eyebrow, title, intro, children }: InfoPageProps) => {
  return (
    <section className="px-6 pb-16 pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
        <div className="mt-10 space-y-8 text-base leading-7 text-foreground">
          {children}
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
