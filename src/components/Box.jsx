import isPropValid from "@emotion/is-prop-valid";
import { flexbox, layout, position, space, typography } from "styled-system";

import styled from "../emotion";

const Box = styled("div", {
  shouldForwardProp: prop => isPropValid(prop) && prop !== "as"
})(flexbox, layout, position, space, typography);

export default Box;
