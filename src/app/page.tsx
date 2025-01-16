import Addtodo from "./components/Addtodo";
import Navbar from "./components/Navbar";
import Todolist from "./components/Todolist";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>ToDo App (NextJS and Typescript)</h1>
        <Navbar />
        <Addtodo />
        <Todolist />
      </main>
    </div>
  );
}
