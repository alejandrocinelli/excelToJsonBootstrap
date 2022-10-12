import { Form, Row, Col, Button, Container } from "react-bootstrap";
import ResponsableDiseño from "./ResponsableDiseño";
import EstadoDiseño from "./EstadoDiseño";
import TipoDeTarea from "./TipoDeTarea";

const Filtros = () => {

  return (
    <>
      <Container>
        <Row className="mt-3">
          <TipoDeTarea />
          <Col className="bg-light shadow-lg p-2 ms-2 ">
            <EstadoDiseño />
          </Col>
        </Row>
      </Container>
      <Container className="p-3">
        <Row>
          <Col className="bg-light shadow-lg p-2">
            <ResponsableDiseño />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Filtros;
