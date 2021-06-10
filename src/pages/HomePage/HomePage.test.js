import React from "react";
import { render } from "@testing-library/react";
import HomePage  from "./HomePage";

describe("HomePage Component", function () {
  // it("should have hello world message", function () {
  //   let { getByTestId } = render(<HomePage />);
  //   expect(getByTestId("article-list"))
  // });

  test('loads items eventually',  async function(){
    let {getByTestId} = render(<HomePage />);
    expect(getByTestId("filter_input")).toBeTruthy();
  })
});