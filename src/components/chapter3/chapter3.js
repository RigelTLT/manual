import "../../scss/styles.scss";

import { globalDisableСopying, loadHeader, loadFooter } from "../../js/global";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
});
globalDisableСopying();
