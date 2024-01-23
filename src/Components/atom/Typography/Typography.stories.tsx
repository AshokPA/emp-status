import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "./index";
storiesOf("Typography", module)
  .add("Greetings", () => <Typography text="Hai Sreelakshmi" />)
  .add("Press", () => <Typography text="Press Me" />);
