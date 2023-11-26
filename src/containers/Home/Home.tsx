import {  Col, Row } from 'react-bootstrap';
import Featured from '../../components/Featured/Featured.tsx';
import SmallGallery from '../../components/SmallGallery/SmallGallery.tsx';

const Home = () => {
  return (
    <>
      <Row className="py-5 align-items-center justify-content-between">
        <Col>
          <h6>Hi, my name is</h6>
          <h1 className="my-3">John Doe</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dicta dolores id nesciunt nobis nostrum
            praesentium quas, quibusdam quo sunt totam velit voluptatem! Dolor.
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <img src="https://placehold.co/400x400" alt="hero img" className="rounded rounded-3" />
        </Col>
      </Row>
      <section>
        <Featured />
      </section>
      <section>
        <SmallGallery />
      </section>
    </>
  );
};

export default Home;
