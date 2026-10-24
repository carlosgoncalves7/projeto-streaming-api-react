import { createBrowserRouter } from "react-router";

import App from '../App.jsx'
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home/index.jsx';
import Filmes from '../components/Filmes/index.jsx';
import Series from '../components/Series';
import Generos from '../components/Generos/index.jsx';
import MinhaLista from '../components/MinhaLista';
import { GetGeneroFilme } from '../components/Generos';


// Criando o router para a aplicação
// Caminhos routers para cada componente
export const router = createBrowserRouter([
  {
    // Rotas aninhadas, dentro de rotas pai através de children - Ex: Contato é filho de App
    path: '/', Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/filmes', Component: Filmes
      },
      {
        path: '/series', Component: Series
      },
      {
        path: '/generos', Component: Generos,
        children: [
          {index: true, Component: GetGeneroFilme},
          {
            path: ':id', Component: GetGeneroFilme
          }
        ]
      },
      {
        path: 'minhalista', Component: MinhaLista
      }
    ],
    errorElement: <ErrorPage />
  }
])