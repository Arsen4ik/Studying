import { Counter } from "./components/Counter";
import String from "./components/String";
import Users from "./components/Users";
import './App.scss'
import Employee from "./components/Employee";

export function App() {
  return (
    <>
      <Counter />
      <String />
      <Users />
      <Employee />
    </>
  )
}