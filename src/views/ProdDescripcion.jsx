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
];

export const ProdDescripcion = () => {
  const { id } = useParams(); // String
  const product = products.find(product => product.id == id);
  console.log(product);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
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
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <p>{product.description}</p>
          </div>
          <Link to="/Products" className="button-1 btn btn-primary btn-back-to-top black-1">Volver atras</Link>
        </div>
      </div>
    </div>
  );
};

