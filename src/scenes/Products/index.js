import Loadable from "base_components/Loadable"
import reducer, { types, selectors } from "./ducks"

const pages = {
  Products: Loadable({
    loader: () => import("./ProductsList")
  })
}

export { pages, reducer, selectors, types }
