import { setupVite, serveStatic, log } from "./vite";
import { createApp } from "./app";

(async () => {
  const { app, server } = await createApp();

  // only setup vite in development
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
