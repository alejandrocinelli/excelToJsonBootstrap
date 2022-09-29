import useData from "../hooks/useData"

const TablaContainer = () => {
    const {dataMuestra,filtrado2} = useData()

    // hay que paginar las tablas
    // const [currentPage, setCurrentPage] = useState(1)
  
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
        {filtrado2.length > 0
          ? filtrado2.map((item) => {
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
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
         <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
            <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </div>
  )
}
export default TablaContainer