import { Col, Card, Image } from "react-bootstrap";

export default function Panel({data: {id, name, cover, about, website}}) {
    return(
        <div>
            <Col key={id}>
                <Card>
                    <figure>
                        <Image src={cover} fluid />
                    </figure>

                    <div className="content">
                        <h3>{name}</h3>
                    </div>
                </Card>
            </Col>
        </div>
    )
}