import Card from "react-bootstrap/Card";
import { Stack } from "react-bootstrap";
// import { AiFillAlert } from "react-icons/ai";
// import CardStyle from './CardStyle'
import "./ss.css";
import Login from "./Login";
function Cards() {
  
  return (
    
    <>
      <Login className="container" />
      <Stack direction="horizontal" gap={3} className="container">
        {[
          "Dark",
          // 'Secondary',

          "Light",

          "Dark",
          "Light",
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{
              display: "inline-block",
              position: "relative",
            }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Stack>
      <section class="features">
        <div class="container">
          <div class="box-wrapper">
            <div class="box box-1">
              <i class="fas fa-space-shuttle fa-2x"></i>
              <h1 class="md">HEADING</h1>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, repellat.
              </p>
            </div>
            <div class="box box2">
              <i class="fas fa-people-arrows  fa-2x"></i>
              <h1 class="md">HEADING</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus.
              </p>
            </div>
            <div class="box box3">
              <i class="fas fa-meteor fa-2x"></i>
              <h1 class="md">HEADING</h1>

              <p>
                Lorem, ipsum dolor. ipsum dolor sit, amet consectetur
                adipisicing elit.
              </p>
              
            </div>
          </div>
        </div>
        
      </section>
      
    </>
  );
}

export default Cards;
