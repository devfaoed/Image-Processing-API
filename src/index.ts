import { app } from './app';

const PORT: number = 4000;

// Start server
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
