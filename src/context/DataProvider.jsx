import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataMuestra, setDataMuestra] = useState([]);
  const [filtradoUnicoRespDise, setFiltradoUnicoRespDise] = useState([]); //  intento usar esto para poder tener un filtrado y no me borre todo el array
  const [filtradoUnicoTipoTarea, setFiltradoUnicoTipoTarea] = useState([]); // idem arriba capas los puedo como bandera
  
  useEffect(() => {
    console.log("se ejecuto el use effect");

    setDataMuestra(data);
  }, [data]);

  const handlerBusquedaGpo = (GPO) => {
    
    const resultado = data.filter((item) => item.GPO == GPO);

    if (resultado.length > 0) {
      
      setDataMuestra(resultado);
    } else {
      alert("no se encontro el GPO");
    }
  };

  const handlerTipoDeTarea = (tipo) => {
    console.log(tipo);
    const filtrado = data.filter((item) => item.TipoDeTarea === tipo);
    setDataMuestra(filtrado);
  };

  const handlerResponsableDiseño = (responsable) => {
    console.log(responsable);
    const filtrado = data.filter(
      (item) => item.ResponsableDiseño === responsable
    );
    setDataMuestra(filtrado);
  };

  const handlerDeleteSelection = (e) => {
    e.preventDefault();
    
    setDataMuestra(data);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        setDataMuestra,
        handlerTipoDeTarea,
        dataMuestra,
        handlerDeleteSelection,
        handlerResponsableDiseño,
        setFiltradoUnicoTipoTarea,
        setFiltradoUnicoRespDise,
        handlerBusquedaGpo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
