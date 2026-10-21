
export default function Hero() {

    const box = [
        {   
            id: 1,
            titulo: "Aproveite na sua TV",
            texto: "Assista em Smart TVs, Playstation,Xbox, Chromecast, Apple TV,reprodutores de Blu-ray e muito mais."
        },
        {   
            id: 2,
            titulo: "Baixe seus programas para assistir offline",
            texto: "Salve seus favoritos facilmente e sempre tenha algo para assistir."
        },
        {
            titulo: "Assista em todos os lugares",
            texto: "Assista a filmes e programas de TV ilimitados no seu celular, tablet, laptop e TV."
        },
        {   
            id:3,
            titulo: "Criar perfis para crianças",
            texto: "Envie as crianças em aventuras com seus personagens favoritos em um espaço feito especialmente para elas — grátis com sua assinatura."
        }


    ]

    return (
        <>
            <div className="hero-bg">

                <h1 className="hero-title">Todas as histórias. Todos os gêneros. Reunidas do seu jeito.</h1>

                <button className="span-hero">
                    <span>Melhor pagina de filmes</span>
                </button>

                <div className="container-box">
                    {
                        box.map(box => (
                            <div key={box.id} className="box-card">
                                <h3 className="titulo-box">{box.titulo}</h3>
                                <p className="p-box">{box.texto}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}