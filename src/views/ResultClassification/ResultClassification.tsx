import { Button } from "@mui/material";
import { FC } from "react";
import { Classification } from "../../models/Classification";
import { useHistory } from "react-router-dom";
import styles from "./ResultClassification.module.scss";

interface ResultClassificationProps {
  model: Classification;
}

export const ResultClassification: FC<ResultClassificationProps> = ({
  model,
}) => {
  const history = useHistory();
  return (
    <div className={styles.MainLayout}>
      <span>{`Debo pintar el contenido ${JSON.stringify(model)}`}</span>
      <Button variant="contained" onClick={() => history.push("/")}>
        Regresar
      </Button>
    </div>
  );
};
