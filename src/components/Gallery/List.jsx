import { Container, Row } from "react-bootstrap"
import data from "../../data/data.json"
import Panel from "./Panel"

export default function List() {
    return(
            <section>
                <Container>
                    <Row>
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