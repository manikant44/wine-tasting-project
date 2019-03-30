import Loadable from "base_components/Loadable"
// import reducer, { types, selectors } from "./ducks"

const pages = {
  Landing: Loadable({
    loader: () => import("./LandingPage")
  })
}

export { pages }
