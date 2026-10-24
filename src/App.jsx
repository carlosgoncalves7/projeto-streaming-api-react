import { Link, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'

import NavBar from './components/NavBar';
import { Tvcomponent } from './components/SvgComponents';
const token = import.meta.env.VITE_KEY_TOKEN

export const options = {
  method: 'GET',
  headers: {
    accept: 'aplication/json',
    authorization: `Bearer ${token}`
  }
}

export function ErrorMsg() {
  return (
    <>
      <div className="error-msg">
        <Tvcomponent />
        <h1>Nao foi encontrado nenhum filme! :/</h1>
      </div>

    </>
  )
}

export function LoadingData() {
  return (
    <>
      <div className='loader'>
        <div className='loading'></div>
      </div>
    </>
  )
}

export function loadingHorizontal() {
  return (
    <>
      <div class="loader-horizontal">
        <div class="loading-horizontal"></div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <main className='main-container'>
        <Outlet />
      </main>
    </>
  )
}

export default App
