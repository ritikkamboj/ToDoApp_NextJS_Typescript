import Addtodo from "./components/Addtodo";
import Navbar from "./components/Navbar";
import Todolist from "./components/Todolist";
import styles from "./page.module.css";
import { RiTodoFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>
          <RiTodoFill className="icons" />
          ToDo App (NextJS and Typescript)
          <RiTodoFill className="icons" />
        </h1>
        <Navbar />
        <Addtodo />
        <Todolist />
      </main>
    </div>
  );
}
