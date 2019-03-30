import Loadable from "base_components/Loadable"
import reducer, { types, selectors } from "./ducks"

const pages = {
  Vendors: Loadable({
    loader: () => import("./VendorsList")
  })
}

export { pages, reducer, selectors, types }
