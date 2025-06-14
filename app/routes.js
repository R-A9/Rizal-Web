import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("works", "routes/works.jsx"),
  // Group novel routes for better chunking
  route("novels", [
    route("noli-me-tangere", "routes/novels/noli-me-tangere.jsx"),
    route("el-filibusterismo", "routes/novels/el-filibusterismo.jsx")
  ]),
  // Group about routes for better chunking  
  route("about", [
    route("biography", "routes/about/biography.jsx"),
    route("timeline", "routes/about/timeline.jsx"),
    route("political-thought", "routes/about/political-thought.jsx"),
    route("legacy", "routes/about/legacy.jsx"),
    route("quotes", "routes/about/quotes.jsx"),
    route("interview", "routes/about/interview.jsx")
  ])
];
