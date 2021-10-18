import { Characters } from "./Characters";
import { Numbers } from "./Numbers";
import { Text } from "./Text";

export interface Classification {
  numbers?: Numbers;
  characters?: Characters;
  text?: Text;
}
