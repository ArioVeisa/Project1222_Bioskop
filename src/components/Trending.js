import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/image/trending/dune.jpg";
import everythingImage from "../assets/image/trending/everything.jpg";
import infiniteImage from "../assets/image/trending/infinite.jpg";
import jokerImage from "../assets/image/trending/joker.jpg";
import lightyearImage from "../assets/image/trending/lightyear.jpg";
import morbiusImage from "../assets/image/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 id="Trending" className="text-white text-center">
          Trending Movies
        </h1>
        <br />
        <Row className="mt-2">
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Dune</Card.Title>
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
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="Images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Everything</Card.Title>
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
              <Image src={infiniteImage} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Infinite</Card.Title>
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
              <Image src={morbiusImage} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">morbius</Card.Title>
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
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="Images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Lightyear</Card.Title>
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
              <Image src={jokerImage} alt="Dune Movies" className="Images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Joker</Card.Title>
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
export default Trending;
