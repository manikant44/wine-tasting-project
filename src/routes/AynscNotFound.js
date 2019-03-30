import Loadable from "base_components/Loadable";

const AsyncNotFound = Loadable({
  loader: () => import("global/NotFound")
})

export default AsyncNotFound
