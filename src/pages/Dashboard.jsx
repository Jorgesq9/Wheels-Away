
import CardProduct from '../components/CardProduct';
import FilterCar from '../components/FilterCar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';

function HomePage() {

    const carsData = [
        {
          make: 'Audi',
          model: 'A4 Sedan',
          year: 2020,
          color: 'Green',
          images: [
            'https://source.unsplash.com/600x600/?car&id=1&image=1',
            'https://source.unsplash.com/600x600/?car&id=1&image=2',
          ],
          licensePlate: '3074NHZ',
          extras: ['GPS', 'Radio'],
          pricePerDay: 76,
        },
        {
          make: 'BMW',
          model: 'M3',
          year: 2021,
          color: 'Blue',
          images: [
            'https://source.unsplash.com/600x600/?car&id=2&image=1',
            'https://source.unsplash.com/600x600/?car&id=2&image=2',
          ],
          licensePlate: '1234ABC',
          extras: ['Sunroof', 'Leather seats'],
          pricePerDay: 120,
        },
        {
          make: 'Mercedes',
          model: 'C-Class',
          year: 2019,
          color: 'Black',
          images: [
            'https://source.unsplash.com/600x600/?car&id=3&image=1',
            'https://source.unsplash.com/600x600/?car&id=3&image=2',
          ],
          licensePlate: '5678DEF',
          extras: ['GPS', 'Leather seats'],
          pricePerDay: 90,
        },
        {
          make: 'Toyota',
          model: 'Corolla',
          year: 2018,
          color: 'Red',
          images: [
            'https://source.unsplash.com/600x600/?car&id=4&image=1',
            'https://source.unsplash.com/600x600/?car&id=4&image=2',
          ],
          licensePlate: '9012GHI',
          extras: ['Radio'],
          pricePerDay: 50,
        },
        {
          make: 'Volkswagen',
          model: 'Golf',
          year: 2020,
          color: 'White',
          images: [
            'https://source.unsplash.com/600x600/?car&id=5&image=1',
            'https://source.unsplash.com/600x600/?car&id=5&image=2',
          ],
          licensePlate: '3456JKL',
          extras: ['GPS', 'Sunroof'],
          pricePerDay: 60,
        },
        {
          make: 'Ford',
          model: 'Mustang',
          year: 2017,
          color: 'Yellow',
          images: [
            'https://source.unsplash.com/600x600/?car&id=6&image=1',
            'https://source.unsplash.com/600x600/?car&id=6&image=2',
          ],
          licensePlate: '7890MNO',
          extras: ['Sunroof', 'Leather seats'],
          pricePerDay: 100,
        },
        {
          make: 'Chevrolet',
          model: 'Camaro',
          year: 2016,
          color: 'Silver',
          images: [
            'https://source.unsplash.com/600x600/?car&id=7&image=1',
            'https://source.unsplash.com/600x600/?car&id=7&image=2',
          ],
          licensePlate: '2345PQR',
          extras: ['GPS', 'Radio'],
          pricePerDay: 80,
        },
        {
          make: 'Nissan',
          model: 'Altima',
          year: 2020,
          color: 'Purple',
          images: [
            'https://source.unsplash.com/600x600/?car&id=8&image=1',
            'https://source.unsplash.com/600x600/?car&id=8&image=2',
          ],
          licensePlate: '6789STU',
          extras: ['GPS', 'Sunroof'],
          pricePerDay: 70,
        },
        {
          make: 'Honda',
          model: 'Accord',
          year: 2019,
          color: 'Orange',
          images: [
            'https://source.unsplash.com/600x600/?car&id=9&image=1',
            'https://source.unsplash.com/600x600/?car&id=9&image=2',
          ],
          licensePlate: '1234VWX',
          extras: ['Radio', 'Leather seats'],
          pricePerDay: 85,
        },
        {
          make: 'Hyundai',
          model: 'Elantra',
          year: 2018,
          color: 'Brown',
          images: [
            'https://source.unsplash.com/600x600/?car&id=10&image=1',
            'https://source.unsplash.com/600x600/?car&id=10&image=2',
          ],
          licensePlate: '5678YZA',
          extras: ['GPS'],
          pricePerDay: 55,
        },
        {
          make: 'Kia',
          model: 'Optima',
          year: 2017,
          color: 'Gray',
          images: [
            'https://source.unsplash.com/600x600/?car&id=11&image=1',
            'https://source.unsplash.com/600x600/?car&id=11&image=2',
          ],
          licensePlate: '9012BCD',
          extras: ['Sunroof'],
          pricePerDay: 65,
        },
        {
          make: 'Mazda',
          model: 'Mazda3',
          year: 2016,
          color: 'Pink',
          images: [
            'https://source.unsplash.com/600x600/?car&id=12&image=1',
            'https://source.unsplash.com/600x600/?car&id=12&image=2',
          ],
          licensePlate: '3456EFG',
          extras: ['GPS', 'Radio', 'Leather seats'],
          pricePerDay: 75,
        },
        {
          make: 'Subaru',
          model: 'Impreza',
          year: 2015,
          color: 'Cyan',
          images: [
            'https://source.unsplash.com/600x600/?car&id=13&image=1',
            'https://source.unsplash.com/600x600/?car&id=13&image=2',
          ],
          licensePlate: '7890HIJ',
          extras: ['GPS', 'Sunroof', 'Leather seats'],
          pricePerDay: 95,
        },
        {
          make: 'Tesla',
          model: 'Model 3',
          year: 2021,
          color: 'Black',
          images: [
            'https://source.unsplash.com/600x600/?car&id=14&image=1',
            'https://source.unsplash.com/600x600/?car&id=14&image=2',
          ],
          licensePlate: '2345KLM',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 150,
        },
        {
          make: 'Porsche',
          model: '911',
          year: 2020,
          color: 'Red',
          images: [
            'https://source.unsplash.com/600x600/?car&id=15&image=1',
            'https://source.unsplash.com/600x600/?car&id=15&image=2',
          ],
          licensePlate: '6789NOP',
          extras: ['GPS', 'Radio', 'Sunroof'],
          pricePerDay: 200,
        },
        {
          make: 'Lamborghini',
          model: 'Aventador',
          year: 2021,
          color: 'Yellow',
          images: [
            'https://source.unsplash.com/600x600/?car&id=16&image=1',
            'https://source.unsplash.com/600x600/?car&id=16&image=2',
          ],
          licensePlate: '1234QRS',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 500,
        },
        {
          make: 'Ferrari',
          model: '488 GTB',
          year: 2020,
          color: 'Blue',
          images: [
            'https://source.unsplash.com/600x600/?car&id=17&image=1',
            'https://source.unsplash.com/600x600/?car&id=17&image=2',
          ],
          licensePlate: '5678TUV',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 400,
        },
        {
          make: 'Bugatti',
          model: 'Chiron',
          year: 2021,
          color: 'Silver',
          images: [
            'https://source.unsplash.com/600x600/?car&id=18&image=1',
            'https://source.unsplash.com/600x600/?car&id=18&image=2',
          ],
          licensePlate: '9012WXY',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 1000,
        },
        {
          make: 'McLaren',
          model: '720S',
          year: 2020,
          color: 'Green',
          images: [
            'https://source.unsplash.com/600x600/?car&id=19&image=1',
            'https://source.unsplash.com/600x600/?car&id=19&image=2',
          ],
          licensePlate: '3456ZAB',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 300,
        },
        {
          make: 'Rolls-Royce',
          model: 'Phantom',
          year: 2021,
          color: 'Black',
          images: [
            'https://source.unsplash.com/600x600/?car&id=20&image=1',
            'https://source.unsplash.com/600x600/?car&id=20&image=2',
          ],
          licensePlate: '7890BCD',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 800,
        },
        {
          make: 'Bentley',
          model: 'Continental GT',
          year: 2020,
          color: 'White',
          images: [
            'https://source.unsplash.com/600x600/?car&id=21&image=1',
            'https://source.unsplash.com/600x600/?car&id=21&image=2',
          ],
          licensePlate: '2345DEF',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 700,
        },
        {
          make: 'Aston Martin',
          model: 'DBS Superleggera',
          year: 2021,
          color: 'Red',
          images: [
            'https://source.unsplash.com/600x600/?car&id=22&image=1',
            'https://source.unsplash.com/600x600/?car&id=22&image=2',
          ],
          licensePlate: '6789EFG',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 600,
        },
        {
          make: 'Jaguar',
          model: 'F-Type',
          year: 2020,
          color: 'Blue',
          images: [
            'https://source.unsplash.com/600x600/?car&id=23&image=1',
            'https://source.unsplash.com/600x600/?car&id=23&image=2',
          ],
          licensePlate: '1234GHI',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 250,
        },
        {
          make: 'Lotus',
          model: 'Evora GT',
          year: 2021,
          color: 'Black',
          images: [
            'https://source.unsplash.com/600x600/?car&id=24&image=1',
            'https://source.unsplash.com/600x600/?car&id=24&image=2',
          ],
          licensePlate: '5678IJK',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 350,
        },
        {
          make: 'Maserati',
          model: 'GranTurismo',
          year: 2020,
          color: 'Red',
          images: [
            'https://source.unsplash.com/600x600/?car&id=25&image=1',
            'https://source.unsplash.com/600x600/?car&id=25&image=2',
          ],
          licensePlate: '9012KLM',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 450,
        },
        {
          make: 'Alfa Romeo',
          model: 'Giulia Quadrifoglio',
          year: 2021,
          color: 'White',
          images: [
            'https://source.unsplash.com/600x600/?car&id=26&image=1',
            'https://source.unsplash.com/600x600/?car&id=26&image=2',
          ],
          licensePlate: '3456MNO',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 400,
        },
        {
          make: 'Lexus',
          model: 'LC 500',
          year: 2020,
          color: 'Blue',
          images: [
            'https://source.unsplash.com/600x600/?car&id=27&image=1',
            'https://source.unsplash.com/600x600/?car&id=27&image=2',
          ],
          licensePlate: '7890NOP',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 300,
        },
        {
          make: 'Infiniti',
          model: 'Q60',
          year: 2021,
          color: 'Black',
          images: [
            'https://source.unsplash.com/600x600/?car&id=28&image=1',
            'https://source.unsplash.com/600x600/?car&id=28&image=2',
          ],
          licensePlate: '2345OPQ',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 250,
        },
        {
          make: 'Volvo',
          model: 'S60',
          year: 2020,
          color: 'Red',
          images: [
            'https://source.unsplash.com/600x600/?car&id=29&image=1',
            'https://source.unsplash.com/600x600/?car&id=29&image=2',
          ],
          licensePlate: '6789QRS',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 200,
        },
        {
          make: 'Peugeot',
          model: '508',
          year: 2021,
          color: 'White',
          images: [
            'https://source.unsplash.com/600x600/?car&id=30&image=1',
            'https://source.unsplash.com/600x600/?car&id=30&image=2',
          ],
          licensePlate: '1234RST',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 150,
        },
        {
          make: 'Renault',
          model: 'Megane',
          year: 2020,
          color: 'Blue',
          images: [
            'https://source.unsplash.com/600x600/?car&id=31&image=1',
            'https://source.unsplash.com/600x600/?car&id=31&image=2',
          ],
          licensePlate: '5678STU',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 100,
        },
        {
          make: 'Citroen',
          model: 'C5 Aircross',
          year: 2021,
          color: 'Black',
          images: [
            'https://source.unsplash.com/600x600/?car&id=32&image=1',
            'https://source.unsplash.com/600x600/?car&id=32&image=2',
          ],
          licensePlate: '9012TUV',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 80,
        },
        {
          make: 'Skoda',
          model: 'Octavia',
          year: 2020,
          color: 'Red',
          images: [
            'https://source.unsplash.com/600x600/?car&id=33&image=1',
            'https://source.unsplash.com/600x600/?car&id=33&image=2',
          ],
          licensePlate: '3456UVW',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 60,
        },
        {
          make: 'Seat',
          model: 'Leon',
          year: 2021,
          color: 'White',
          images: [
            'https://source.unsplash.com/600x600/?car&id=34&image=1',
            'https://source.unsplash.com/600x600/?car&id=34&image=2',
          ],
          licensePlate: '7890VWX',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 40,
        },
        {
          make: 'Dacia',
          model: 'Sandero',
          year: 2020,
          color: 'Blue',
          images: [
            'https://source.unsplash.com/600x600/?car&id=35&image=1',
            'https://source.unsplash.com/600x600/?car&id=35&image=2',
          ],
          licensePlate: '2345WXY',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 30,
        },
        {
          make: 'Lada',
          model: 'Niva',
          year: 2021,
          color: 'Black',
          images: [
            'https://source.unsplash.com/600x600/?car&id=36&image=1',
            'https://source.unsplash.com/600x600/?car&id=36&image=2',
          ],
          licensePlate: '6789XYZ',
          extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
          pricePerDay: 20,
        },
      ];
    return (
        <>
            <FilterCar />

            <section className="featured-cars">
                <h2> Cars</h2>
                <div className="cars-list">
                    {/* Render car components here */}
                </div>
            </section>
            <Container fluid className="px-5">
            <Row gap={4}>
                {carsData?.map((car) => (
                    <Col key={car.id} xs={12} md={4} lg={3} xl={3}>
                    <Link className="custom-card-link" to={`/details/${car.id}`}>
                        <CardProduct
                        car={car}
                        />
                    </Link>
                    </Col>
                ))}
            </Row>
      </Container>

            <Footer/>
        </>
    );
}

export default HomePage;

