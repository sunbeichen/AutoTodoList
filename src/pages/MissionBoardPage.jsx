import { useContext, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { LogList } from "../App";

export default function MissionBoardPage() {
  const [logList, setLogList] = useContext(LogList);
  const todos = logList.filter((log) => log.type === 0);

  const MissionCard = todos.map((todo, index) => {
    return (
      <Card
        key={todo.id}
        style={{
          width: "20em",
          height: "25em",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "1em",
          boxShadow: "0.5em 1em 1em rgba(0, 0, 0, 0.5)",
          //glassmorphism effect
          backdropFilter: "blur(5em)",
        }}
      >
        <Card.Header>
          <Card.Title
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {todo.title}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>publish time: {todo.pubTime} </Card.Text>
          <Card.Text>deadline: {todo.ddl} </Card.Text>
          <Card.Text>description:</Card.Text>
          <Card.Text
            style={{
              overflow: "scroll",
              overflowX: "hidden",
              width: "100%",
              height: "8em",
              border: "1px solid black",
              padding: "0.5em",
            }}
          >
            {todo.content}
          </Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="primary"
            //smaller button
            size="sm"
            onClick={() => {
              const nextLogList = logList.map((log) => {
                if (log.id === todo.id) {
                  return {
                    ...log,
                    type: 1,
                  };
                } else {
                  return log;
                }
              });
              setLogList(nextLogList);
            }}
          >
            Accept
          </Button>
        </Card.Footer>
      </Card>
    );
  });

  return (
    //make a mission board, with a title at the top and a list of missions below
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Mission Board</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "55em",
          overflow: "scroll",
          overflowX: "hidden",
          //overflowY: "hidden",

          //to the next line
          flexWrap: "wrap",
          gap: "2em",
        }}
      >
        {MissionCard}
      </div>
    </div>
  );
}
