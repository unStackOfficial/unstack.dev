import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

import PageContainer from "../components/page-container"
import {
  UpcomingSection,
  SpeakerSection,
  SponsorSection,
  OrganizerSection,
  RsvpSection,
  AboutSection,
} from "../components/home-page-sections"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <PageContainer>
      <AboutSection />
      <UpcomingSection />
      <SpeakerSection />
      <SponsorSection />
      <OrganizerSection />
      <RsvpSection />
    </PageContainer>
  </Layout>
)

export default IndexPage
