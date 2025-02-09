import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Mainlayouts from "./Layouts/Mainlayouts.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from "./Pages/Home.jsx";

const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
      <Route element={<Mainlayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element= {<div>about</div>} />
        </Route> 
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
);

