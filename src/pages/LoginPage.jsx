import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Socket } from "../App";

export default function LoginPage() {
  const [url, setUrl] = useState("ws://192.168.86.159:8080");
  const [socket, setSocket] = useContext(Socket);

  const handleLogin = () => {
    setSocket(new WebSocket(url));
  };
  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "1em",
        boxShadow: "0.5em 1em 1em rgba(0, 0, 0, 0.5)",
        //glassmorphism effect
        backdropFilter: "blur(5em)",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "25%",
        left: "25%",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <h1>user login</h1>
      <Form.Control
        style={{
          width: "50%",
        }}
        placeholder="username"
        type="text"
      />
      <Form.Control
        style={{ width: "50%" }}
        placeholder="password"
        type="password"
      />
      <Button
        variant="primary"
        onClick={() => {
          handleLogin();
        }}
      >
        login
      </Button>
    </div>
  );
}
