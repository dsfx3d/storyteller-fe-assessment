import "../src/app/globals.css";
import React from "react";
import type {Preview} from "@storybook/react";
import {cn} from "../src/lib/utils";
import {inter, sansRegular} from "../src/lib/fonts";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "812px",
          },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
          type: "tablet",
        },
        desktop: {
          name: "Desktop Large",
          styles: {
            width: "1024px",
            height: "900px",
          },
          type: "desktop",
        },
      },
    },
  },
  decorators: [
    Story => (
      <div className={cn(inter.variable, sansRegular.variable)}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
