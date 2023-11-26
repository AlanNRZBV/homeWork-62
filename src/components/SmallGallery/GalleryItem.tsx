import { Card, Col } from 'react-bootstrap';
import { IGalleryItem } from '../../../types';
import { FC } from 'react';

const GalleryItem: FC<IGalleryItem> = ({ title, img, description, isSmall }) => {
  return isSmall ? (
    <Col lg={3}>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ) : (
    <Col lg={4}>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GalleryItem;
