const services = [
  {
    title: 'Commercial & Industrial Construction',
    items: ['Warehouse construction', 'Office fit-outs', 'Retail refurbishments', 'General building works']
  },
  {
    title: 'Renovations & Refurbishments',
    items: ['Interior upgrades', 'Structural alterations', 'Tenant improvements', 'Turnkey finishes']
  },
  {
    title: 'Interior Construction & Finishes',
    items: ['Drywall and partitions', 'Suspended ceilings', 'Flooring and tiling', 'Painting and detailing']
  },
  {
    title: 'Structural & Exterior Work',
    items: ['Roof spraying', 'Waterproofing', 'Exterior repairs', 'Steelwork and cladding']
  }
];

const projectLabels = [
  'Warehouse Development',
  'Roof Installation',
  'Steel Structure',
  'Office Refurbishment',
  'Commercial Interior',
  'Industrial Site',
  'Concrete Pumping',
  'Drywall Fit-out',
  'Retail Build-out'
];

export default function App() {
  return (
    <div className="page">
      <header className="top-bar" id="home">
        <nav className="top-links">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="brand">ACS CONSTRUCTION</div>
      </header>

      <main>
        <section className="hero-section section-divider">
          <a className="btn" href="#contact">
            CONTACT US
          </a>
          <div className="hero-card">
            <div className="hero-image" aria-hidden="true" />
            <h1>ACS Construction</h1>
            <p>
              Delivers architectural precision and industrial-grade craftsmanship, ensuring your
              commercial vision is executed with technical authority.
            </p>
          </div>
        </section>

        <section className="ticker section-divider" aria-label="Services ticker">
          <p>
            • Roof spraying • New Build Construction • Interior Fit-outs • Roof spraying • New Build
            Construction • Interior Fit-outs •
          </p>
        </section>

        <section className="about-grid section-space">
          <article>
            <h2>Who We Are</h2>
            <p>
              ACS Construction is a growing commercial and industrial construction company with over
              15 years of experience delivering construction projects across South Africa.
            </p>
            <p>
              Founded in 2010, the company was established with the goal of delivering reliable,
              high-quality construction services to businesses requiring professional project
              execution.
            </p>
          </article>
          <div className="logo-block" aria-label="ACS logo placeholder">
            ACS
          </div>
        </section>

        <section className="split-cards section-space">
          <article>
            <div className="photo tall" />
            <h3>Safety and Professional Standards</h3>
            <p>
              Safety procedures and protocols are monitored throughout project execution to ensure
              safe and compliant work environments.
            </p>
          </article>
          <article>
            <div className="photo wide" />
            <h3>Leadership</h3>
            <p>
              Every site is managed by experienced supervisors and foremen, ensuring on-time
              delivery and consistent quality.
            </p>
          </article>
        </section>

        <section className="clients section-space">
          <h2>Our most trusted clients</h2>
          <div className="client-logos">
            <span>amazon</span>
            <span>digiistics</span>
            <span>Imperial</span>
            <span>CEVA</span>
            <span>DP WORLD</span>
          </div>
        </section>

        <section className="services-layout section-space">
          <div className="photo large" />
          <div>
            <h2>Our Services</h2>
            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title}>
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <a className="btn dark" href="#contact">
              WORK WITH US
            </a>
          </div>
        </section>

        <section className="projects section-space">
          <h2>Our Projects</h2>
          <div className="project-grid">
            {projectLabels.map((label) => (
              <article key={label} className="project-item">
                <div className="photo" />
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-space">
          <article>
            <h2>Project Management Approach</h2>
            <p>
              ACS Construction provides complete construction project management, ensuring clients
              have a single contractor responsible for delivery.
            </p>
          </article>
          <div className="experience-row">
            <div className="video-placeholder">Video</div>
            <article>
              <h3>Experience</h3>
              <p>
                Over the past 15 years, ACS Construction has completed warehouse projects, industrial
                roofing and painting works, commercial refurbishments, and resort renovations.
              </p>
            </article>
          </div>
        </section>

        <section className="vision section-space section-divider">
          <div className="logo-block">ACS</div>
          <article>
            <h2>Vision for the Future</h2>
            <p>
              ACS Construction’s long-term vision is to become a leading contractor in the
              development of large-scale warehouses and multi-million rand commercial construction
              projects.
            </p>
          </article>
        </section>
      </main>

      <footer id="contact" className="footer">
        <nav>
          <a href="#home">HOME</a>
          <a href="mailto:anthony@acsconstruction.co.za?subject=Website%20Enquiry">CONTACT</a>
        </nav>
        <div className="brand">ACS CONSTRUCTION</div>
        <a className="btn" href="mailto:anthony@acsconstruction.co.za?subject=Website%20Enquiry">
          EMAIL US
        </a>
      </footer>
    </div>
  );
}
