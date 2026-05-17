import './App.css';

const navItems = ['Story', 'Capabilities', 'Proof', 'Model', 'Insights', 'Contact'];

const chips = ['D365FO', 'ERP Governance', 'AI Transformation', 'Multi-Country Delivery', 'PMP Certified'];

const chapters = [
  {
    number: '01',
    icon: 'compass',
    title: 'A leader who connects strategy to outcomes.',
    text: 'From boardroom intent to operational value—bridging business, technology and people.',
  },
  {
    number: '02',
    icon: 'shield',
    title: 'Governance that unlocks confidence.',
    text: 'Setting the right guardrails, rhythms and decisions to move at scale.',
  },
  {
    number: '03',
    icon: 'spark',
    title: 'AI-enabled change that delivers.',
    text: 'Applying AI responsibly to elevate experiences and accelerate results.',
  },
  {
    number: '04',
    icon: 'globe',
    title: 'Global delivery. Local impact.',
    text: 'Multi-country rollouts with cultural intelligence and operational rigor.',
  },
];

const capabilities = [
  {
    icon: 'cube',
    title: 'ERP & D365FO Delivery',
    text: 'End-to-end delivery across Finance, Supply Chain, HR and beyond on Microsoft D365FO.',
  },
  {
    icon: 'shield',
    title: 'Transformation Governance',
    text: 'Frameworks, steering, RAID and benefits governance to ensure control, visibility and continuous course correction.',
  },
  {
    icon: 'spark',
    title: 'AI-Enabled Change',
    text: 'Use cases of AI adoption that drive efficiency, intelligence and better decisions.',
  },
  {
    icon: 'globe',
    title: 'Multi-Country Rollouts',
    text: 'Coordinated programs across regions with localization, compliance and adoption at the core.',
  },
];

const proof = [
  {
    tag: 'Manufacturing',
    title: 'Global D365FO Rollout',
    text: 'Led multi-country D365FO rollout across 12 countries for a global manufacturer.',
    stats: [
      ['12', 'Countries'],
      ['18', 'Months'],
      ['99%', 'Uptime'],
    ],
    accent: 'cyan',
  },
  {
    tag: 'Retail & Distribution',
    title: 'ERP Modernization',
    text: 'Transformed legacy ERP to D365FO with unified processes and real-time visibility.',
    stats: [
      ['35%', 'Process Efficiency'],
      ['25%', 'Inventory Optimization'],
      ['20%', 'Cost Savings'],
    ],
    accent: 'violet',
  },
  {
    tag: 'Professional Services',
    title: 'AI-Driven Finance Transformation',
    text: 'Implemented AI-driven automation across finance close, forecasting and reporting.',
    stats: [
      ['40%', 'Faster Close'],
      ['30%', 'Manual Effort'],
      ['100%', 'Audit Readiness'],
    ],
    accent: 'pink',
  },
];

const operatingModel = [
  ['Discover', 'Align on outcomes, assess current state and opportunities.', 'search'],
  ['Govern', 'Set direction, decisions, priorities and performance guardrails.', 'shield'],
  ['Build', 'Design, configure and integrate with quality and speed.', 'code'],
  ['Validate', 'Test, validate and ensure readiness for change.', 'check'],
  ['Stabilize', 'Hypercare, adoption and continuous improvement.', 'trend'],
];

function Icon({ name }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></>,
    shield: <path d="M12 3 5.5 5.3v5.2c0 4.4 2.7 8.4 6.5 10.1 3.8-1.7 6.5-5.7 6.5-10.1V5.3L12 3Z" />,
    spark: <><path d="M12 3v5" /><path d="M12 16v5" /><path d="M3 12h5" /><path d="M16 12h5" /><path d="m5.8 5.8 2.4 2.4" /><path d="m15.8 15.8 2.4 2.4" /><path d="m18.2 5.8-2.4 2.4" /><path d="m8.2 15.8-2.4 2.4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.4 2.3 3.6 5.3 3.6 9s-1.2 6.7-3.6 9c-2.4-2.3-3.6-5.3-3.6-9S9.6 5.3 12 3Z" /></>,
    cube: <><path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12.5 2.5 2.5L16 9" /></>,
    trend: <><path d="M4 18h16" /><path d="M5 15 10 9l4 4 5-8" /><path d="M15 5h4v4" /></>,
    linkedin: <><path d="M6.5 10v8" /><path d="M6.5 6v.1" /><path d="M10.5 18v-8" /><path d="M10.5 13.5c0-2 1.2-3.5 3-3.5s3 1.2 3 3.5V18" /><rect x="3" y="3" width="18" height="18" rx="3" /></>,
    mail: <><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></>,
    pin: <><path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  };
  return <svg aria-hidden="true" {...common}>{paths[name]}</svg>;
}

function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="sectionHeader">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action && <a className="sectionLink" href="#contact">{action} <Icon name="arrow" /></a>}
    </div>
  );
}

export default function App() {
  return (
    <main className="siteShell">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <header className="topbar">
        <a className="brand" href="#story" aria-label="Kirtan Dave home">
          <span className="brandMark">KD</span>
          <span>
            <strong>Kirtan Dave</strong>
            <small>ERP • D365FO • AI Transformation • Program Delivery</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="navCta" href="mailto:kirtan.dave@proton.me">Discuss Opportunity <Icon name="arrow" /></a>
      </header>

      <section id="story" className="hero sectionPad">
        <div className="heroCopy revealUp">
          <p className="pill">Transformation Leader. Program Thinker. Delivery Partner.</p>
          <h1>Build the future of enterprise change with <span>control, clarity and pace.</span></h1>
          <p className="heroText">I partner with organizations to bring order, pace and measurable value to complex ERP, digital and AI transformation programs.</p>
          <div className="chipGrid">
            {chips.map((chip, index) => <span key={chip} className="chip"><Icon name={index === 0 ? 'cube' : index === 1 ? 'shield' : index === 2 ? 'spark' : index === 3 ? 'globe' : 'check'} />{chip}</span>)}
          </div>
          <div className="heroActions">
            <a className="primaryBtn" href="mailto:kirtan.dave@proton.me">Discuss a transformation role <Icon name="arrow" /></a>
            <a className="secondaryBtn" href="/Kirtan-Dave-CV.pdf" download>Download CV <Icon name="download" /></a>
          </div>
        </div>

        <div className="heroVisual revealUp delayOne">
          <div className="portraitFrame">
            <img src="/assets/kirtan-headshot.png" alt="Kirtan Dave professional headshot" />
            <div className="dotMatrix" />
          </div>
          <div className="metricGlass">
            <strong>15+</strong>
            <span>Years in Enterprise<br />Transformation</span>
            <i className="sparkLine" />
          </div>
        </div>
      </section>

      <section className="chapterRail revealUp" aria-label="Transformation chapters">
        {chapters.map((chapter) => (
          <article key={chapter.number} className="chapterCard">
            <div className="iconBadge"><Icon name={chapter.icon} /></div>
            <div>
              <p>Chapter {chapter.number}</p>
              <h3>{chapter.title}</h3>
              <span>{chapter.text}</span>
            </div>
          </article>
        ))}
      </section>

      <section id="capabilities" className="sectionPad compact">
        <SectionHeader eyebrow="Capabilities" title="Where I help create impact" action="Explore all capabilities" />
        <div className="capabilityGrid">
          {capabilities.map((capability) => (
            <article className="whiteCard" key={capability.title}>
              <div className="iconBadge soft"><Icon name={capability.icon} /></div>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <a href="#contact">Learn more <Icon name="arrow" /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="sectionPad compact">
        <SectionHeader eyebrow="Proof of Delivery" title="Real programs. Real outcomes." action="View more case studies" />
        <div className="proofGrid">
          {proof.map((item) => (
            <article className={`proofCard accent-${item.accent}`} key={item.title}>
              <span>{item.tag}</span>
              <button aria-label={`Open ${item.title} case study`}><Icon name="arrow" /></button>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="statRow">
                {item.stats.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <small>{label}</small>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="model" className="sectionPad compact">
        <SectionHeader eyebrow="Operating Model" title="A proven rhythm for transformation" />
        <div className="flowGrid">
          {operatingModel.map(([title, text, icon], index) => (
            <article className="flowCard" key={title}>
              <div className="iconBadge soft"><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              {index < operatingModel.length - 1 && <span className="flowArrow">›</span>}
            </article>
          ))}
        </div>
      </section>

      <section id="insights" className="insightBand revealUp">
        <div>
          <p className="eyebrow">Insights</p>
          <h2>Transformation succeeds when governance, adoption and delivery cadence move together.</h2>
        </div>
        <p>Use the portfolio as a recruiter-facing proof layer: keep the content outcome-led, concise and easy to scan on mobile.</p>
      </section>

      <section id="contact" className="ctaPanel revealUp">
        <div>
          <p className="eyebrow">Let’s build what’s next</p>
          <h2>Ready to drive meaningful change—together?</h2>
          <p>Open to leadership roles and advisory partnerships in ERP, Digital and AI Transformation.</p>
        </div>
        <div className="contactStack">
          <a href="mailto:kirtan.dave@proton.me"><Icon name="mail" /> kirtan.dave@proton.me</a>
          <span><Icon name="pin" /> Dubai, UAE</span>
          <a href="https://www.linkedin.com/in/kirtandave" target="_blank" rel="noreferrer"><Icon name="linkedin" /> linkedin.com/in/kirtandave</a>
        </div>
        <a className="primaryBtn" href="mailto:kirtan.dave@proton.me">Discuss Opportunity <Icon name="arrow" /></a>
      </section>

      <footer className="footer">
        <a className="brand smallBrand" href="#story"><span className="brandMark">KD</span><span><strong>Kirtan Dave</strong><small>© 2026 All rights reserved.</small></span></a>
        <div><a href="#">Privacy Policy</a><a href="https://www.linkedin.com/in/kirtandave" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
    </main>
  );
}
