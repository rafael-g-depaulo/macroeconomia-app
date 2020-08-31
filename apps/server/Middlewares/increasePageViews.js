import { increasePageView as increaseCounter } from 'Utils/pageCount'

export const increasePageView = (req, res, next) => {
  increaseCounter()
  next()
}

export default increasePageView