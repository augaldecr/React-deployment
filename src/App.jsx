import { Provider } from "react-redux"
import Task from "./components/Task"
import Tasks from "./components/Tasks"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Redux todo</h1>
        <Tasks />
        <hr />
        <Task />
      </div>
    </Provider>
  )
}

export default App
