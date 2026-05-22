import Link from "next/link";

const TypesRendering = () => {
  return (
    <div>
      <h4>Плюсы SSR</h4>
      <ol>
        <li>Лучше SEO</li>
        <li>Быстрее первый экран (First Paint)</li>
        <li>Хорошо для динамических данных</li>
        <li>Лучше для соцсетей</li>
      </ol>

      <h4>Минусы SSR</h4>
      <ol>
        <li>Нагрузка на сервер</li>
        <li>Медленнее навигация после первого захода</li>
        <li>Сложнее архитектура</li>
        <li>Возможны hydration errors</li>
      </ol>
      <Link href="/tutorialNextJS">Назад</Link>
      <br />
      <Link href="/">На Главную</Link>
    </div>
  );
};
export default TypesRendering;
