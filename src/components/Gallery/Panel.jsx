import { Col, Card, Image } from "react-bootstrap";

export default function Panel({data: {id, name, cover, about, website}}) {
    return(
        <div>
            <Col key={id} sm={10} md={6} lg={4}>
                <Card className="p-3">
                    <figure>
                        <Image src={cover} fluid />
                    </figure>

                    <div className="content">
                        <h3>{name}</h3>
                        <p>{about}</p>
                    </div>
                </Card>
            </Col>
        </div>
    )
}