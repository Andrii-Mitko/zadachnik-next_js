type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  return (
    <main>
      <h1>Product details</h1>
      <p>Product ID: {id}</p>
    </main>
  );
};

export default ProductPage;
