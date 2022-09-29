import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataMuestra, setDataMuestra] = useState([]);
  const [filtradoUnicoRespDise, setFiltradoUnicoRespDise] = useState([]); 
  const [filtradoUnicoTipoTarea, setFiltradoUnicoTipoTarea] = useState([]); // idem arriba capas los puedo como bandera
  const [filtradoUnicoEstadoDiseño, setFiltradoUnicoEstadoDiseño] = useState([]); // idem arriba capas los puedo como bandera
  const [filtrado2, setFiltrado2] = useState([]); 

  useEffect(() => {
    
    setDataMuestra(data);
    setFiltrado2(data);
  }, [data]);

  
  useEffect(() => { 
    
    console.log("Entra al useEffect? ")
    // hay que revisar este primer if else 
    if(filtradoUnicoEstadoDiseño.length > 0 &&  filtradoUnicoRespDise === undefined && filtradoUnicoTipoTarea.length > 0){
      console.log("Filtro triple undefined")
      let filtro = filtrado2.filter((item) => {item.ResponsableDiseño === filtradoUnicoRespDise
      })
      let filtro2= filtro.filter((item) => {item.TipoDeTarea === filtradoUnicoTipoTarea})
      let filtro3 = filtro2.filter((item) => {item.EstadoDeDiseño === filtradoUnicoEstadoDiseño})
      return setDataMuestra(filtro3)
    }
    else {
    if(filtradoUnicoEstadoDiseño.length > 0 && filtradoUnicoRespDise.length > 0 && filtradoUnicoTipoTarea.length > 0){
      console.log("Filtro triple")
      let filtro = filtrado2.filter((item) => {item.ResponsableDiseño === filtradoUnicoRespDise
      })
      let filtro2= filtro.filter((item) => {item.TipoDeTarea === filtradoUnicoTipoTarea})
      let filtro3 = filtro2.filter((item) => {item.EstadoDeDiseño === filtradoUnicoEstadoDiseño})
      return setDataMuestra(filtro3)
    }}
  
    if (filtradoUnicoRespDise  === undefined && filtradoUnicoTipoTarea.length > 0)  {
      console.log("Entro al doble undefined y tipo tarea")
      let filtradoDoble = data.filter((item) =>  
      item.ResponsableDiseño === filtradoUnicoRespDise )
      
      let filter3 = filtradoDoble.filter((item) => item.TipoDeTarea === filtradoUnicoTipoTarea)
      console.log("filtradoDoble: ", filter3)
      return (
        setFiltrado2(filter3)
      )
    }

     else {
            
     if(filtradoUnicoRespDise === undefined) {
      console.log("Entro al undefined? ")
      let filtrado = data.filter((item) => item.ResponsableDiseño === filtradoUnicoRespDise)
      console.log("filtrado: ", filtrado)
      return ( setFiltrado2(filtrado) )
     }

     if(filtradoUnicoRespDise !== undefined && filtradoUnicoRespDise.length > 0) {
     console.log("entro al if de filtrado unico resp dise solo con " +filtradoUnicoRespDise);
    
     let filtrado = data.filter((item) => (item.ResponsableDiseño === filtradoUnicoRespDise));
     setFiltrado2(filtrado)
     console.log("filtrado x RespD", filtrado);
   }
   
      if(filtradoUnicoTipoTarea.length > 0){
      console.log("entro al if de filtrado unico tipo tarea");
      let filtrado = data.filter((item) => (item.TipoDeTarea === filtradoUnicoTipoTarea));
      setFiltrado2(filtrado)
      console.log("filtrado x TipoTarea", filtrado);
    }

    if (filtradoUnicoRespDise.length > 0 && filtradoUnicoTipoTarea.length > 0) {
      console.log("Entro al doble filtrado ambos definidos")
      let filtradoDoble = data.filter((item) =>  
      item.ResponsableDiseño === filtradoUnicoRespDise )
      
      let filter3 = filtradoDoble.filter((item) => item.TipoDeTarea === filtradoUnicoTipoTarea)
      console.log("filtradoDoble: ", filter3)
      return (
        setFiltrado2(filter3)
      )
    }
  }
  }, [filtradoUnicoTipoTarea,filtradoUnicoRespDise,filtradoUnicoEstadoDiseño]);
  
  

  const handlerBusquedaGpo = (GPO) => {
    
    const resultado = data.filter((item) => item.GPO == GPO);

    if (resultado.length > 0) {
      
      setFiltrado2(resultado);
    } else {
      alert("no se encontro el GPO");
    }
  };
 

  const handlerDeleteSelection = (e) => {
    e.preventDefault();
    setFiltrado2(data);
  // setFiltradoUnicoRespDise([]);
   //setFiltradoUnicoTipoTarea([]);

  };

  const handlerDeleteTipoTarea = (e) => {
    e.preventDefault();
    setFiltradoUnicoTipoTarea([]);
  }

  const handlerDeleteRespDiseño = (e) => {
    e.preventDefault();
    setFiltradoUnicoRespDise([]);
  }
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        setDataMuestra,
        dataMuestra,
        handlerDeleteSelection,
        setFiltradoUnicoTipoTarea,
        setFiltradoUnicoRespDise,
        setFiltradoUnicoEstadoDiseño,
        handlerBusquedaGpo,
        handlerDeleteTipoTarea,
        filtrado2,handlerDeleteRespDiseño
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
