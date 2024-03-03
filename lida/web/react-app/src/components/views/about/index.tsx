import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import FeaturesView from "./features/features";
import AbstractView from "./abstract";
import ArchitectureView from "./architecture";
import GalleryView from "../gallery/gallery";
import BibTexView from "./bib";
import FAQView from "./faq";
import { UpdatesBanner } from "../../atoms";
import { updates } from "../../../data/updates";
import UpdatesView from "./updates";

const AboutPageView = () => {
  return (
    <div className="text-primary mb-6   ">
      <UpdatesBanner>
        <span>
          {updates[0]["update"]}.{" "}
          <span className="font-semibold text-sm mx-1 inline-block">
            {updates[0]["date"]}
          </span>{" "}
          <a
            className="inline-block ml-1 hover:underline text-accent"
            href={updates[0]["link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more.
          </a>
        </span>
      </UpdatesBanner>
      <AbstractView />
      <FeaturesView />
      <ArchitectureView />
      <FAQView />
      <BibTexView />
      <UpdatesView />
      {/* <GalleryView /> */}
    </div>
  );
};
export default AboutPageView;
