import PageShell from "@/components/PageShell";
import InfoPage from "@/components/InfoPage";

const Contact = () => {
  return (
    <PageShell>
      <InfoPage
        eyebrow="Contact"
        title="Contact Kabifi"
        intro="Kabifi works with retail operators and partners who want clearer daily priorities, better inventory decisions, and fewer operational surprises."
      >
        <section>
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-3 text-muted-foreground">
            The fastest way to reach the team is through the early access request
            form on the homepage. Please include your name, company, role, and a
            short note about what you want to improve in your retail operations.
          </p>
          <div className="mt-6">
            <a
              href="/#early-access"
              className="inline-block bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go to Request Invite
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Who Should Reach Out</h2>
          <p className="mt-3 text-muted-foreground">
            We welcome conversations with operators, finance leaders, inventory
            teams, and retail partners who want practical, data-backed guidance
            on what to do next.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Business Information</h2>
          <p className="mt-3 text-muted-foreground">
            Company name: Kabifi
            <br />
            Website: https://www.kabifi.com
          </p>
        </section>
      </InfoPage>
    </PageShell>
  );
};

export default Contact;
