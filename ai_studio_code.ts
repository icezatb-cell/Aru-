    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          shop: path.resolve(__dirname, 'shop.html'),
          product: path.resolve(__dirname, 'product.html'),
          ingredients: path.resolve(__dirname, 'ingredients.html'),
          about: path.resolve(__dirname, 'about.html'),
          reviews: path.resolve(__dirname, 'reviews.html'),
        },
      },
    },