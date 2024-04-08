import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container fluid>
            <Row className="text-white p-4">
                <Col className="mx-5 text-center">
                    <h6>Developed by: @Paulina @Jorge Esquiva @Pablo Martin</h6>
                </Col>
                
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
