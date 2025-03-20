import { useState } from "react";
import Button from "./Button";
import EffectSection from "./EffectSection";

export default function Post() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });

  //const [name, setName] = useState ("")
  //const [reason, setReason] = useState ("help")
  //const [hasError, setHasError] = useState (false)

  function handleNameChange(event) {
    //setName (event.target.value)
    //setHasError(event.target.value.trim().length == 0)
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length == 0,
    }));
  }

  //function toggleError(){
  // setHasError((prew)=> !prew)

  return (
    <section>
      <h3> Напишите нам</h3>
      {/*<Button onClick ={toggleError}>togle error</Button>*/}

      <form>
        <label htmlFor="name" className="textWhite label">
          Имя
        </label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason" className="textWhite label">
          Причина обращения{" "}
        </label>

        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error"> Ошибка на саите </option>
          <option value="help"> Нужна помощь </option>
          <option value="suggest"> Предложения </option>
        </select>

        {/* <pre className ="textWhite">
{JSON.stringify(form, null, 2)}
   
            </pre>*/}

        <Button disabled={form.hasError}> Отправить </Button>
      </form>
    </section>
  );
}
