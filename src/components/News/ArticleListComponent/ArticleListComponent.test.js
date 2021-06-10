import React from "react";
import { render } from "@testing-library/react";
import ArticleListComponent  from "./ArticleListComponent";

describe("ArticleListComponent should exist", function () {

  test('loads items eventually',  async function(){
    let {getByTestId} = await Promise.resolve(render(<ArticleListComponent />));
    expect(getByTestId("article-list-test")).toBeTruthy()
  })
});