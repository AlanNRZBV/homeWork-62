import { Col } from "react-bootstrap";
import { FC } from "react";
import { IFeaturedItem } from "../../types";

const FeaturedItem: FC<IFeaturedItem> = ({src}) => {
  return (
    <Col><img className="rounded rounded-3" src={src} alt="featured brand"/></Col>
  );
};

export default FeaturedItem;