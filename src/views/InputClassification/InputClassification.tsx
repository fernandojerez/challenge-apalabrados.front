import { TextField, Button } from "@mui/material";
import { FC, useState } from "react";
import { useHistory } from "react-router";
import { Classification } from "../../models/Classification";
import styles from "./InputClassification.module.scss";

interface InputClassificationProps {
  onClassification: (model: Classification) => void;
}

export const InputClassification: FC<InputClassificationProps> = ({
  onClassification,
}) => {
  const history = useHistory();
  const [text, setText] = useState<string>("");
  const classifyText = () => {
    const request = new Request(
      "https://ff-apalabrados.herokuapp.com/classify?text=" +
        encodeURIComponent(text),
      {
        method: "GET",
        mode: "cors",
      }
    );
    fetch(request)
      .then((response) => response.json())
      .then((json) => {
        history.push("/result");
        onClassification(json as Classification);
      });
  };
  return (
    <div className={styles.MainLayout}>
      <TextField
        label="Texto"
        variant="outlined"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <Button variant="contained" onClick={classifyText}>
        Clasificar
      </Button>
    </div>
  );
};
