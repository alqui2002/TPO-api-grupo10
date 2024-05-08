import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp";
import redTS from "../assets/img/redcover.jpeg";
import ttps from "../assets/img/ttps.jpeg";
import uvst from "../assets/img/unVeranoSinTi.jpeg";
import ohms from "../assets/img/ohms.jpg";
import am from "../assets/img/am.jpg";
import badbo from "../assets/img/yhlqmdlg.jpg";
import TDB from "../assets/img/talentoDeBarrio.jpg";
import EasyMoney from "../assets/img/EasyMoney.jpg";
import RHLM from "../assets/img/RHLM.jpg";
import crisis from "../assets/img/crisis.jpg";
import mp3 from "../assets/img/mp3.jpg";

const products = [
  { id: 1, title: 'In Rainbows', subtitle: 'Radiohead', imageSrc: inRainbows, price: 80.000, genero: "Alternativo", description:"In Rainbows es el séptimo álbum de estudio de la banda británica Radiohead, lanzado en 2007. Es conocido por su enfoque experimental y su mezcla de géneros, que van desde el rock alternativo hasta la electrónica. El álbum recibió elogios de la crítica por su innovación musical y sus letras introspectivas. Destacan canciones como 15 Step, Nude y Reckoner. In Rainbows también fue notable por su innovador modelo de lanzamiento, donde la banda permitió a los fanáticos descargar el álbum digitalmente y pagar lo que consideraran justo."},
  { id: 2, title: 'Folklore', subtitle: 'Taylor Swift', imageSrc: folklore, price: 90.000, genero: 'indie Folk', description:"Folklore es el octavo álbum de estudio de Taylor Swift, lanzado en julio de 2020. Es un cambio significativo en su estilo musical, alejándose del pop mainstream hacia un sonido más indie folk y alternativo. El álbum fue aclamado por la crítica por su narrativa introspectiva, letras poéticas y producción atmosférica. Folklore recibió múltiples nominaciones a premios y ganó el Grammy al Álbum del Año en 2021, convirtiéndose en uno de los trabajos más exitosos y maduros de Swift hasta la fecha."},
  { id: 3, title: 'Rumours', subtitle: 'Fleetwood Mac', imageSrc: rumours, price: 85.000, genero: 'Rock', description:"Rumours es el undécimo álbum de estudio de la banda británico-estadounidense Fleetwood Mac, lanzado en 1977. Es uno de los álbumes más exitosos de la historia, con canciones icónicas como Go Your Own Way, Dreams, Don't Stop y The Chain. El álbum es conocido por su mezcla de pop rock y soft rock, así como por sus letras emotivas que reflejan las complejas relaciones personales y románticas de los miembros de la banda en ese momento. Rumours ha sido elogiado por la crítica y ha ganado numerosos premios, convirtiéndose en un clásico de la música popular."},
  { id: 4, title: 'Civilización', subtitle: 'Los Piojos', imageSrc: civilizacion, price: 75.000, genero: 'Nacional', description:"Civilización es el cuarto álbum de estudio de la banda argentina Los Piojos, lanzado en 1996. Este álbum marcó un punto de inflexión en la carrera de la banda, consolidando su estilo único que fusiona rock, reggae, ska y otros géneros. Las letras de las canciones abordan temas sociales y existenciales, mientras que la música es enérgica y contagiosa. Civilización es considerado uno de los álbumes más emblemáticos del rock argentino y contiene varios de los éxitos más populares de Los Piojos, como Desde lejos no se ve y Babilonia."},
  { id: 5, title: "Red (Taylor's Version)", subtitle: 'Taylor Swift', imageSrc: redTS, price: 70.000, genero: 'Pop', description:"Red (Taylor's Version) es una regrabación del cuarto álbum de estudio de Taylor Swift, Red, lanzado originalmente en 2012. Esta nueva versión fue lanzada en noviembre de 2021 como parte de los esfuerzos de Swift por recuperar el control de sus primeros álbumes después de que los derechos de sus grabaciones originales fueran adquiridos por otros. Red (Taylor's Version) presenta las canciones originales del álbum Red, junto con varias pistas adicionales que no se incluyeron en la versión original. La regrabación ha sido elogiada por mantener la esencia del álbum original, al tiempo que muestra la evolución artística de Swift a lo largo de los años."},
  { id: 6, title: "The Tortured Poets Department: The Anthology ", subtitle: 'Taylor Swift', imageSrc: ttps, price: 100.000, genero: 'Pop', description:"The Tortured Poets Department es el undécimo álbum de estudio de la cantautora americana Taylor Swift. Fue lanzado el 19 de abril de 2024 y está producido por Swift, Jack Antonoff y Aaron Dessner. Swift anunció el álbum en la 66ª Entrega Anual de los Premios Grammy el 4 de febrero de 2024, y lo expandió a un álbum doble al momento de su lanzamiento, subtitulado The Anthology, agregando un segundo volumen sorpresa de canciones. El álbum se describe como un esfuerzo minimalista de synth-pop y folk-pop con estilos de rock y country, y consiste principalmente en canciones de tempo medio impulsadas por sintetizadores y máquinas de ritmo junto con piano y guitarra. Las letras se centran en la perspectiva psicológica de Swift sobre su vida pública y privada, utilizando una narrativa introspectiva caracterizada por motivos como la tristeza, la autoconciencia, la ilusión, el melodrama y el humor."},
  { id: 7, title: "Un Verano Sin Ti", subtitle: 'Bad Bunny', imageSrc: uvst, price: 120.000, genero: 'Pop', description:"Un Verano Sin Ti es el tercer álbum de estudio del cantante y compositor puertorriqueño Bad Bunny, lanzado en noviembre de 2022. El álbum presenta una variedad de géneros musicales, incluyendo reguetón, trap y pop latino, con letras que abordan temas como el amor, la pérdida y la vida en general. Bad Bunny colabora con varios artistas en el álbum, lo que añade diversidad y dinamismo a su sonido característico. Un Verano Sin Ti fue bien recibido por la crítica y se convirtió en un éxito comercial, consolidando aún más la posición de Bad Bunny como uno de los artistas más influyentes en la música latina contemporánea."},
  { id: 8, title: "Ohms", subtitle: 'Deftones', imageSrc: ohms, price: 120.000, genero: 'Rock', description:"Ohms es el noveno álbum de estudio de la banda estadounidense Deftones, lanzado en septiembre de 2020. Este álbum marca el regreso de la banda después de su aclamado álbum Gore de 2016 y presenta un sonido que combina elementos de metal alternativo, shoegaze y rock experimental característicos de Deftones. Las letras de Ohms exploran temas de introspección, conexión humana y la lucha contra las fuerzas negativas en el mundo. El álbum recibió elogios de la crítica y de los fanáticos por su creatividad, intensidad emocional y la habilidad de la banda para evolucionar y mantener su sonido distintivo."},
  { id: 9, title: "AM", subtitle: 'Arctic Monkeys', imageSrc: am, price: 90.000, genero: 'Rock', description:"AM es el quinto álbum de estudio de la banda británica Arctic Monkeys, lanzado en septiembre de 2013. El álbum presenta un cambio en el sonido de la banda hacia un estilo más maduro y sofisticado, alejándose del garage rock de sus primeros álbumes hacia un sonido más influenciado por el rock alternativo y el R&B. Las letras de AM exploran temas como el amor, las relaciones interpersonales y la vida nocturna, todo ello acompañado de un sonido distintivo y envolvente. El álbum fue aclamado por la crítica y fue un gran éxito comercial, consolidando la posición de Arctic Monkeys como una de las bandas más importantes e influyentes de la escena musical contemporánea."},
  { id: 10, title: "YHLQMDLG", subtitle:'Bad Bunny',  imageSrc:badbo,price: 140.000, genero:'Pop', description: " YHLQMDLG (Yo Hago Lo Que Me Da La Gana) es el segundo álbum de estudio del talentoso cantante y compositor puertorriqueño Bad Bunny, lanzado el 29 de febrero de 2020. Este disco marca un hito significativo en la carrera del artista urbano, consolidando su posición como uno de los principales exponentes del género reguetón y trap en la escena musical internacional. El álbum presenta una ecléctica fusión de ritmos y estilos que reflejan la versatilidad artística de Bad Bunny. Desde pegajosas melodías de reguetón hasta ritmos más melódicos y letras profundas, cada canción ofrece una experiencia auditiva única. Con colaboraciones destacadas de reconocidos artistas como Daddy Yankee, Anuel AA, Jowell & Randy, entre otros, YHLQMDLG se convierte en un proyecto colaborativo que celebra la diversidad y la riqueza del género urbano." },
  { id: 11, title: "Talento De Barrio", subtitle:'Daddy Yankee',  imageSrc:TDB,price: 125.000, genero:'Pop', description: "El álbum Talento de Barrio de Daddy Yankee, lanzado en 2008, es una obra maestra que encapsula la esencia y el espíritu del género urbano, especialmente el reguetón. Este proyecto musical no solo es una colección de canciones, sino también una ventana a las realidades de la vida en los barrios urbanos de Puerto Rico y Latinoamérica. Daddy Yankee, uno de los pioneros del reguetón y una figura emblemática en la escena musical latina, aprovecha este álbum para compartir historias auténticas y experiencias personales que resuenan con su audiencia. El álbum Talento de Barrio es una celebración de la cultura urbana, donde los sonidos de la calle se fusionan con la creatividad y el talento del artista. Desde temas que hablan de amor y desamor hasta canciones que abordan la realidad social y la superación personal, cada pista es una pieza del rompecabezas que representa la complejidad y la diversidad de la vida en los barrios."},
  { id: 12, title: "Easy Money Baby", subtitle:'Myke Towers',  imageSrc:EasyMoney,price: 100.000, genero:'Pop', description:" Easy Money Baby es el álbum debut del talentoso rapero puertorriqueño Mike Towers, lanzado en 2019. Este proyecto musical es una poderosa declaración de su habilidad lírica y su versatilidad artística en el género del trap latino.Con un estilo distintivo y letras ingeniosas, Mike Towers ofrece una visión única de su vida, sus experiencias y sus aspiraciones a través de las canciones de Easy Money Baby. El álbum presenta una mezcla de ritmos cautivadores, desde los más melódicos hasta los más enérgicos, que mantienen a los oyentes enganchados de principio a fin. A lo largo del álbum, Mike Towers demuestra su destreza como narrador, abordando temas como el éxito, el amor, los desafíos personales y la vida en las calles. Su fluidez y entrega impactante lo establecen como una figura destacada en la escena del trap latino, ganándose el reconocimiento de críticos y seguidores por igual." },
  { id: 13, title: "Real Hasta La Muerte", subtitle:'Anuel AA',  imageSrc:RHLM,price: 120.000, genero:'Pop', description:"Real Hasta la Muerte es el álbum debut del talentoso cantante y rapero puertorriqueño Anuel AA, lanzado en 2018. Este proyecto marca un hito significativo en la carrera del artista, consolidando su posición como uno de los principales exponentes del trap latino y el reguetón.A lo largo de Real Hasta la Muerte, Anuel AA presenta un compendio de canciones que reflejan su estilo distintivo y su personalidad provocadora. Desde ritmos frenéticos y letras callejeras hasta baladas emotivas, el álbum muestra la versatilidad artística del cantante, quien combina hábilmente elementos del trap, el reguetón y el rap para crear un sonido único. Las letras de las canciones exploran una amplia gama de temas, desde la vida en la calle y la violencia hasta el amor y la pasión. Anuel AA se destaca por su habilidad para contar historias crudas y reales que resuenan con su audiencia, transmitiendo autenticidad y sinceridad en cada verso." },
  { id: 14, title: "Crisis", subtitle:'Las Pastillas Del Abuelo',  imageSrc:crisis,price: 70.000, genero:'Rock', description:"Crisis es el cuarto álbum de estudio de Las Pastillas del Abuelo y fue lanzado en 2008. Este disco marca un hito importante en la trayectoria de la banda argentina, consolidando su posición como una de las voces más importantes del rock argentino contemporáneo. A lo largo de Crisis, Las Pastillas del Abuelo exploran una amplia gama de temas que van desde lo personal hasta lo social, utilizando su característico estilo poético y su habilidad para contar historias para conectar con su audiencia. Las letras profundas y reflexivas del álbum abordan temas como el amor, la vida cotidiana, la búsqueda de significado y las luchas sociales, resonando con una amplia variedad de oyentes. " },
  { id: 15, title: ".MP3", subtitle:'Emilia Mernes',  imageSrc:mp3,price: 80.000, genero:'Pop', description: "MP3 es el primer álbum de estudio de la talentosa cantante argentina Emilia Mernes, lanzado en 2021. Este disco marca el debut en solitario de Mernes después de su paso por el grupo pop Rombai, consolidando su posición como una de las promesas más destacadas de la música pop latina. A lo largo de MP3, Emilia Mernes presenta una colección de canciones frescas y pegajosas que combinan ritmos pop, electrónicos y urbanos. Con su voz seductora y su estilo distintivo, la cantante cautiva a la audiencia con letras sinceras y melodías contagiosas que celebran la libertad, la diversión y el amor. Las canciones de MP3 exploran una variedad de temas que van desde la autoafirmación hasta la pasión y el deseo. Mernes demuestra su versatilidad artística al navegar entre baladas emotivas y pistas bailables, mostrando su habilidad para adaptarse a diferentes estilos musicales mientras mantiene su identidad única." },
];

export const ProdDescripcion = () => {
  const { id } = useParams(); // String
  const product = products.find(product => product.id == id);
  console.log(product);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imageSrc} />
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{product.title}</Card.Title>
              <Card.Subtitle style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{product.subtitle}</Card.Subtitle>
              <Card.Text style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                Precio: ${product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column align-items-center">
            <p id="product-description-p">{product.description}</p>
            <Link to="/Products" className="button-1 btn btn-primary btn-back-to-top black-1 mt-4">Volver atrás</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

