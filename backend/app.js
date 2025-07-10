const wishlistRoutes = require('./routes/wishlist');
const reviewRoutes = require('./routes/reviews');

app.use('/api/wishlist', wishlistRoutes);
app.use('/api/reviews', reviewRoutes); 