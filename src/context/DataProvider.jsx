import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataMuestra, setDataMuestra] = useState([]);
  const [filtradoUnicoTipoTarea, setFiltradoUnicoTipoTarea] = useState([]);
  const [filtradoUnicoRespDise, setFiltradoUnicoRespDise] = useState([]);
  const [filtradoUnicoEstadoDiseño, setFiltradoUnicoEstadoDiseño] = useState([]); 
  const [filtrado2, setFiltrado2] = useState([]);

  useEffect(() => {
    setDataMuestra(data);
    setFiltrado2(data);
  }, [data]);

  useEffect(() => {
    // Este codigo se volvio una basura... funciona pero es lo mas feo que hay en el mundo
    if (
      filtradoUnicoEstadoDiseño.length > 0 &&
      filtradoUnicoRespDise === undefined &&
      filtradoUnicoTipoTarea.length > 0
    ) {
      let filtro = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );
      let filtro2 = filtro.filter(
        (item) => item.TipoDeTarea === filtradoUnicoTipoTarea
      );
      let filtro3 = filtro2.filter(
        (item) => item.EstadoDeDiseño === filtradoUnicoEstadoDiseño
      );
      return setFiltrado2(filtro3);
    }

    if (
      filtradoUnicoEstadoDiseño.length > 0 &&
      filtradoUnicoRespDise === undefined
    ) {
      let filtro = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );
      let filtro2 = filtro.filter(
        (item) => item.EstadoDeDiseño === filtradoUnicoEstadoDiseño
      );
      return setFiltrado2(filtro2);
    }

    if (
      filtradoUnicoEstadoDiseño.length > 0 &&
      filtradoUnicoRespDise.length > 0 &&
      filtradoUnicoTipoTarea.length > 0
    ) {
      let filtrox = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );
      let filtro2 = filtrox.filter(
        (item) => item.TipoDeTarea === filtradoUnicoTipoTarea
      );
      let filtro3 = filtro2.filter(
        (item) => item.EstadoDeDiseño === filtradoUnicoEstadoDiseño
      );

      return setFiltrado2(filtro3);
    }

    if (
      filtradoUnicoEstadoDiseño.length > 0 &&
      filtradoUnicoRespDise.length > 0
    ) {
      let filtro = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );
      let filtro2 = filtro.filter(
        (item) => item.EstadoDeDiseño === filtradoUnicoEstadoDiseño
      );
      return setFiltrado2(filtro2);
    }

    if (
      filtradoUnicoRespDise === undefined &&
      filtradoUnicoTipoTarea.length > 0
    ) {
      let filtradoDoble = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );

      let filter3 = filtradoDoble.filter(
        (item) => item.TipoDeTarea === filtradoUnicoTipoTarea
      );

      return setFiltrado2(filter3);
    }

    if (filtradoUnicoRespDise === undefined) {
      let filtrado = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );

      return setFiltrado2(filtrado);
    }

    if (
      filtradoUnicoRespDise !== undefined &&
      filtradoUnicoRespDise.length > 0
    ) {
      let filtrado = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );
      setFiltrado2(filtrado);
    }

    if (filtradoUnicoTipoTarea.length > 0) {
      let filtrado = data.filter(
        (item) => item.TipoDeTarea === filtradoUnicoTipoTarea
      );
      setFiltrado2(filtrado);
    }

    if (filtradoUnicoRespDise.length > 0 && filtradoUnicoTipoTarea.length > 0) {
      let filtradoDoble = data.filter(
        (item) => item.ResponsableDiseño === filtradoUnicoRespDise
      );

      let filter3 = filtradoDoble.filter(
        (item) => item.TipoDeTarea === filtradoUnicoTipoTarea
      );

      return setFiltrado2(filter3);
    }

    if (
      filtradoUnicoTipoTarea.length > 0 &&
      filtradoUnicoEstadoDiseño.length > 0
    ) {
      let filtrado = data.filter(
        (item) => item.TipoDeTarea === filtradoUnicoTipoTarea
      );
      let filtrado2 = filtrado.filter(
        (item) => item.EstadoDeDiseño === filtradoUnicoEstadoDiseño
      );

      return setFiltrado2(filtrado2);
    }

    if (filtradoUnicoEstadoDiseño.length > 0) {
      let filtrado = data.filter(
        (item) => item.EstadoDeDiseño === filtradoUnicoEstadoDiseño
      );
      return setFiltrado2(filtrado);
    }

    if (
      filtradoUnicoEstadoDiseño.length < 0 &&
      filtradoUnicoRespDise.length < 0 &&
      filtradoUnicoTipoTarea.length < 0
    ) {
      console.log("Todos los campos vacios");

      return setFiltrado2(data);
    }
  }, [
    filtradoUnicoTipoTarea,
    filtradoUnicoRespDise,
    filtradoUnicoEstadoDiseño,
  ]);

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

  const handlerDeleteEstadoDiseño = (e) => {
    e.preventDefault();
    setFiltradoUnicoEstadoDiseño([]);
  };

  const handlerDeleteTipoTarea = (e) => {
    e.preventDefault();
    setFiltradoUnicoTipoTarea([]);
  };

  const handlerDeleteRespDiseño = (e) => {
    e.preventDefault();
    setFiltradoUnicoRespDise([]);
  };
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
        filtrado2,
        handlerDeleteRespDiseño,
        handlerDeleteEstadoDiseño,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
