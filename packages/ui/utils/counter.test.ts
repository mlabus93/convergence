import { expect, test } from "vitest";

import { setupCounter } from "./counter";

test("increments the counter when clicked", () => {
  const button = document.createElement("button");

  setupCounter(button);
  expect(button.innerText).toBe("count is 0");

  button.click();
  expect(button.innerText).toBe("count is 1");
});
