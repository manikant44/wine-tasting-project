import Loadable from "react-loadable"
import Loader from "./Loader"

// For code splitting and asyn component loading
export default ({ loader, ...rest }) =>
  Loadable({
    loader,
    loading: Loader, // before this component gets loaded, we will render first this Loader component.
    timeout: 10000,
    ...rest
  })
