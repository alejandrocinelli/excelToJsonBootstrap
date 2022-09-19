import useData from "../hooks/useData";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

const EstadoDiseño = () => {

    const { data, handlerDeleteSelection,handlerEstadoDeDiseño } = useData();
    const [estadoDiseño, setEstadoDiseño] = useState([]);

    useEffect(() => {

      if(data.length > 0){
      const filtrado = data.map((item) => item.EstadoDeDiseño);
      const filtradoUnico = [...new Set(filtrado)];
      setEstadoDiseño(filtradoUnico);
       }
      }, [data]);

  return (
    <div className="container">
              <div className="d-flex  justify-content-between ">
                <div className="fs-6 fw-bold align-middle mt-2">ESTADO DE DISEÑO</div>
                <div className="">
                  <Button className="h-100" variant="light" type="submit"
                  onClick={handlerDeleteSelection}
                  >
                    <AiOutlineDelete className="w-100 mb-2" />
                  </Button>
                </div>
              </div>
              <div className="pb-3">
              {estadoDiseño.length > 0 ? (
          estadoDiseño.map((item) => {
            return (
              <button
                type="button"
                className="btn btn-primary btn-sm me-2 mb-2
                "
                key={item}
                onClick={() => {handlerEstadoDeDiseño(item)
                    
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
  )
}
export default EstadoDiseño