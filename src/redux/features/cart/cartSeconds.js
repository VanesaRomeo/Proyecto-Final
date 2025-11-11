export const addProductToCart = (itemsInCart, producto) => {
    const libroInCart = itemsInCart.find((item) => item.id === producto.id);
  
    if (libroInCart) {
      return itemsInCart.map((item) =>
        item.id === libroInCart.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...itemsInCart, { ...producto, quantity: 1 }];
    }
  };
  
  export const removeProductFromCart = (itemsInCart, id) => {
    const libroRemove = itemsInCart.find((item) => item.id === id);
  
    if (libroRemove && libroRemove.quantity > 1) {
      return itemsInCart.map((item) =>
        item.id === libroRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      return itemsInCart.filter((item) => item.id !== libroRemove.id);
    }
  };