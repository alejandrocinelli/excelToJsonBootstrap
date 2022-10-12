import useData from "../hooks/useData";
import { useState, useEffect } from "react";
import {  Button, Col } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";


const TipoDeTarea = () => {

const {data, setFiltradoUnicoTipoTarea,handlerDeleteTipoTarea} = useData();
      const [tipoDeTarea, setTipoDeTarea] = useState([]);
      
    
      useEffect(() => {
        if (data.length > 0) {
          //guardar los tipos de tarea en un array sin que se repita
          const tipos = data.map((item) => item.TipoDeTarea);
          const tiposSinRepetir = [...new Set(tipos)];
          setTipoDeTarea(tiposSinRepetir);
        } 
      }, [data]);

  return (
 
    <Col className='bg-light shadow-lg p-3'>
            <div className="container">
              <div className="d-flex  justify-content-between ">
                <div className="fs-6 fw-bold align-middle">TIPO DE TAREA</div>
                <div className="">
                  <Button
                    className="h-100"
                    variant="light"
                    type="submit"
                    onClick={handlerDeleteTipoTarea}
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
                        className={`btn btn-primary btn-sm me-2 mb-2`}
                        key={item}
                        onClick={() => {
                          
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
   
  )
}
export default TipoDeTarea