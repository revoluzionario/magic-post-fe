import { Card, Image } from "react-bootstrap";

export default function TestimonalCard(props) {
  return (
    <Card style={{ height: "600px" }}>
      <Card.Body>
        <Card.Title className="text-center py-3">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className=""
            width={20}
            height={20}
          >
            <path
              d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
              className=""
            ></path>
          </svg>
        </Card.Title>
        <Card.Text style={{ height: "250px" }}> {props.content}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ paddingBottom: "30px" }}>
        <Card.Title className="text-center">{props.name}</Card.Title>
        <Card.Text className="text-center">{props.role}</Card.Text>
        <div className="w-100 d-flex">
          <Image src={props.image} style={{ width: "100px", height: "100px" }} roundedCircle className="align-self-center mx-auto" />
        </div>
      </Card.Footer>
    </Card>
  )
}