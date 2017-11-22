import React from "react";
import renderer from "react-test-renderer";

import { SearchHeader, styles } from "../Header";

it("renders successfully", () => {
  const rendered = renderer.create(<SearchHeader />).toJSON();
  expect(rendered).toBeTruthy();
});

it("styles is an object", () => {
  expect(typeof styles).toBe("object");
});
