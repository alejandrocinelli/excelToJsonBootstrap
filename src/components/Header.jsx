import { Container, Row, Col } from "react-bootstrap";
import Buscador from "./Buscador";
import ParcelExcel from "./ParcelExcel";

const Header = () => {
  return (
    <div>
      <Container fluid id="header2" className=" ">
        <Row>
          <Col>
            <p className="text-center text-white pt-3 fs-3 fw-bold">
              DASHBOARD DE DISEÑO
            </p>
          </Col>
        </Row>
        <Row className="justify-content-around  pb-3">
          <Col xs={4} className="text-white">
            <Buscador />
          </Col>
          <Col xs={6} md={4} className="text-white ">
            <ParcelExcel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
