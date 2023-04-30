import { renderDashboard } from "./dashboard.js";
import { renderDetail } from "./detail.js";

if (window.location.search.includes ("?country=")) {
  renderDetail();
} else {
  document.querySelector(".filters").classList.add("active");
  renderDashboard();
 };