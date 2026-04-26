import React from 'react';

import sunsetHero from '../Images/steel-warehouse-frame-sunset-construction-progress.jpeg';
import leadershipImage from '../Images/glass-office-partition-meeting-room.JPG';
import leadershipSupportImage from '../Images/office-brand-wall-glass-partition-design.jpeg';
import safetyImage from '../Images/industrial-wall-safety-inspection-progress.JPG';
import supplierImage from '../Images/aerial-warehouse-loading-yard-road-view.JPG';
import capabilityImage from '../Images/steel-frame-warehouse-crane-installation-progress.JPG';
import clientImage from '../Images/fuel-station-canopy-completed-after.jpeg';
import projectRoofImage from '../Images/warehouse-roof-sheeting-installation-after.JPG';
import projectRoadImage from '../Images/industrial-yard-road-marking-after.jpg';
import projectWorkshopImage from '../Images/industrial-workshop-polished-floor-after.jpeg';
import kitchenBefore from '../Images/open-plan-kitchen-renovation-progress.jpeg';
import kitchenAfter from '../Images/modern-kitchen-renovation-after.jpeg';
import restroomBefore from '../Images/modern-male-restroom-urinal-wall-design.jpeg';
import restroomAfter from '../Images/modern-male-restroom-urinal-wall-tiles-after.jpeg';
import livingBefore from '../Images/open-plan-living-area-renovation-before.jpeg';
import officeAfter from '../Images/modern-office-corridor-glass-partition-after.jpeg';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Email', href: 'mailto:anthony@acsconstruction.co.za?subject=Website%20Enquiry' }
];

const serviceColumns = [
  {
    title: 'Commercial & Industrial Construction',
    items: [
      'Warehouse construction',
      'Office buildings',
      'Industrial facilities',
      'Commercial developments',
      'Resort and hospitality construction'
    ]
  },
  {
    title: 'Interior Construction & Finishes',
    items: ['Drywall and partitioning', 'Suspended ceilings', 'Commercial painting', 'Flooring installation']
  },
  {
    title: 'Renovations & Refurbishments',
    items: [
      'Office renovations',
      'Warehouse upgrades',
      'Industrial facility improvements',
      'Commercial refurbishments'
    ]
  },
  {
    title: 'Structural & Exterior Work',
    items: [
      'Building extensions',
      'Structural modifications',
      'Exterior renovations',
      'Surface preparation and finishing'
    ]
  }
];

const projectHighlights = [
  { src: projectRoofImage, alt: 'Completed warehouse roof sheeting installation' },
  { src: projectRoadImage, alt: 'Industrial yard road marking completion' },
  { src: projectWorkshopImage, alt: 'Industrial workshop polished flooring result' }
];

const beforeAfterPairs = [
  {
    title: 'Kitchen renovation',
    before: kitchenBefore,
    after: kitchenAfter
  },
  {
    title: 'Restroom upgrade',
    before: restroomBefore,
    after: restroomAfter
  },
  {
    title: 'Interior modernization',
    before: livingBefore,
    after: officeAfter
  }
];

export default function App() {
  return (
    <div className="page" id="home">
      <header className="masthead section-divider">
        <nav className="link-row" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="logo">ACS CONSTRUCTION</div>

        <nav className="link-row right" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-space section-divider">
          <img className="section-image hero-image" src={sunsetHero} alt="Steel warehouse frame at sunset" />
          <h1>ACS Construction</h1>
          <p>
            Delivers architectural precision and industrial-grade craftsmanship, ensuring your
            commercial vision is executed with technical authority.
          </p>
        </section>

        <section className="section-space" id="who-we-are">
          <h2>Who We Are</h2>
          <p>
            ACS Construction is a growing commercial and industrial construction company with more
            than 15 years of experience delivering construction projects across South Africa.
          </p>
          <p>
            Founded in 2010, the company was established with the goal of delivering reliable,
            high-quality construction services to businesses requiring professional project
            execution.
          </p>
          <p>
            Today ACS Construction operates across South Africa with its headquarters in
            Johannesburg and a growing presence in the Western Cape, supporting commercial and
            industrial clients nationwide.
          </p>
          <p>
            The company specializes in commercial buildings, warehouse construction, industrial
            facilities, refurbishments and structural building work, managing projects from initial
            planning through to final completion.
          </p>
          <p>
            ACS Construction combines the responsiveness of a local contractor with the ability to
            deploy large teams depending on project requirements, enabling efficient delivery of
            projects of varying scale and complexity.
          </p>
        </section>

        <section className="section-space two-col section-divider">
          <article>
            <h2>Leadership</h2>
            <p>
              ACS Construction remains a family-founded business with strong operational leadership.
            </p>
            <p>
              The company was founded by its current COO, who brings extensive experience from the
              construction industry and oversees the execution and delivery of projects.
            </p>
            <p>
              The company’s expansion into the Western Cape and marketing strategy is managed by the
              Western Cape branch lead, who is responsible for growing ACS Construction’s presence
              and developing new commercial relationships.
            </p>
            <p>
              This leadership structure allows ACS Construction to maintain strong operational
              control while expanding into new regions and larger developments.
            </p>
          </article>
          <div className="image-stack">
            <img className="section-image" src={leadershipImage} alt="Glass office partition installation" />
            <img className="section-image" src={leadershipSupportImage} alt="Office brand wall and partition finish" />
          </div>
        </section>

        <section className="section-space two-col" id="projects">
          <article>
            <h2>Safety and Professional Standards</h2>
            <p>
              ACS Construction maintains strict construction site safety practices and ensures all
              teams operate within required safety standards.
            </p>
            <p>
              Safety procedures and protective equipment are monitored throughout project execution
              to ensure safe and compliant working environments.
            </p>

            <h2>Supplier Network</h2>
            <p>
              ACS Construction works closely with large material suppliers, allowing the company to
              secure competitive pricing and reliable supply chains.
            </p>
            <p>
              These long-standing supplier relationships enable ACS to procure materials quickly,
              maintain cost efficiency on projects, and remain competitive while delivering quality
              results.
            </p>

            <h2>Ideal Clients</h2>
            <p>
              ACS Construction focuses on supporting large corporates, property developers, and
              commercial landlords who require reliable contractors capable of delivering industrial
              and commercial construction projects.
            </p>
          </article>
          <div className="image-stack">
            <img className="section-image" src={safetyImage} alt="Team performing an industrial safety inspection" />
            <img className="section-image" src={supplierImage} alt="Aerial view of warehouse yard and logistics road access" />
            <img className="section-image" src={capabilityImage} alt="Crane-assisted steel frame warehouse construction" />
            <img className="section-image" src={clientImage} alt="Completed fuel station canopy project" />
          </div>
        </section>

        <section className="section-space center section-divider">
          <h2>Project Highlights</h2>
          <div className="project-grid">
            {projectHighlights.map((project) => (
              <img key={project.alt} className="section-image" src={project.src} alt={project.alt} />
            ))}
          </div>

          <h3>Before and after</h3>
          <div className="before-after-grid">
            {beforeAfterPairs.map((pair) => (
              <article key={pair.title} className="before-after-card">
                <h4>{pair.title}</h4>
                <div>
                  <img className="section-image" src={pair.before} alt={`${pair.title} before`} />
                  <img className="section-image" src={pair.after} alt={`${pair.title} after`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space" id="services">
          <h2>Our Services</h2>
          <p>
            ACS Construction is capable of managing projects from small upgrades to large commercial
            developments.
          </p>
          <div className="service-grid">
            {serviceColumns.map((service) => (
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
        </section>

        <section className="section-space" id="approach">
          <h2>Project Management Approach</h2>
          <p>
            ACS Construction provides complete construction project management, ensuring clients have
            a single contractor responsible for the delivery of their project.
          </p>
          <p>
            When required, ACS coordinates project planning, engineering coordination, workforce
            management, material procurement, site supervision, scheduling, and quality control.
          </p>
          <p>
            If a client already works with architects or engineers, ACS Construction integrates
            directly with the professional team to manage construction efficiently.
          </p>
          <p>
            This approach simplifies the construction process and ensures clear accountability and
            reliable delivery.
          </p>

          <h2>Experience</h2>
          <p>
            Over the past 15 years, ACS Construction has completed a wide range of projects
            including warehouse construction projects, large industrial roofing and painting
            projects, commercial refurbishments, and resort renovations and rebuilds.
          </p>
          <p>
            One notable project included the completion of over 41,000 square metres of warehouse
            roof work within a one-month period, demonstrating the company’s ability to mobilize
            large teams and execute projects within demanding timeframes.
          </p>

          <h2>Operational Capability</h2>
          <p>
            ACS Construction is structured to scale its workforce and equipment depending on project
            requirements.
          </p>
          <p>
            The company has successfully deployed teams of more than 50 workers on a single project
            site, allowing projects to be completed efficiently even under tight deadlines.
          </p>
          <p>
            ACS also maintains strong relationships with construction equipment providers, enabling
            rapid access to additional machinery and equipment when needed.
          </p>
        </section>

        <section className="section-space two-col section-divider">
          <div className="logo">ACS CONSTRUCTION</div>
          <article>
            <h2>Vision for the Future</h2>
            <p>
              ACS Construction’s long-term vision is to become a leading contractor in the
              development of large-scale warehouses and multi-million rand commercial construction
              projects.
            </p>
            <p>
              The company is actively expanding its presence into the Western Cape, positioning
              itself to support the growing demand for logistics facilities and commercial
              developments in the region.
            </p>
          </article>
        </section>
      </main>

      <footer className="footer section-space" id="contact">
        <div>
          <a href="#home">Home</a>
          <a href="mailto:anthony@acsconstruction.co.za?subject=Website%20Enquiry">Contact</a>
        </div>
        <p>Made with care for ACS Construction.</p>
      </footer>
    </div>
  );
}
