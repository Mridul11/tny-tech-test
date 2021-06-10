import React from "react";
import { render } from "@testing-library/react";
import ArticleComponent  from "./ArticleComponent";

describe("ArticleComponent Component", function () {

  test('loads items eventually',  async function(){
    let {getByTestId} = await Promise.resolve(render(<ArticleComponent />));
    expect(getByTestId("article-start")).toBeTruthy()
  })
});