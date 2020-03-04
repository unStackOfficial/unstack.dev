import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const Schedule = () => (
  <Layout>
    <SEO title="Schedule" />
    <Banner title="Schedule of events, 2-day React workshop." />
    <section className="md:px-56 px-12 py-2">
      <section className="mt-12 py-4">
        <header>
          <h2 className="text-xl mb-2">Schedule</h2>
        </header>
        <p>Here's a schedule of events for the 2-day ReactJS workshop</p>
        <section className="mt-4">
          <iframe
            title="schedule"
            id="schedule-iframe"
            src="https://conference-schedule.netlify.com"
            frameBorder="0"
            className="w-full h-screen"
          ></iframe>
        </section>
      </section>
    </section>
  </Layout>
)

export default Schedule
