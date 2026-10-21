import { NavLink, Link, useParams, Outlet } from "react-router"
import { useEffect, useState } from "react";

import { options } from "../../App";
import { LoadingData } from "../../App";
import './series.css'

// Um fetch pra cada tipo de lista
// Um useState pra cada requisição
// Tocando agora
// Popular
// Mais bem avaliado
// Por vir

export default function Filmes() {

  // Um useState pra cada requisição
  const [serieanime, setAnimate] = useState(null);
  const [seriedoc, setMedo] = useState(null);
  const [serieacao, setAcao] = useState(null);
  const [seriecomedia, setComedia] = useState(null)
  const [seriesci, setSci] = useState(null)


  // Uma função para cadas requisição
  // Um fetch pra cada tipo de lista

  function getAcaoSeries() {
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10759%2C80', options)
      .then(response => response.json())
      .then(data => {
        // console.log("Playing: ", data);
        setAcao(data.results)
      })
      .catch(err => console.error("Error to Acao: ", err));
  }

  function getAnimateSeries() {
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10759%2C16%2C35', options)
      .then(response => response.json())
      .then(data => setAnimate(data.results))
      .catch(err => console.error("Error to Animate: ", err));
  }

  function getMedoSeries() {
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10764%2C99', options)
      .then(response => response.json())
      .then(data => {
        // console.log("Rating: ", data);
        setMedo(data.results);
      })
      .catch(err => console.error("Error to Medo", err));
  }

  function getSciSeries() {
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10765', options)
      .then(response => response.json())
      .then(data => {
        // console.log("Rating: ", data);
        setSci(data.results);
      })
      .catch(err => console.error("Error to Medo", err));
  }

  

  function getComediaSeries() {
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10751%2C35', options)
      .then(response => response.json())
      .then(data => {
        // console.log("Coming: ", data);
        setComedia(data.results)
      })
      .catch(err => console.error("Error to Comédia: ", err));
  }

  useEffect(() => {
    getAnimateSeries();
    getMedoSeries();
    getAcaoSeries();
    getComediaSeries();
    getSciSeries();
  }, [])

  // Coloquei esta condição para que exiba as series apenas quando todos forem carregado
  if(serieanime == null || serieacao == null || seriecomedia == null || seriesci == null || seriedoc == null){
    return(
        <LoadingData/>
    )
  }

  return (
    <>
      <div className="series-container">
        <section className="animate-section">
          <h1 className="titulo">Séries de Animações</h1>
          <div className="container-list">
            {
              serieanime && serieanime.map(anime => (
                <div key={anime.id} className="anime-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`} width={200} alt="" />
                </div>
              ))
            }
          </div>
        </section>
        
        <section className="sci-section">
          <h1 className="titulo">Séries Sci-Fi & Fantasy</h1>
          <div className="container-list">
            {
              seriesci && seriesci.map(sci => (
                <div key={sci.id} className="sci-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${sci.poster_path}`}  alt="" />
                </div>
              ))
            }
          </div>
        </section>

        <section className="doc-section">
          <h1 className="titulo">Séries Documentarios</h1>
          <div className="container-list">
            {
              seriedoc && seriedoc.map(docum => (
                <div key={docum.id} className="doc-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${docum.poster_path}`}  alt="" />
                </div>
              ))
            }
          </div>
        </section>

        <section className="acao-section">
          <h1 className="titulo">Séries de Ação e Suspense</h1>
          <div className="container-list">
            {
              serieacao && serieacao.map(act => (
                <div key={act.id} className="acao-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${act.poster_path}`} width={200} alt="" />
                </div>
              ))
            }
          </div>
        </section>

        <section className="comedia-section">
          <h1 className="titulo">Séries de Comédias em Familia</h1>
          <div className="container-list">
            {
              seriecomedia && seriecomedia.map(comed => (
                <div key={comed.id} className="comedia-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${comed.poster_path}`} width={200} alt="" />=
                </div>
              ))
            }
          </div>
        </section>

      </div>
    </>
  )
}