import { createContext, useState } from "react";
import MainPage from "./pages/MainPage";
import MissionBoardPage from "./pages/MissionBoardPage";
import { v4 } from "uuid";

export const LogList = createContext(null);
export const Socket = createContext(null);

function App() {
  const [logList, setLogList] = useState([
    {
      type: 0,
      title: "todo1",
      content: "todo123",
      pubTime: "2021-10-1",
      planDuration: "1h",
      ddl: "2021-10-2",
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

  const [socket, setSocket] = useState(null);

  return (
    <LogList.Provider value={[logList, setLogList]}>
      <Socket.Provider value={[socket, setSocket]}>
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(30deg, #656e8b 15%, #0c5e74 50%,  #17304e 100%)",
            height: "100%",
            width: "100%",
          }}
        >
          {/* <MainPage /> */}
          <MissionBoardPage />
        </div>
      </Socket.Provider>
    </LogList.Provider>
  );
}

export default App;
