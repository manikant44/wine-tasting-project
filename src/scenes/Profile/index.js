import Loadable from "base_components/Loadable"
// import reducer, { types, selectors } from "./ducks"

const pages = {
  Profile: Loadable({
    loader: () => import("./ProfilePage")
  })
}

export { pages }
