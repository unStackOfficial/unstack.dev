import React from "react"
import { Link } from "gatsby"

import { SpeakerCard, OrganizerCard, SponsorCard } from "../components/cards"
import Organizers from "../content/organizers"
import Speakers from "../content/speakers"
import Sponsors from "../content/sponsors"

const AboutSection = () => (
  <section className="mt-24 py-4">
    <header>
      <h2 className="text-xl mb-2">About unStack</h2>
    </header>
    <p>
      unStack is a community of passionate developers, designers, and other
      technical talents. unStack is mostly focused onhelping the audience gain
      an in-dept understanding of any chosen topic area through hands-on
      technical workshops and conferences around the web, mobile, and other
      emerging technologies.
    </p>
  </section>
)

const UpcomingSection = () => (
  <section className="mt-12 py-4">
    <header>
      <h2 className="text-xl mb-2">Upcoming Event</h2>
    </header>
    <p>
      unstack will be holding a 2-day React workshop for beginners &
      intermediates. Get ready to go from Zero to having knowledge to build
      React apps{" "}
      <span role="img" aria-label="fire emoji">
        🔥🔥
      </span>
    </p>
  </section>
)

const SpeakerSection = () => (
  <section className="mt-12 py-4">
    <header>
      <h2 className="text-xl mb-2">Speakers</h2>
    </header>
    <p>
      Here are <i>some</i> of the awesome speakers for the 2-day ReactJS
      workshop
    </p>
    <section className="flex flex-wrap justify-around">
      {Speakers.length > 0 ? (
        Speakers.slice(0, 9).map((speaker, key) => (
          <SpeakerCard key={key} {...speaker} />
        ))
      ) : (
        <p className="py-6 mt-4 text-blue-600">
          We'll be updating this page with the list of speakers soon.
        </p>
      )}
    </section>
    <section className="mt-10 py-4">
      <Link
        className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-3 px-8 rounded-full"
        to="/speakers"
      >
        See all speakers
      </Link>
    </section>
  </section>
)

const SponsorSection = () => (
  <section className="mt-12 py-4">
    <header>
      <h2 className="text-xl mb-2">Sponsors</h2>
    </header>
    <p>unStack events are possible thanks to our wonderful sponsors.</p>

    <section className="flex flex-wrap justify-between mt-4">
      {Sponsors.length > 0 ? (
        Sponsors.map((sponsor, key) => <SponsorCard key={key} {...sponsor} />)
      ) : (
        <p className="py-6 mt-4 text-blue-600">
          We'll be updating this page with the list of sponsors soon.
        </p>
      )}
    </section>
  </section>
)

const OrganizerSection = () => (
  <section className="mt-12 py-4" id="organizers">
    <header>
      <h2 className="text-xl mb-2">Organizers</h2>
    </header>
    <p>
      unStack is organized by these awesome{" "}
      <span role="img" aria-label="fire emoji">
        😎
      </span>{" "}
      individuals.
    </p>
    <section className="flex flex-wrap justify-around mt-4">
      {Organizers.map((organizer, key) => {
        return <OrganizerCard key={key} {...organizer} />
      })}
    </section>
  </section>
)

const RsvpSection = () => (
  <section className="mt-12 py-4 text-center" id="rsvp">
    <header>
      <h2 className="text-xl mb-2">Register to attend</h2>
    </header>
    <p>Please register to attend the next unStack event.</p>
    <section className="mt-10 py-4">
      <a
        className="ep_embed_btn bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-3 px-16 rounded-full"
        href="https://eventprime.co/e/unstack-2day-reactjs-workshop"
        data-wid="ep_widget_1229"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get Tickets
      </a>
    </section>
  </section>
)

export {
  AboutSection,
  UpcomingSection,
  SpeakerSection,
  SponsorSection,
  OrganizerSection,
  RsvpSection,
}
