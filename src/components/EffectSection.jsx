import { useEffect, useState, useCallback } from "react";
import Button from "./Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }

    fetchUsers(false);
  }, []);

  return (
    <section>
      <button onClick={() => setModal(true)} className="modalBtnOpen">
        {" "}
        Открыть окно{" "}
      </button>

      <Modal open={modal}>
        <button onClick={() => setModal(false)} className="modalBtnClose">
          &#10006;
        </button>

        <h4 className="modalText">
          Нас уже 1000 пользователей!!! Мы рады каждому из вас и надемся, что
          наше сообщество будет расти дальше!
        </h4>
      </Modal>

      {loading && <p>Loading ...</p>}

      {!loading && (
        <>
          <h1> Список пользователей </h1>
          <label htmlFor="name" className="textWhite label">
            Поиск по имени
          </label>
          <input type="text" className="control" {...input} />
          <ul className="listUsers">
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}> {user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
