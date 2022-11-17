import { Card } from "react-bootstrap";
import BlackP from "../asset/img/blackpanther.jpg";
import Aum from "../asset/img/aum.jpg";
import One from "../asset/img/one.jpeg";
import Silenced from "../asset/img/silenced.jpg";
import Raya from "../asset/img/raya.jpg";
import Dora from "../asset/img/dora.png";

const Action = () => {
  return (
    <>
      <div className="Action">
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={BlackP} />
        </Card>

        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Aum} />
        </Card>
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Silenced} />
        </Card>
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={One} />
        </Card>
      </div>
      <div className="Action2">
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Raya} />
        </Card>
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Dora} />
        </Card>
      </div>
    </>
  );
};
export default Action;
