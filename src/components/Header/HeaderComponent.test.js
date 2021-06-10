import React from "react";
import { render } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter } from 'react-router-dom';

describe("HeaderComponent exist", function () {
    test('should match with snapshot', () => {
        const tree = render(
                <BrowserRouter>
                    <HeaderComponent />
                </BrowserRouter>
            )
        expect(tree).toMatchSnapshot();
    });
});