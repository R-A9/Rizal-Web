import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("works", "routes/works.tsx"),
  route("novels/noli-me-tangere", "routes/novels/noli-me-tangere.tsx"),
  route("novels/el-filibusterismo", "routes/novels/el-filibusterismo.tsx"),
  route("about/biography", "routes/about/biography.tsx"),
  route("about/timeline", "routes/about/timeline.tsx")
] satisfies RouteConfig;
