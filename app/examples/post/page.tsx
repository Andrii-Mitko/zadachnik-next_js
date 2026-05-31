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
          <Link href="/examples">Назад</Link>
        </li>
        <li>
          <Link href="/">На Головну</Link>
        </li>
      </ul>
    </div>
  );
};

export default Post;
