import Loadable from "base_components/Loadable"
import reducer, { types, selectors } from "./ducks"

const pages = {
  Signup: Loadable({
    loader: () => import("./SignupPage")
  })
}

export { pages, reducer, selectors, types }
