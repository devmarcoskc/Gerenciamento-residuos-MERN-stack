import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Painel from "./pages/painel"
import Notes from "./pages/notes"
import AddNote from "./pages/addNotes"
import EditNote from "./pages/editNote"
import TrashCollect from "./pages/trashCollect"
import AddTrashCollect from "./pages/addTrashCollect"
import Perfil from "./pages/perfil"
import { useSelector } from "react-redux"

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route 
            path="/geral" 
            element={isAuth ? <Painel/> : <Navigate to="/"/>}
          />
          <Route 
            path="/anotaçoes" 
            element={isAuth ? <Notes/> : <Navigate to="/"/>}
          />
          <Route 
            path="/anotaçoes/inserir" 
            element={isAuth ? <AddNote/> : <Navigate to="/"/>}
          />
          <Route 
            path="/coletas" 
            element={isAuth ? <TrashCollect/> : <Navigate to="/"/>}
          />
          <Route 
            path="/coletas/inserir" 
            element={isAuth ? <AddTrashCollect/> : <Navigate to="/"/>}
          />
          <Route 
            path="/anotaçoes/:id" 
            element={isAuth ? <EditNote/> : <Navigate to="/"/>}
          />
          <Route 
            path="/perfil" 
            element={isAuth ? <Perfil/> : <Navigate to="/"/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
