import { Row } from "react-bootstrap";
import { IGalleryItem } from "../../../types";
import { BASE_PLACEHOLDER_URL } from "../../constants/constants.ts";

const Gallery = () => {
  const galleryItems: IGalleryItem[] = [
    {
      title: 'Project #1',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum id officiis.',
    },
    {
      title: 'Project #2',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      title: 'Project #3',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius iste laborum non odit quae quisquam voluptatum!',
    },
    {
      title: 'Project #4',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet.',
    },
  ];
  return (
    <Row>

    </Row>
  );
};

export default Gallery;