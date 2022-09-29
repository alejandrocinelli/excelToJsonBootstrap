import { Form, Row, Col, Button, Container } from "react-bootstrap";
import useData from "../hooks/useData";
import * as XLSX from 'xlsx'

const ParcelExcel = () => {

  const {data,setData} = useData()

  const handlerFile = async (e) => {
    //console.log(e.target.files[0])
    const file = e.target.files[0]
    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
   // console.log(workbook)

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet)
    console.log(jsonData)
    setData(jsonData)
}

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control type="file" size="sm" name="file"
            
             onChange={(e) =>handlerFile(e) }
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};
export default ParcelExcel;
