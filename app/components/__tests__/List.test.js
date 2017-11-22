import React from "react";
import renderer from "react-test-renderer";

import { ProductListItem, styles } from "../List";

it("renders successfully", () => {
  const rendered = renderer.create(<ProductListItem />).toJSON();
  expect(rendered).toBeTruthy();
});

it("styles is an object", () => {
  expect(typeof styles).toBe("object");
});
