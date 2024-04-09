import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <Container fluid>
        <Row className="text-white p-4">
          <Col className="mx-5 text-center">
            <h6>
              {t("footer.developed")} @Paulina @Jorge Esquiva @Pablo Martin
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
