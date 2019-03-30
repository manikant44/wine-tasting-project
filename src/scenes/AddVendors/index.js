import Loadable from "base_components/Loadable"
import reducer, { types } from "./ducks"

const pages = {
  AddVendors: Loadable({
    loader: () => import("./VendorsForm")
  })
}

export { pages, reducer, types }
