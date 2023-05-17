import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antman from "../assets/image/superhero/antman.jpg";
import avenger from "../assets/image/superhero/avenger.jpg";
import batman from "../assets/image/superhero/batman.jpg";
import robinhood from "../assets/image/superhero/robinhood.jpg";
import superman from "../assets/image/superhero/superman.jpg";
import spiderman from "../assets/image/superhero/spiderman-cover.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 id="Superhero" className="text-white text-center">
          Superhero
        </h1>
        <br />
        <Row className="mt-2">
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={antman} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Antman</Card.Title>
                  <Card.Title className="text-left">no caption</Card.Title>
                  <Card.Title className="text-left">
                    Last update 3 minuts ago
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avenger} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Avenger</Card.Title>
                  <Card.Title className="text-left">no caption</Card.Title>
                  <Card.Title className="text-left">
                    Last update 3 minuts ago
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batman} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Batman</Card.Title>
                  <Card.Title className="text-left">no caption</Card.Title>
                  <Card.Title className="text-left">
                    Last update 3 minuts ago
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={robinhood} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Robinhood</Card.Title>
                  <Card.Title className="text-left">no caption</Card.Title>
                  <Card.Title className="text-left">
                    Last update 3 minuts ago
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spiderman} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spideman</Card.Title>
                  <Card.Title className="text-left">no caption</Card.Title>
                  <Card.Title className="text-left">
                    Last update 3 minuts ago
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={superman} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Superman</Card.Title>
                  <Card.Title className="text-left">no caption</Card.Title>
                  <Card.Title className="text-left">
                    Last update 3 minuts ago
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Superhero;
