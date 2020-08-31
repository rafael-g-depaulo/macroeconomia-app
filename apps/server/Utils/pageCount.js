import PageView from "Models/pageview"

export const increasePageView = async () => {
  const [ { counter, id } ] = await PageView.findCreateFind({ where: {}})
  PageView.update({ counter: counter+1 }, { where: { id } })
}

export const getPageViews = async () => PageView
  .findCreateFind({ where: {}})
  .then(([{ counter }]) => counter)