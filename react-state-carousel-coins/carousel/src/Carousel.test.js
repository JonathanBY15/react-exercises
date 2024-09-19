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

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// Smoke test
it("renders without crashing", function() {
  render(<Carousel title="Test Carousel" photos={[{ src: "test.jpg", caption: "test caption" }]} />);
});

// Snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<Carousel title="Test Carousel" photos={[{ src: "test.jpg", caption: "test caption" }]} />);
  expect(asFragment()).toMatchSnapshot();
});

// Left arrow bug test
it("moves to the previous image when left arrow is clicked", function() {
  const photos = [
    { src: "image1.jpg", caption: "Image 1" },
    { src: "image2.jpg", caption: "Image 2" }
  ];

  const { getByText, container } = render(<Carousel title="Test Carousel" photos={photos} />);

  // Move forward to the second image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // Assert that the second image is displayed
  expect(getByText("Image 2 of 2.")).toBeInTheDocument();

  // Click the left arrow to go back to the first image
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // Assert that the first image is displayed
  expect(getByText("Image 1 of 2.")).toBeInTheDocument();
});

// Test for arrow visibility
it("hides left arrow on first image and right arrow on last image", function() {
  const photos = [
    { src: "image1.jpg", caption: "Image 1" },
    { src: "image2.jpg", caption: "Image 2" }
  ];

  const { container } = render(<Carousel title="Test Carousel" photos={photos} />);

  // Check that the left arrow is not visible on the first image
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  expect(leftArrow).toHaveClass("hidden");  // Left arrow should be hidden initially
  expect(rightArrow).not.toHaveClass("hidden");  // Right arrow should be visible

  // Move to the last image
  fireEvent.click(rightArrow);

  // Check that the right arrow is not visible on the last image
  expect(leftArrow).not.toHaveClass("hidden");  // Left arrow should be visible now
  expect(rightArrow).toHaveClass("hidden");  // Right arrow should be hidden now
});