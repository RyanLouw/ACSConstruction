const serviceList = [
  'Roof spraying',
  'New Build Construction',
  'Interior Fit-outs',
  'Commercial & Industrial',
  'Renovations & Refurbishments'
];

const projectCards = [
  'Warehouse build',
  'Office fit-out',
  'Roofing installation',
  'Exterior repaint',
  'Concrete works',
  'Retail refurbishment'
];

export default function App() {
  return (
    <div>
      <header className="top-header">
        <nav>
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
        </nav>
        <h1>ACS Construction</h1>
      </header>

      <main>
        <section id="home" className="section hero">
          <h2>Built with precision.</h2>
          <p>
            Commercial and industrial construction built around safe delivery, strong planning,
            and dependable results.
          </p>
          <a className="btn" href="#contact">
            Contact Us
          </a>
        </section>

        <section className="section">
          <h3>What we do</h3>
          <ul className="chip-list">
            {serviceList.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3>Our Projects</h3>
          <div className="project-grid">
            {projectCards.map((project) => (
              <article key={project} className="project-card">
                <div className="img-placeholder" aria-hidden="true" />
                <p>{project}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h3>Contact Us</h3>
          <p>Click the button below to open your email app and send us a message.</p>
          <a
            className="btn"
            href="mailto:anthony@acsconstruction.co.za?subject=Website%20Enquiry"
          >
            Email ACS Construction
          </a>
        </section>
      </main>
    </div>
  );
}
