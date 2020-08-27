import ReactGA from 'react-ga'

const trackingID = "UA-176593498-1"

export const initialize = () => {
  ReactGA.initialize(trackingID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}