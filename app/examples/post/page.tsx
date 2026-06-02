import Link from "next/link";

const Post = () => {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link href="/examples/post/all">Post</Link>
        </li>
        <li>
          <Link href="/examples">Приклади</Link>
        </li>
        <li>
          <Link href="/advancedRouting">Маршрутизація</Link>
        </li>
        <li>
          <Link href="/">На Головну</Link>
        </li>
      </ul>
    </div>
  );
};

export default Post;
