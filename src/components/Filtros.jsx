import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import useData from "../hooks/useData";
import ResponsableDiseño from "./ResponsableDiseño";
import EstadoDiseño from "./EstadoDiseño";

const Filtros = () => {
  const {
    handlerTipoDeTarea,
    handlerDeleteSelection,
    data,
    setFiltradoUnicoTipoTarea,
  } = useData();
  const [tipoDeTarea, setTipoDeTarea] = useState([]);
  const [click,setClick] = useState("primary")

  useEffect(() => {
    if (data.length > 0) {
      //guardar los tipos de tarea en un array sin que se repita
      const tipos = data.map((item) => item.TipoDeTarea);
      const tiposSinRepetir = [...new Set(tipos)];
      setTipoDeTarea(tiposSinRepetir);
    } 
  }, [data]);

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col className='bg-light shadow-lg p-3'>
            <div className="container">
              <div className="d-flex  justify-content-between ">
                <div className="fs-6 fw-bold align-middle">TIPO DE TAREA</div>
                <div className="">
                  <Button
                    className="h-100"
                    variant="light"
                    type="submit"
                    onClick={handlerDeleteSelection}
                  >
                    <AiOutlineDelete className="w-100 mb-2" />
                  </Button>
                </div>
              </div>
              <div className="pb-3">
                {tipoDeTarea.length > 0 ? (
                  tipoDeTarea.map((item) => {
                    return (
                      <button
                        type="button"
                        className={`btn btn-${click} btn-sm me-2 mb-2`}
                        key={item}
                        onClick={() => {
                          handlerTipoDeTarea(item);
                          setFiltradoUnicoTipoTarea(item);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })
                ) : (
                  <p className="text-center">No hay datos Cargados</p>
                )}
              </div>
            </div>
          </Col>
          <Col className="bg-light shadow-lg p-2 ms-2 ">
            <EstadoDiseño/>
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
