import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function Home() {
  const location = useLocation();

  return (
    <ul>
      <li>
        <Link
          to={{
            state: { from: location.pathname },
            pathname: `/colors`,
          }}
        >
          Обзор по семейству цветов
        </Link>
      </li>
      <li>
        <Link
          to={{
            state: { from: location.pathname },
            pathname: `/cataloges`,
          }}
        >
          Обзор по каталогу
        </Link>
      </li>
    </ul>
  );
}
