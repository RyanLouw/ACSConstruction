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
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact-us' }
];

const contactEmail = 'anthony@acsconstruction.co.za';

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Email', href: `mailto:${contactEmail}?subject=Website%20Enquiry` }
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

const showcaseImages = [
  { src: projectRoofImage, alt: 'Completed warehouse roof sheeting installation' },
  { src: projectRoadImage, alt: 'Industrial yard road marking completion' },
  { src: projectWorkshopImage, alt: 'Industrial workshop polished flooring result' },
  { src: leadershipImage, alt: 'Glass office partition installation' },
  { src: leadershipSupportImage, alt: 'Office brand wall and partition finish' },
  { src: safetyImage, alt: 'Team performing an industrial safety inspection' },
  { src: supplierImage, alt: 'Aerial view of warehouse yard and logistics road access' },
  { src: capabilityImage, alt: 'Crane-assisted steel frame warehouse construction' },
  { src: clientImage, alt: 'Completed fuel station canopy project' }
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
    title: 'Office interior upgrade',
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
        </section>

        <section className="section-space section-divider">
          <h2>Project Gallery</h2>
          <p>Live project progress and completed results from ACS Construction sites.</p>
          <div className="infinite-gallery" aria-label="Scrolling project gallery">
            <div className="infinite-track">
              {[...showcaseImages, ...showcaseImages].map((image, index) => (
                <img key={`${image.alt}-${index}`} className="section-image gallery-image" src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space center section-divider" id="projects">
          <h3>Before and after</h3>
          <div className="before-after-grid">
            {beforeAfterPairs.map((pair) => (
              <article key={pair.title} className="before-after-card">
                <h4>{pair.title}</h4>
                <div className="comparison-grid">
                  <figure className="comparison-item">
                    <figcaption>Before</figcaption>
                    <img className="section-image comparison-image" src={pair.before} alt={`${pair.title} before`} />
                  </figure>
                  <figure className="comparison-item">
                    <figcaption>After</figcaption>
                    <img className="section-image comparison-image" src={pair.after} alt={`${pair.title} after`} />
                  </figure>
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
        </section>

        <section className="section-space contact-section" id="contact-us">
          <h2>Contact Us</h2>
          <p>
            Send us your project details and our team will get back to you. Clicking the email below
            opens your default email service (Gmail, Outlook, Apple Mail, etc.).
          </p>
          <a className="contact-email" href={`mailto:${contactEmail}?subject=Website%20Enquiry`}>
            {contactEmail}
          </a>
        </section>

      </main>

      <footer className="footer section-space" id="contact">
        <div>
          <a href="#home">Home</a>
          <a href={`mailto:${contactEmail}?subject=Website%20Enquiry`}>Contact</a>
        </div>
        <p>Made with care for ACS Construction.</p>
      </footer>
    </div>
  );
}
