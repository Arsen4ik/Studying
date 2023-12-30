import { Routes, Route } from "react-router-dom";

import Chat from "./Chat";
import Main from "./Main";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/chat" element={<Chat />} />
  </Routes>
);

export default AppRouter;
