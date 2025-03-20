export default function TabsSection({ onChange }) {
  return (
    <section className="sectionBtn-Tabs">
      <button onClick={() => onChange("main")} className="btn-Tabs">
        Главная
      </button>
      <button onClick={() => onChange("post")} className="btn-Tabs">
        {" "}
        Обратная связь
      </button>
      <button onClick={() => onChange("user")} className="btn-Tabs">
        {" "}
        Пользователи
      </button>
    </section>
  );
}
