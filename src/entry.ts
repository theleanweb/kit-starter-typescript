import { Router, view } from "leanweb-kit/runtime";

const app = new Router();

app.get("/", (_) => view(_, "home"));

export default app;
