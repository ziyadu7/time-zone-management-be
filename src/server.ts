import app from './app';
import { ENV } from './config/env';
const PORT = ENV.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
