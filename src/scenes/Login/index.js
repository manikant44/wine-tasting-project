import Loadable from "base_components/Loadable"
import reducer, { types, selectors } from "./ducks"

const pages = {
  Login: Loadable({
    loader: () => import("./LoginPage")
  })
}

export { pages, reducer, selectors, types }
