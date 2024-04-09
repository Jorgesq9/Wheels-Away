import CardProduct from "../components/CardProduct";
import FilterCar from "../components/FilterCar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiWorld } from "react-icons/bi";
import { GiLoveMystery } from "react-icons/gi";
import ImageCar from "../assets/nissan.png";
import { FaCar } from "react-icons/fa";
import Apple from "../assets/appstore.png";

import Google from "../assets/googleplay.png";
import CarModal from "../components/CarModal";
import SignUpModal from "../components/SignUpModal";
import { useTranslation } from "react-i18next";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const { t, i18n } = useTranslation();
  const [cars, setCars] = useState([]);
  const [id, setId] = useState(null);
  const [availableCars, setAvailableCars] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [signUpModalShow, setSignUpModalShow] = useState(false);

  const sliceCars = cars.slice(0, 8);

  const getAllCars = () => {
    axios
      .get(`${API_URL}/api/cars`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <>
      <section className="header px-5">
        <h1 className="ms-3 ps-5 text-head">
          {t("main.drive")}{" "}
          <span style={{ color: "#ff5c3d" }}>{t("main.dreams")}</span> !
        </h1>
        {/* <h2 className="ps-5 ms-5 ms-5">WheelsAway</h2> */}
        <p className="pt-3 ps-5 ms-3">{t("main.explore")}</p>
        <div className="pt-4 ps-5">
          <Image className="stores" src={Apple} />
          <Image className="stores" src={Google} />
        </div>

        <Image className="floating-car" src={ImageCar} />
      </section>
      <section className="filter-section">
        <Container>
          <Row className=" d-flex justify-content-center">
            <Col className=" d-flex justify-content-center">
              <FilterCar setAvailableCars={setAvailableCars} />
            </Col>
          </Row>
          <Row className={availableCars !== null ? "pt-5" : "pt-0"}>
            {availableCars?.map((car, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={4}
                xl={3}
                className="mb-3 px-2"
              >
                <Link
                  className="custom-card-link"
                  key={index + 1}
                  onClick={() => {
                    setModalShow(true);
                    setId(car._id);
                  }}
                >
                  <CardProduct car={car} />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="brand pt-4 pb-2">
        <h2>{t("main.title")}</h2>
        <h2>{t("main.subtitle")}</h2>
        <p className="pt-2">{t("main.info")}</p>
      </section>
      <section className="info-section pt-5 pb-5 bg-white">
        <Container>
          <Row>
            <Col xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
              <p className="title-info">
                <BiWorld className="me-2" />
                {t("main.globalTitle")}
              </p>
              <p className="text-inf">{t("main.globalInfo")}</p>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
              <p className="title-info">
                <FaCar className="me-2" />
                {t("main.distTitle")}
              </p>
              <p className="text-inf">{t("main.distInfo")}</p>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
              <p className="title-info">
                <GiLoveMystery className="me-2" />
                {t("main.serviceTitle")}
              </p>
              <p className="text-inf">{t("main.serviceInfo")}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="featured-cars">
        <h2 className="text-center pt-5">{t('main.rated')}</h2>

        <Container className="px-5 mt-5">
          <Row gap={2}>
            {sliceCars?.map((car, index) => (
              <>
                <Col
                  key={index}
                  xs={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className="mb-3 px-2"
                >
                  <CardProduct key={index} car={car} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>

      <CarModal
        show={modalShow}
        id={id}
        onHide={() => setModalShow(false)}
        onLogin={() => {
          setSignUpModalShow(true);
          setModalShow(false);
        }}
      />
      <SignUpModal
        show={signUpModalShow}
        onHide={() => setSignUpModalShow(false)}
      />
    </>
  );
}

export default HomePage;
