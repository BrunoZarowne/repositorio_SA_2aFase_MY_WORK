import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import CadastroMyWork from "../pages/CadastroMyWork.jsx";
import Login from "../pages/Login.jsx";
import HomeMywork from "../pages/HomeMywork.jsx";
import Pagina_Usuario from "../pages/Pagina_Usuario.jsx";
import { GlobalContext } from "../context/GlobalContext.jsx";
import Pag_obra_Lancamentos from "../pages/Pag_obra_Lancamentos.jsx";
import Pagina_obras from "../pages/Pagina_obras.jsx";
import Pagina_da_Obra from "../components/Pagina_da_Obra.jsx";
import Obra_do_site_jojo from "../pages/Obra_do_site_jojo.jsx";




const router = createBrowserRouter([
{path: "/",element:<LandingPage />},
{path:"cadastro",element:<CadastroMyWork />},
{path:"Login",element:<Login />},
{path:"Home",element:<HomeMywork />},
{path:"Perfil_de_Usuario",element:<Pagina_Usuario />},
{path:"Pag_obra_lancamentos",element:<Pag_obra_Lancamentos />},
{path:"pagina_obras",element:<Pagina_obras />},
{path:"/detalhes/:id",element:<Pagina_da_Obra />},
{path:"/Obra_do_site_jojo",element:<Obra_do_site_jojo/>}

])

export default router

