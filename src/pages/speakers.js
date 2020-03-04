import React from "react"
import LazyLoad from "react-lazyload"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { SpeakerCard } from "../components/cards"
import Loader from "../components/loader"
import Speakers from "../content/speakers"

const SpeakersPage = () => (
  <Layout>
    <SEO title="Speakers" />
    <Banner title="Our list of amazing speakers for the 2-day React workshop." />
    <section className="md:px-56 px-12 py-2">
      <section className="mt-12 py-4">
        <header>
          <h2 className="text-xl mb-2">Speakers</h2>
        </header>
        <p>
          We'll be having these awesome speakers at the 2-day ReactJS workshop
        </p>
        <section className="flex flex-wrap justify-around">
          {Speakers.length > 0 ? (
            Speakers.map((speaker, key) => (
              <LazyLoad
                key={key}
                height={100}
                offset={100}
                placeholder={<Loader />}
                once
              >
                <SpeakerCard key={key} {...speaker} />
              </LazyLoad>
            ))
          ) : (
            <p className="py-6 mt-4 text-blue-600">
              We'll be updating this page with the list of speakers soon.
            </p>
          )}
        </section>
      </section>
    </section>
  </Layout>
)

export default SpeakersPage
