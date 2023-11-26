import { Row } from "react-bootstrap";
import { IGalleryItem } from "../../../types";
import { BASE_PLACEHOLDER_URL } from "../../constants/constants.ts";
import GalleryItem from "../../components/SmallGallery/GalleryItem.tsx";

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
    },{
      title: 'Project #5',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos esse quasi quo?',
    },{
      title: 'Project #6',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
    },{
      title: 'Project #7',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },{
      title: 'Project #8',
      img: BASE_PLACEHOLDER_URL + '200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet cum dolorum facilis incidunt magni rem saepe sint suscipit? Libero, nam sunt?',
    },
  ];
  return (
    <Row className="g-2 my-3">
      {galleryItems.map((item,index)=>(
        <GalleryItem title={item.title} img={item.img} description={item.description} key={index}/>
      ))}
    </Row>
  );
};

export default Gallery;