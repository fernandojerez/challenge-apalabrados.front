import { Characters } from "./Characters";
import { Numbers } from "./Numbers";
import { Text } from "./Text";

export interface Classification {
  input?: string;
  numbers?: Numbers;
  characters?: Characters;
  text?: Text;
}
