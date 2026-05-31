type Props = {
  children: React.ReactNode;
};

const PostLayout = ({ children }: Props) => {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};
export default PostLayout;
