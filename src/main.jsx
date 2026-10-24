import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, useParams } from 'react-router';
import { RouterProvider, Link, NavLink } from 'react-router-dom';
import './index.css'
import { router } from './router/router.jsx'

// Renderizando o roteador na aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
