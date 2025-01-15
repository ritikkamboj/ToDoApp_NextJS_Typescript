import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>ToDo App (NextJS and Typescript)</h1>
        <Addtodo />
        <Todolist />
      </main>
    </div>
  );
}
