import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),
  route("works", "routes/works.jsx"),
  route("novels/noli-me-tangere", "routes/novels/noli-me-tangere.jsx"),
  route("novels/el-filibusterismo", "routes/novels/el-filibusterismo.jsx"),
  route("about/biography", "routes/about/biography.jsx"),
  route("about/timeline", "routes/about/timeline.jsx"),
  route("about/political-thought", "routes/about/political-thought.jsx"),
  route("about/legacy", "routes/about/legacy.jsx"),
  route("about/quotes", "routes/about/quotes.jsx"),
  route("about/interview", "routes/about/interview.jsx")
];
