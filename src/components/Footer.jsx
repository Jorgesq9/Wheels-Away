import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container fluid>
            <Row className="bg-primary text-white p-4">
                <Col className="mx-5">
                    <h4>Column 1</h4>
                </Col>
                <Col>
                    <h4>Column 2</h4>
                </Col>
                <Col>
                    <h4>Column 3</h4>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
