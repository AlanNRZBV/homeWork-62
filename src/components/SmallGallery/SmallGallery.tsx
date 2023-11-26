import { Row } from 'react-bootstrap';
import { IGalleryItem } from '../../../types';
import { BASE_PLACEHOLDER_URL } from '../../constants/constants.ts';
import GalleryItem from "./GalleryItem.tsx";

const SmallGallery = () => {
  const galleryItems: IGalleryItem[] = [
    {
      title: 'Project #1',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum id officiis.',
      isSmall: true
    },
    {
      title: 'Project #2',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      isSmall: true
    },
    {
      title: 'Project #3',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius iste laborum non odit quae quisquam voluptatum!',
      isSmall: true
    },
    {
      title: 'Project #4',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet.',
      isSmall: true
    },
  ];

  return <Row className="mb-3">
    {galleryItems.map((item,index)=>(
        <GalleryItem title={item.title} img={item.img} description={item.description} key={index} isSmall={item.isSmall}/>
    ))}
  </Row>;
};

export default SmallGallery;

