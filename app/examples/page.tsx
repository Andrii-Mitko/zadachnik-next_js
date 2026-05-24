const Products = () => {
  const prods = ["prod1", "prod2", "prod3"];

  return (
    <ul>
      {prods.map((prod, i) => (
        <li key={i}>{prod}</li>
      ))}
    </ul>
  );
};

export default Products;
