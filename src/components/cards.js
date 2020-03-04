import React from "react"
import PropTypes from "prop-types"

const reactWorkshopImage =
  "https://res.cloudinary.com/kingisaac95/image/upload/v1581518763/unstack_assets/reactjs-workshop.jpg"
const imagePlaceholder =
  "https://res.cloudinary.com/kingisaac95/image/upload/v1581518763/unstack_assets/image-placeholder.png"
const twitterLogo =
  "https://res.cloudinary.com/kingisaac95/image/upload/v1581518762/unstack_assets/twitter-logo.png"

const WorkshopCard = () => (
  <section className="event-highlight md:absolute max-w-sm bg-white shadow-lg">
    <figure>
      <img
        className="w-full animate-image"
        src={reactWorkshopImage}
        alt="react workshop"
      />
    </figure>
    <section className="px-6 py-4 animate-content">
      <article>
        <header>
          <h2 className="text-xl mb-2">2-day ReactJS Workshop</h2>
        </header>
        <section className="text-base text-gray-700">
          <p className="mb-2">Date: 20th - 21st March 2020</p>
          <p className="mb-2">Time: 10:00am till 4:30pm (Each Day)</p>
          <p className="">Venue: The Zone, Gbagada, Lagos, Nigeria.</p>
        </section>
      </article>
      <section className="px-6 py-4 text-center">
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #unstack
        </p>
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #react
        </p>
      </section>
      <footer className="flex justify-center px-6 py-4">
        <a
          className="ep_embed_btn bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-3 px-16 rounded-full"
          href="https://eventprime.co/e/unstack-2day-reactjs-workshop"
          data-wid="ep_widget_1229"
          rel="noopener noreferrer"
          target="_blank"
        >
          Save a seat
        </a>
      </footer>
    </section>
  </section>
)

const SpeakerCard = ({ name, work, title, twitterHandle, imageSrc }) => (
  <section className="flex flex-col items-center max-w-sm bg-white mt-6 md:mr-6">
    <figure className="md:h-56 md:w-56 h-40 w-40">
      <img
        className="md:h-56 md:w-56 h-40 w-40 rounded-full md:rounded-none h-40 w-40 mx-auto md:mx-0 md:mr-6"
        src={imageSrc != null ? imageSrc : imagePlaceholder}
        alt="speaker placeholder"
      />
    </figure>
    <article className="md:w-56 text-center md:text-left md:mt-0 mt-6 py-6">
      <header>
        <h2 className="text-lg">{name}</h2>
      </header>
      <p className="text-blue-700 text-sm">{work}</p>
      <p className="text-gray-700 italic text-sm mt-2">{title}</p>
      <section className="text-gray-600 text-sm inline-flex items-center mt-4">
        <figure>
          <img className="w-4 mx-auto" src={twitterLogo} alt="twitter logo" />
        </figure>
        <a
          className="ml-2"
          rel="noopener noreferrer"
          target="_blank"
          href={`https://twitter.com/${twitterHandle}`}
        >
          @{twitterHandle}
        </a>
      </section>
    </article>
  </section>
)

SpeakerCard.prototype = {
  name: PropTypes.string,
  work: PropTypes.string,
  title: PropTypes.string,
  twitterHandle: PropTypes.string,
  imageSrc: PropTypes.string,
}

SpeakerCard.defaultProps = {
  name: "",
  work: "",
  title: "",
  twitterHandle: "",
  imageSrc: "",
}

const OrganizerCard = ({ name, work, title, twitterHandle, imageSrc }) => (
  <section className="relative max-w-sm shadow-lg hover:shadow-none bg-white mt-32 mr-2 rounded-md py-2 px-4">
    <section className="absolute oranizer-image h-40 w-40 rounded-full bg-white">
      <figure>
        <img
          className="h-40 w-40 rounded-full"
          src={imageSrc != null ? imageSrc : imagePlaceholder}
          alt={name}
        />
      </figure>
    </section>
    <section className="px-5 py-4 w-56">
      <article className="text-center mt-12">
        <header>
          <h2 className="text-lg">{name}</h2>
        </header>
        <p className="text-blue-700 text-sm">{work}</p>
        <p className="text-gray-700 italic text-sm">{title}</p>
        <section className="text-gray-600 text-sm inline-flex items-center mt-4">
          <figure>
            <img className="w-4 mx-auto" src={twitterLogo} alt="twitter logo" />
          </figure>
          <a
            className="ml-2"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/${twitterHandle}`}
          >
            @{twitterHandle}
          </a>
        </section>
      </article>
    </section>
  </section>
)

OrganizerCard.prototype = {
  name: PropTypes.string,
  work: PropTypes.string,
  title: PropTypes.string,
  twitterHandle: PropTypes.string,
  imageSrc: PropTypes.string,
}

OrganizerCard.defaultProps = {
  name: "",
  work: "",
  title: "",
  twitterHandle: "",
  imageSrc: "",
}

const SponsorCard = ({ name, imageSrc }) => (
  <section className="flex items-center max-w-sm bg-white mt-5 mr-2 hover:shadow-lg">
    <section className="px-5 py-4 w-32">
      <figure title={name}>
        <img
          className="w-full h-auto w-32 animate-image"
          src={imageSrc || imagePlaceholder}
          alt={name}
        />
      </figure>
    </section>
  </section>
)

SponsorCard.prototype = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
}

SponsorCard.defaultProps = {
  name: "",
  imageSrc: "",
}

export { WorkshopCard, SpeakerCard, OrganizerCard, SponsorCard }
