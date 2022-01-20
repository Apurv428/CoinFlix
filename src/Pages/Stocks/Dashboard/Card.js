import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

const Item = ({ name, symbol, change, price, changesPercentage }) => {
  return (
    <div className="row">
      <div class="col-lg-6 mb-4">
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#4b006e",
            color: "white",
          }}
        >
          <Card.Body>
            <Card.Title>
              {name} ({symbol})
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem
              style={{
                backgroundColor: "#bc13fe",
              }}
            >
              {" "}
              <p style={{ color: "white", marginBottom: ".2px" }}>
                Price:{price}
              </p>
            </ListGroupItem>
            <ListGroupItem
              style={{
                backgroundColor: "#caa0ff",
              }}
            >
              <p>
              Change:
              {change < 0 ? (
                <span style={{ color: "red" }}>
                  {change}
                  <span>({changesPercentage.toFixed(2)} %)</span>
                </span>
              ) : (
                <span style={{ color: "green" }}>
                  {change}
                  <span>({changesPercentage.toFixed(2)} %)</span>
                </span>
               
              )
              } </p>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};
export default Item;
