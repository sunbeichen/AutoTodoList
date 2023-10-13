import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { v4 } from "uuid";

export default function MainPage() {
  const [logList, setLogList] = useState([
    {
      type: 0,
      content: "todo1",
      setTime: "2021-10-1",
      planDuration: "1h",
      doneTime: "2021-10-2",
      id: v4(),
    },
    {
      type: 0,
      content: "todo3",
      setTime: "2021-10-1",
      planDuration: "1h",
      doneTime: "2021-10-2",
      id: v4(),
    },
    {
      type: 0,
      content: "todo4",
      setTime: "2021-10-1",
      planDuration: "1h",
      doneTime: "2021-10-2",
      id: v4(),
    },
    {
      type: 0,
      content: "todo5",
      setTime: "2021-10-1",
      planDuration: "1h",
      doneTime: "2021-10-2",
      id: v4(),
    },
    {
      type: 1,
      content: "doing1",
      id: v4(),
    },
    {
      type: 2,
      content: "done1",
      id: v4(),
    },
    {
      type: 0,
      content: "todo2",
      setTime: "2021-10-1",
      planDuration: "1h",
      doneTime: "2021-10-2",
      id: v4(),
    },
    {
      type: 1,
      content: "doing2",
      id: v4(),
    },
    {
      type: 2,
      content: "done2",
      id: v4(),
    },
  ]);
  console.log(logList);
  //type 0: todo, 1: doing, 2: done
  const todos = logList.filter((log) => log.type === 0);
  const doings = logList.filter((log) => log.type === 1);
  const dones = logList.filter((log) => log.type === 2);

  const TodoCom = todos.map((todo, index) => {
    const [editTime, setEditTime] = useState(false);
    return (
      <Card
        key={todo.id}
        style={{
          width: "80%",
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(5em)",
        }}
      >
        <Card.Header>代办任务 {index + 1}</Card.Header>
        <Card.Body>
          <Card.Text>{todo.content}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <div>创建时间 :</div>
            {
              //if editTime is true, show input, else show time
              editTime ? <input type="date" /> : <div>{todo.setTime}</div>
            }
            <Button
              variant="outline-primary"
              //small button
              size="sm"
              onClick={() => {
                setEditTime(!editTime);
              }}
            >
              edit
            </Button>
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <div>截止时间 :</div>
            <div>{todo.doneTime}</div>
          </ListGroup.Item>
          <ListGroup.Item>3</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  });

  return (
    <div
      //let clildren in a row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5%",
        position: "relative",
        top: "5%",
        height: "90%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "30em",
          height: "100%",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "1em",
          boxShadow: "0.5em 1em 1em rgba(0, 0, 0, 0.5)",
          //glassmorphism effect
          backdropFilter: "blur(5em)",
          justifyContent: "center",
          alignItems: "center",
          overflow: "scroll",
          overflowX: "hidden",
          // overflowY: "hidden",
        }}
      >
        <h1>待办任务</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1em",
          }}
        >
          {TodoCom}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "30em",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "1em",
          boxShadow: "0.5em 1em 1em rgba(0, 0, 0, 0.5)",
          //glassmorphism effect
          backdropFilter: "blur(5em)",
        }}
      >
        1
      </div>
      <div
        style={{
          textAlign: "center",
          width: "30em",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "1em",
          boxShadow: "0.5em 1em 1em rgba(0, 0, 0, 0.5)",
          //glassmorphism effect
          backdropFilter: "blur(5em)",
        }}
      >
        1
      </div>
    </div>
  );
}
