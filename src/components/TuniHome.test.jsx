import { act, fireEvent, render, screen } from "@testing-library/react";
import TuniHome from "./TuniHome";

let motionChange;
beforeEach(() => {
  window.matchMedia = jest.fn(() => ({
    matches: false,
    addEventListener: jest.fn((event, callback) => { motionChange = callback; }),
    removeEventListener: jest.fn(),
  }));
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
  fireEvent.click(screen.getByRole("button", { name: "FIND A STORE" }));
  expect(onNavigate).toHaveBeenLastCalledWith("stores");
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
