import {Form, Button, Row, Col} from 'react-bootstrap'
import {AiOutlineDelete} from 'react-icons/ai'
import {useState} from 'react'
import useData from '../hooks/useData'

const Buscador = () => {
 
    const {handlerBusquedaGpo,handlerDeleteSelection}= useData()   
    const [busqueda, setBusqueda] = useState('')
    
    const handlerBusqueda = (e) => {
        setBusqueda(e.target.value)
        
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            handlerBusquedaGpo(busqueda)
        }
    }
     
  return (
    <Form>
        <Row >
            <Col>
                <Form.Control className='h-75'
                placeholder="GPO"
                type="text"
                name='gpo'
                maxLength="4"
                onChange={handlerBusqueda}
                onKeyPress={handleKeyPress}
                />
            </Col> 
           
           <Col>
            <Button className='w-auto h-75' variant="light" type="submit">
                <AiOutlineDelete className='mb-2'
                onClick={handlerDeleteSelection}
                />
            </Button>
            </Col>
        </Row>

    </Form>
  )
}
export default Buscador