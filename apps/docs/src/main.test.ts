import { expect, test } from "vitest";

test("renders the docs application", async () => {
  document.body.innerHTML = '<div id="app"></div>';

  await import("./main");

  expect(document.querySelector("#header h1")?.textContent).toBe("Docs");
  expect(document.querySelector<HTMLElement>("#counter")?.innerText).toBe(
    "count is 0",
  );
});
