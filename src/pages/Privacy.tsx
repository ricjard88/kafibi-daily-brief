import PageShell from "@/components/PageShell";
import InfoPage from "@/components/InfoPage";

const Privacy = () => {
  return (
    <PageShell>
      <InfoPage
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This page explains, in plain language, what Kabifi may collect when someone visits the website and how that information is used."
      >
        <section>
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="mt-3 text-muted-foreground">
            Kabifi may receive information that you choose to provide through the
            website, such as your name, email address, company name, and any
            details you include when requesting access or contacting the team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">How We Use Information</h2>
          <p className="mt-3 text-muted-foreground">
            We use submitted information to respond to inquiries, evaluate early
            access requests, communicate about the product, and improve the
            website and product experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Analytics and Service Providers</h2>
          <p className="mt-3 text-muted-foreground">
            Kabifi may use hosting, analytics, email, and infrastructure providers
            to operate the website. Those providers may process limited technical
            information such as IP address, browser type, device data, and
            request logs as part of delivering their services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="mt-3 text-muted-foreground">
            The website may use cookies or similar technologies that help with
            security, performance, and measurement. You can control cookies
            through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Data Sharing</h2>
          <p className="mt-3 text-muted-foreground">
            Kabifi does not sell personal information collected through this
            website. Information may be shared with service providers that help
            operate the site or when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="mt-3 text-muted-foreground">
            We retain information only as long as reasonably necessary to respond
            to your request, operate the website, comply with legal obligations,
            or protect the business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Your Choices</h2>
          <p className="mt-3 text-muted-foreground">
            You may request updates or deletion of information you have provided
            to the website by contacting Kabifi through the contact page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Changes</h2>
          <p className="mt-3 text-muted-foreground">
            This policy may be updated from time to time as the website and
            product evolve. Material changes will be reflected on this page.
          </p>
        </section>
      </InfoPage>
    </PageShell>
  );
};

export default Privacy;
