import { Card, } from "react-bootstrap";

export default function FeatureCard(props) {
  return (
    <Card style={{ height: "200px" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> {props.content}</Card.Text>
      </Card.Body>
    </Card>
  )
}