// const Products = () => {
//   const prods = ["prod1", "prod2", "prod3"];

//   return (
//     <ul>
//       {prods.map((prod, i) => (
//         <li key={i}>{prod}</li>
//       ))}
//     </ul>
//   );
// };

// export default Products;

// ===============================

"use client";

import { useState } from "react";

const Test = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleClick = () => {
    setSum(value1 + value2);
  };

  return (
    <form>
      <input
        type="number"
        value={value1}
        placeholder="Введіть число тут ..."
        onChange={(e) => setValue1(Number(e.target.value))}
      />

      <input
        type="number"
        value={value2}
        placeholder="Введіть число тут ..."
        onChange={(e) => setValue2(Number(e.target.value))}
      />

      <button type="button" onClick={handleClick}>
        Сума
      </button>

      <p>{sum}</p>
    </form>
  );
};

export default Test;
