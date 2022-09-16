import useData from "../hooks/useData"

const TablaContainer = () => {
    const {dataMuestra} = useData()
    const numeroAFecha = (numero) => {

        return new Date(((numero)-25567)*86400*1000).toLocaleDateString("es-ES")
      }

  return (
    <div className="table-responsive p-2 ">
      <table className="table table-hover table-sm table-bordered ">
        <thead  className="" >
          <tr className="border text-center " >
            <th className="  ">GPO</th>
            <th  className=" ">CDL</th>
            <th className=" ">Ciudad</th>
            <th className="  ">SubTipoDeTarea</th>
            <th className=" ">Resp de Diseño</th>
            <th className="  ">Priorirdad</th>
            <th className="  ">Alcance</th>
            <th className=" ">Resp de Obra</th>
            <th className="  ">Fecha de pase a diseño</th>
            <th className=" ">Fecha de diseño Replan</th>
            <th className=" ">Fecha Diseño real</th>
          </tr>
        </thead>
        {dataMuestra.length > 0
          ? dataMuestra.map((item) => {
              return (
                <tbody key={item.GPO}>
                  <tr className="text-center">
                    <td>{item.GPO}</td>
                    <td className=" ">{item.Nombre_CDL}</td>
                    <td className="">{item.Descripción_CDL}</td>
                    <td>{item.SubTipoDeTarea}</td>
                    <td>{item.ResponsableDiseño}</td>
                    <td >{item.Prioridad}</td>
                    <td ><a href={item.DocumentoDeAlcance} target="blanck">Ver</a></td>
                    <td >{item.ResponsableObra}</td>
                    <td >{numeroAFecha(item.FechaPaseADiseño)}</td>
                    <td >{numeroAFecha(item.FechaDiseñoRePlan)}</td>
                    <td >{numeroAFecha(item.FechaDiseñoReal)}</td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </table>
    </div>
  )
}
export default TablaContainer