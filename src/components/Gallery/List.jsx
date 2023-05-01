import { Container, Row, Col } from "react-bootstrap"
import data from "../../data/data.json"
import Panel from "./Panel"

export default function List() {
    return(
            <section>
                <Container id="gallery">
                    <Row className="justify-content-center">
                        <Col className="text-center"><h2>My Collection</h2></Col>
                    {
                        data.map( 
                            (element) => (
                                element
                                ? <Panel data={element}/>
                                : <p>Loading...</p>
                            )
                        )
                    }
                    </Row>
                </Container>

            </section>
    )
}