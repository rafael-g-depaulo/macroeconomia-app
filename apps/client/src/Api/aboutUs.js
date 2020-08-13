import { strapi } from "Api"

export const fetchAboutUs = () => strapi
  .get("/about-us")
  .then(({ data }) => data)
  .then(({ Text }) => Text)