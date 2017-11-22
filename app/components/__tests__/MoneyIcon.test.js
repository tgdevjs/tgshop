import React from "react";
import renderer from "react-test-renderer";

import { MoneyIcon, styles } from "../MoneyIcon";

it("renders successfully", () => {
  const rendered = renderer.create(<MoneyIcon />).toJSON();
  expect(rendered).toBeTruthy();
});

it("styles is an object", () => {
  expect(typeof styles).toBe("object");
});
