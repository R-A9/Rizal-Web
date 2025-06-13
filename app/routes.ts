import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("works", "routes/works.tsx"),
  route("novels/noli-me-tangere", "routes/novels/noli-me-tangere.tsx"),
  route("novels/el-filibusterismo", "routes/novels/el-filibusterismo.tsx"),
  route("about/biography", "routes/about/biography.tsx"),
  route("about/timeline", "routes/about/timeline.tsx"),
  route("about/political-thought", "routes/about/political-thought.tsx"),
  route("about/legacy", "routes/about/legacy.tsx"),
  route("about/quotes", "routes/about/quotes.tsx"),
  route("about/interview", "routes/about/interview.tsx")
] satisfies RouteConfig;
