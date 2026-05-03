import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { PageHeader } from '@/components/ui/PageHeader';

export default function ContactPage() {
  return (
    <div className="py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <PageHeader
            title="Let’s Talk"
            subtitle="Ready to discuss your architectural modernization needs? Reach out to start a conversation."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section>
            <h2 className="text-3xl tracking-tight mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-fg-60 leading-relaxed mb-8">
              Whether you&apos;re planning a major modernization initiative, need a technical audit, or just want to explore what&apos;s possible, I&apos;d be happy to discuss your situation.
            </p>
            <p className="text-fg-60 leading-relaxed mb-8">
              I typically respond within 24 hours. For urgent inquiries, please mention that in your message.
            </p>

            <div className="space-y-4">
  {/* Email Link */}
  <a
    href="mailto:hello@graycoastweb.com"
    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border
               transition-all duration-300 ease-out group
               hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
  >
    <div className="p-2 rounded-md bg-primary/5 transition-colors group-hover:bg-primary/10">
      <Mail className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
    </div>
    <div>
      <p className="text-foreground font-medium group-hover:text-primary transition-colors mb-0">Email</p>
      <p className="text-sm text-fg-60 mb-0">hello@graycoastweb.com</p>
    </div>
  </a>

  {/* LinkedIn Link */}
  <a
    href="https://linkedin.com/in/graycoastweb"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border
               transition-all duration-300 ease-out group
               hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
  >
    <div className="p-2 rounded-md bg-primary/5 transition-colors group-hover:bg-primary/10">
      <LinkedinIcon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
    </div>
    <div>
      <p className="text-foreground font-medium group-hover:text-primary transition-colors mb-0">LinkedIn</p>
      <p className="text-sm text-fg-60 mb-0">Connect professionally</p>
    </div>
  </a>

  {/* GitHub Link */}
  <a
    href="https://github.com/graycoastweb"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border
               transition-all duration-300 ease-out group
               hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1.15"
  >
    <div className="p-2 rounded-md bg-primary/5 transition-colors group-hover:bg-primary/10">
      <GithubIcon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
    </div>
    <div>
      <p className="text-foreground font-medium group-hover:text-primary transition-colors mb-0">GitHub</p>
      <p className="text-sm text-fg-60 mb-0">View open source contributions</p>
    </div>
  </a>
</div>
          </section>

          <aside className="space-y-8">
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-xl mb-4 text-foreground font-semibold">
                Initial Consultation
              </h3>
              <p className="text-fg-60 leading-relaxed mb-4">
                Our first conversation is always exploratory and no-commitment. We&apos;ll discuss:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Your current technical challenges and constraints</span>
                </li>
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Business objectives driving modernization needs</span>
                </li>
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Potential approaches and tradeoffs</span>
                </li>
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Whether my expertise aligns with your needs</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-xl mb-4 text-foreground font-semibold">
                What to Include
              </h3>
              <p className="text-fg-60 leading-relaxed mb-4">
                Help me understand your context by sharing:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Brief description of your technical environment</span>
                </li>
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Specific challenges or goals</span>
                </li>
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Team size and structure</span>
                </li>
                <li className="flex gap-2 text-fg-60">
                  <span className="text-primary mt-1">•</span>
                  <span>Timeline expectations</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="p-16 text-center rounded-sm border transition-all duration-500 bg-primary/5 text-foreground border-primary/10"
              >
                <h2 className="text-4xl font-light mb-8">
                  Not Sure Where to Start?
                </h2>

                <p className="text-fg-60 mb-6 max-w-xl mx-auto font-light mb-6">
            That&apos;s completely normal. Many organizations know they need to modernize but aren&apos;t sure of the best approach. A brief conversation can help clarify options and next steps.
          </p>
          <p className="text-fg-60 max-w-xl mx-auto font-light">
            Feel free to reach out even if you&apos;re still in the exploratory phase—I&apos;m happy to discuss your situation without any commitment.
          </p>
        </div>
    </div>
    </div>
  );
}