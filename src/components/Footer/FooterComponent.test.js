import React from "react";
import { render } from "@testing-library/react";
import FooterComponent  from "./FooterComponent";

describe("FooterComponent exist", function () {

  test('loads the footer eventually',  async function(){
    let {getByTestId} = render(<FooterComponent />);
    expect(getByTestId("footer-start")).toBeTruthy();
  })
});