import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Dropdown from "../../components/Dropdown/Dropdown";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Dropdown target={<div>target</div>} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c2 {
      width: max-content;
      display: flex;
      flex-direction: column;
      position: absolute;
      transform: translate(-50%, 0);
      left: 50%;
      bottom: auto;
      background-color: #101a33;
      box-shadow: var(--shadows-level1);
      padding: 16px;
      max-height: 0px;
      overflow: hidden;
      z-index: 10;
      border-radius: var(--radii-small);
      opacity: 0;
      transition: max-height 0s 0.3s,opacity 0.3s ease-in-out;
      will-change: opacity;
      pointer-events: none;
    }

    .c0 {
      position: relative;
    }

    .c0:hover .c1,
    .c0:focus-within .c1 {
      opacity: 1;
      max-height: 400px;
      overflow-y: auto;
      transition: max-height 0s 0s,opacity 0.3s ease-in-out;
      pointer-events: auto;
    }

    <div
        class="c0"
      >
        <div>
          target
        </div>
        <div
          class="c1 c2"
        />
      </div>
    </DocumentFragment>
  `);
});
