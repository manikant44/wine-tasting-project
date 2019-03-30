import Loadable from "base_components/Loadable"
import reducer, { types } from "./ducks"

const pages = {
  AddProducts: Loadable({
    loader: () => import("./ProductsForm")
  })
}

export { pages, reducer, types }
