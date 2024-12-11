import * as bootstrap from "bootstrap";
import "../scss/styles.scss";
import { globalDisableСopying, loadHeader, loadFooter } from "./global";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
});

globalDisableСopying();
