import { renderWithProvider } from "../../testHelpers";
import { Alert } from "../../components/Alert";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Alert title="Alert title">Description</Alert>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c3 {
      align-self: center;
      fill: currentColor;
      color: currentColor;
      flex-shrink: 0;
    }

    .c5 {
      color: var(--colors-text);
      font-weight: 600;
      line-height: 1.5;
      font-size: 16px;
    }

    .c6 {
      color: var(--colors-text);
      font-weight: 400;
      line-height: 1.5;
      font-size: 16px;
    }

    .c0 {
      display: flex;
    }

    .c2 {
      background-color: var(--colors-secondary);
      border-radius: 16px 0 0 16px;
      color: #101a33;
      padding: 12px;
    }

    .c4 {
      flex: 1;
      padding-bottom: 12px;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 12px;
    }

    .c1 {
      position: relative;
      background-color: #101a33;
      border-radius: 16px;
      box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),0px 1px 1px rgba(0, 0, 0, 0.05);
    }

    @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {
      .c3 {
        filter: none!important;
      }
    }

    <div
        class="c0 c1"
      >
        <div
          class="c2"
        >
          <svg
            class="c3"
            color="currentColor"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            />
          </svg>
        </div>
        <div
          class="c4"
        >
          <div
            class="c5"
          >
            Alert title
          </div>
          <p
            class="c6"
            style="word-break: break-word;"
          >
            Description
          </p>
        </div>
      </div>
    </DocumentFragment>
  `);
});
