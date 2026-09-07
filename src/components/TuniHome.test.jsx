import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import TuniHome from "./TuniHome";
import { apiRequest } from "../lib/api";

jest.mock("../lib/api", () => ({ ...jest.requireActual("../lib/api"), apiRequest: jest.fn() }));

let motionChange;
beforeEach(() => {
  jest.clearAllMocks();
  window.matchMedia = jest.fn(() => ({
    matches: false,
    addEventListener: jest.fn((event, callback) => { motionChange = callback; }),
    removeEventListener: jest.fn(),
  }));
});

test.each(["wheat", "white"])("adds the correct %s bread using the existing cart action", async (type) => {
  const products = [{ _id: "w", productName: "Tuni Wheat Bread", price: 60 }, { _id: "b", productName: "Tuni White Bread", price: 50 }];
  apiRequest.mockResolvedValue({ products });
  const onAddToCart = jest.fn().mockResolvedValue(undefined);
  render(<TuniHome register={() => {}} onNavigate={jest.fn()} onAddToCart={onAddToCart} />);
  fireEvent.click(screen.getByRole("button", { name: `Add Tuni ${type} bread to cart` }));
  await waitFor(() => expect(onAddToCart).toHaveBeenCalledWith(products[type === "wheat" ? 0 : 1]));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("added to cart."));
});

test("failed cart requests show an error and allow retry", async () => {
  apiRequest.mockResolvedValue([{ _id: "w", name: "Wheat Bread" }]);
  const onAddToCart = jest.fn().mockRejectedValue(new Error("Cart unavailable"));
  render(<TuniHome register={() => {}} onNavigate={jest.fn()} onAddToCart={onAddToCart} />);
  const button = screen.getByRole("button", { name: "Add Tuni wheat bread to cart" });
  fireEvent.click(button);
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Cart unavailable"));
  expect(button).toBeEnabled();
});

const renderHome = () => {
  const onNavigate = jest.fn();
  return { onNavigate, ...render(<TuniHome register={() => {}} onNavigate={onNavigate} whatsappNumber="919443311007" />) };
};

test("hero uses the local muted background video and existing navigation actions", () => {
  const { container, onNavigate } = renderHome();
  const video = container.querySelector(".tuni-film video");
  expect(video.autoplay).toBe(true);
  expect(video.muted).toBe(true);
  expect(video.loop).toBe(true);
  expect(video.playsInline).toBe(true);
  expect(video.controls).toBe(false);
  expect(video.preload).toBe("metadata");
  expect(video.querySelector("source")).toHaveAttribute("src", "/videos/tuni-breads-hero.mp4");
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Traditional Goodness.Modern Nutrition.");
  fireEvent.click(screen.getByRole("button", { name: "ORDER NOW" }));
  expect(onNavigate).toHaveBeenLastCalledWith("products");
  fireEvent.click(screen.getByRole("button", { name: "DISCOVER OUR STORY" }));
  expect(onNavigate).toHaveBeenLastCalledWith("about");
  expect(container.querySelector(".tuni-film").nextElementSibling).toHaveClass("tuni-philosophy");
});

test("reduced motion skips the video and reacts to preference changes", () => {
  const preference = { matches: true, addEventListener: jest.fn((event, callback) => { motionChange = callback; }), removeEventListener: jest.fn() };
  window.matchMedia.mockReturnValue(preference);
  const { container, unmount } = renderHome();
  expect(container.querySelector(".tuni-film video")).toBeNull();
  expect(container.querySelector(".tuni-film__media img")).toBeInTheDocument();
  act(() => { preference.matches = false; motionChange(); });
  expect(container.querySelector(".tuni-film video")).toBeInTheDocument();
  act(() => { preference.matches = true; motionChange(); });
  expect(container.querySelector(".tuni-film video")).toBeNull();
  unmount();
  expect(preference.removeEventListener).toHaveBeenCalledWith("change", motionChange);
});

test("a failed video source falls back to the existing hero image", () => {
  const { container } = renderHome();
  fireEvent.error(container.querySelector(".tuni-film source"));
  expect(container.querySelector(".tuni-film video")).toBeNull();
  expect(container.querySelector(".tuni-film__media img")).toBeInTheDocument();
});
