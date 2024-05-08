import React from "react";
import { useParams } from "react-router-dom";
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
  { id: 1, title: 'In Rainbows', subtitle: 'Radiohead', imageSrc: inRainbows, price: 80.000, genero: "Alternativo" },
  { id: 2, title: 'Folklore', subtitle: 'Taylor Swift', imageSrc: folklore, price: 90.000, genero: 'indie Folk' },
  { id: 3, title: 'Rumours', subtitle: 'Fleetwood Mac', imageSrc: rumours, price: 85.000, genero: 'Rock' },
  { id: 4, title: 'Civilización', subtitle: 'Los Piojos', imageSrc: civilizacion, price: 75.000, genero: 'Nacional' },
  { id: 5, title: "Red (Taylor's Version)", subtitle: 'Taylor Swift', imageSrc: redTS, price: 70.000, genero: 'Pop' },
  { id: 6, title: "The Tortured Poets Department: The Anthology ", subtitle: 'Taylor Swift', imageSrc: ttps, price: 100.000, genero: 'Pop' },
  { id: 7, title: "Un Verano Sin Ti", subtitle: 'Bad Bunny', imageSrc: uvst, price: 120.000, genero: 'Pop' },
  { id: 8, title: "Ohms", subtitle: 'Deftones', imageSrc: ohms, price: 120.000, genero: 'Rock' },
  { id: 9, title: "AM", subtitle: 'Arctic Monkeys', imageSrc: am, price: 90.000, genero: 'Rock' },
];

export const ProdDescripcion = () => {
  const { id } = useParams(); // String
  const product = products.find(product => product.id == id);
  console.log(product);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageSrc} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{product.title}</Card.Title>
          <Card.Subtitle style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{product.subtitle}</Card.Subtitle>
          <Card.Text style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            Price: ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
