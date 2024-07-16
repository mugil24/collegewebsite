import React from 'react'
import './AboutComponent.css'

const AboutComponent = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <h1>Saveetha Engineering College (Autonomous)</h1>
  </header>
);

const Content = () => (
  <main className="content">
    <section className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to SEC - Saveetha Engineering College (Autonomous), a distinguished institution established in 2001 under the visionary leadership of Dr. N. M. Veeraiyan— a committed medical professional and philanthropist par excellence. With over 35 years of unwavering commitment to excellence in education, our college has emerged as the forefront of engineering education and research.
      </p>
    </section>

    <section className="affiliations">
      <h2>Affiliation/Accreditations</h2>
      <ul>
        <li>Autonomous institution affiliated with Anna University</li>
        <li>Approved by AICTE</li>
        <li>NBA accreditation for 5 undergraduate courses</li>
        <li>SIRO recognition by DSIR Government of India</li>
        <li>An 'A' grade from NAAC</li>
        <li>Ranked by NIRF</li>
      </ul>
    </section>

    <section className="courses">
      <h2>Courses Offered</h2>
      <p>
        Our academic offerings include a variety of programs designed to prepare learners for the challenges of Industry 5.0. We offer full-time four-year B.E/B.Tech UG programs across 13 cutting-edge branches such as AI/DS, AI/ML, CSE, IT, CSE (IoT), CSE (Cybersecurity), ECE, EEE, BME, Civil, Mechanical, Agriculture, and Chemical.
      </p>
      <p>
        For those seeking advanced studies, we provide Two-Year PG programs in VLSI, Software Engineering, and MBA.
      </p>
    </section>

    <section className="highlights">
      <h2>Highlights</h2>
      <p>
        At Saveetha Engineering College, we understand the importance of adapting the learner-centric education relevant to the 21st-century skillset. This is why we are among the first in India to implement the 'Saveetha Flexi Learn' where learners can select subjects, faculty, schedule & domain electives.
      </p>
      <p>
        Our robust placement records speak volumes about the efficacy of our educational model, with more than 93% of our learners consistently securing employment. Our graduates have secured positions with some of the top companies worldwide, achieving the Highest CTC of ₹34 Lakhs and an average CTC of ₹5.36 Lakhs.
      </p>
      <p>
        SEC has 32 Centres of Excellence in AI/ML, Data Science, Drone, Robotics, Self-Driving Cars, Electric Vehicles, Digital Twin & AR/VR, JAVA Full Stack Development, MERN Stack, Blockchain, Game Development, Mobile App Development, 3D Design & Printing, IoT, Cloud Computing, Edge Computing, Chip Design, PCB Design and Manufacturing, Fully Automated Surface Mount Tech, ARM Microcontrollers, Renewable Energy, MEMS, Nanotechnology, etc. to prepare learners not just for the current job market, but for the technological challenges of the future.
      </p>
      <p>
        We are also proud to own the world's most powerful AI supercomputing facility, the NVIDIA DGX H100, setting our learners apart in the field of advanced computation.
      </p>
      <p>
        At SEC, we don't just teach engineering; we inspire future innovators and leaders to achieve greatness in every endeavor. Join us to be a part of this exciting journey towards becoming a pioneer in engineering and technology.
      </p>
    </section>
  </main>
);




  


export default AboutComponent
