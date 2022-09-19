import useData from "../hooks/useData";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

const ResponsableDiseño = () => {

    const { data, setData,handlerDeleteSelection,handlerResponsableDiseño,filtradoUnicoRespDise,setFiltradoUnicoRespDise } = useData();
 const [resposableDiseño, setResponsableDiseño] = useState([]);
 

 useEffect(() => {

    if(data.length > 0){
    const filtrado = data.map((item) => item.ResponsableDiseño);
    const filtradoUnico = [...new Set(filtrado)];
    setResponsableDiseño(filtradoUnico);
    
}

 }, [data])

  return (
    <div className="container">
              <div className="d-flex  justify-content-between ">
                <div className="fs-6 fw-bold align-middle mt-2">RESPONSABLE DE DISEÑO</div>
                <div className="">
                  <Button className="h-100" variant="light" type="submit"
                  onClick={handlerDeleteSelection}
                  >
                    <AiOutlineDelete className="w-100 mb-2" />
                  </Button>
                </div>
              </div>
              <div className="pb-3">
              {resposableDiseño.length > 0 ? (
          resposableDiseño.map((item) => {

            if(item === undefined) {
              
              return <button type="button" 
              onClick={() => handlerResponsableDiseño(item)}
              className="btn btn-primary btn-sm me-2 mb-2" 
              key="vacio">Sin Asignar</button>
            }
                        
            return (
              <button
                type="button"
                className="btn btn-primary btn-sm me-2 mb-2
                "
                key={item}
                onClick={() => {handlerResponsableDiseño(item)
                    setFiltradoUnicoRespDise(item)
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
export default ResponsableDiseño