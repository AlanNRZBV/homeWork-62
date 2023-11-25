import { Row } from "react-bootstrap";
import FeaturedItem from "./FeaturedItem.tsx";
import { IFeaturedItem } from "../../types";
import { BASE_PLACEHOLDER_URL } from "../constants/constants.ts";

const Featured = () => {

  const featuredItems: IFeaturedItem[] = [
    {src: BASE_PLACEHOLDER_URL + '100x100'},
    {src: BASE_PLACEHOLDER_URL + '100x100'},
    {src: BASE_PLACEHOLDER_URL + '100x100'},
    {src: BASE_PLACEHOLDER_URL + '100x100'},
    {src: BASE_PLACEHOLDER_URL + '100x100'},
    {src: BASE_PLACEHOLDER_URL + '100x100'},
  ]

  return (
    <Row className="bg-body-tertiary py-3 px-3 mb-3 rounded rounded-3">
      {featuredItems.map((item,index)=>(
        <FeaturedItem src={item.src} key={index}/>
      ))}
    </Row>
  );
};

export default Featured;