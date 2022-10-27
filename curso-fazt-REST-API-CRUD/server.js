const express = require("express");
const morgan = require("morgan");

const app = express();

let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];
app.use(morgan("dev"));
app.use(express.json());
// ruta para obtencion de todos los productos
app.get("/products", (req, res) => {
  res.json(products);
});

// guardado de un producto nuevo pasado desde el cliente
// y retornando el array completo de todos los productos
app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(newProduct);
});

// actualizar un producto en especifico
app.put("/products/:id", (req, res) => {
  const Actualizacion = req.body;

  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound)
    return res.status(404).json({
      mensage: "product not found",
    });
    products = products.map((p) => p.id == parseInt(req.params.id) ? { ...p, ...Actualizacion } : p);

  res.json({
    message: 'product update successfully'
  })
});

// eliminar un producto en especifico
app.delete("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound)
    return res.status(404).json({
      mensage: "product not found",
    });
  products = products.filter((p) => p.id !== parseInt(req.params.id));

  res.sendStatus(204);
});

// metodo get para obtener un solo producto dependendo de su id
app.get("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound)
    return res.status(404).json({
      mensage: "product not found",
    });

  res.json(productFound);
});

//puerto donde escuchará el servidor
app.listen(3000);
console.log(`server on port ${3000}`);
