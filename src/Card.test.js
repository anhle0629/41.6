import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card"

//smoke//
test("to render the card", ()=>{
    render(<Card />)
})


//snapshot//
it("should matches snapshoot", ()=>{
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
  })