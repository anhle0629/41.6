import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  test("no right arrow for the last thing", ()=>{
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    expect(rightArrow).not.toBeInTheDocument()
  })

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle")
  fireEvent.click(leftArrow)

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();


  Test("left arrow to not be in the first page", ()=>{
    const leftArrow = screen.querySelector(".bi-arrow-left-circle")
    expect(leftArrow).not.toBeInTheDocument()
  })
});


//smoke test//
Test("to render carousel", ()=>{
  render(<Carousel />)
})


//snapshoot test// 
test("to match a snapshot", ()=>{
  const { asFragment } = render(<Carousel />)
  expect({asFragment}).toMatchSnapShot()
})