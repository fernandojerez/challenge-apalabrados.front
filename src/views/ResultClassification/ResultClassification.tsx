import { Button } from "@mui/material";
import { FC } from "react";
import { Classification } from "../../models/Classification";
import { useHistory } from "react-router-dom";
import styles from "./ResultClassification.module.scss";
import { TextResult } from "../../components/TextResult/TextResult";
import { NumberResult } from "../../components/NumberResult/NumberResult";
import { CharactersResult } from "../../components/Characters/CharactersResult";

interface ResultClassificationProps {
  model: Classification;
}

export const ResultClassification: FC<ResultClassificationProps> = ({
  model,
}) => {
  const history = useHistory();
  return (
    <div className={styles.MainLayout}>
      {model.text && <TextResult model={model.text} />}
      {model.numbers && <NumberResult model={model.numbers} />}
      {model.characters && (
        <CharactersResult
          model={model.characters}
          input={model.input!}
        ></CharactersResult>
      )}
      <Button variant="contained" onClick={() => history.push("/")}>
        Regresar
      </Button>
    </div>
  );
};
