import { HashLink } from "react-router-hash-link";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Main() {
    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <h1>Gallery</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro incidunt accusantium fugit, sit unde ut tempora perspiciatis officia numquam doloribus vel, ab non possimus sed culpa veniam, vero facere.
                        </p>
                        <HashLink to="/#gallery"><Button> See Gallery</Button></HashLink>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}