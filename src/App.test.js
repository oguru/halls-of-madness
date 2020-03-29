import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { mount, shallow } from "enzyme";

describe("App tests", () => {
  let component;

  beforeEach(() => {
    component = mount(App);
  });

  it("should render the faces and eyes on the page", () => {
    component.find
    expect(component.find(randomNum).toBe(!null));
  });
});
