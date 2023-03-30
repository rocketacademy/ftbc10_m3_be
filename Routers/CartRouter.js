class CartRouter {
  constructor(express) {
    this.express = express;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", (req, res) => {
      // get the cart

      res.send("Getting cart");
    });

    router.post("/", (req, res) => {
      // logic to add to cart

      res.send("Added to cart");
    });

    router.put("/", (req, res) => {
      // logic to update cart
      res.send("edited card");
    });

    router.delete("/", (req, res) => {
      // logic to delete cart

      res.send("delete from cart");
    });

    return router;
  }
}

module.exports = CartRouter;
