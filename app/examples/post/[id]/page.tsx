import Link from "next/link";

const posts = ["post1", "post2", "post3", "post4", "post5"];

interface Props {
  params: Promise<{ id: string }>;
}

const Post = async ({ params }: Props) => {
  const { id } = await params;

  if (id === "all") {
    return (
      <>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <Link href={`/examples/post/${i + 1}`}>{post}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link href={`/examples/post`}>Назад</Link>
          </li>
        </ul>
      </>
    );
  }

  const index = Number(id);

  if (!Number.isInteger(index) || index < 1 || index > posts.length) {
    return (
      <>
        <h1>Not found</h1>
        <ul>
          <li>
            <Link href={`/examples/post/all`}>Назад</Link>
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <h1>{posts[index - 1]}</h1>
      <ul>
        <li>
          <Link href={`/examples/post/all`}>Назад</Link>
        </li>
      </ul>
    </>
  );
};

export default Post;
