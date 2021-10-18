import { useState } from "react";
import { InputClassification } from "./InputClassification/InputClassification";
import { ResultClassification } from "./ResultClassification/ResultClassification";
import { Classification } from "../models/Classification";
import { Card, CardContent, Typography } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  const [model, setModel] = useState<Classification>({});
  const onClassification = (m: Classification) => setModel(m);
  return (
    <Router>
      <div className={styles.AppArea}>
        <Card sx={{ minWidth: 275, maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h4">Apalabrados</Typography>
            <Switch>
              <Route exact path="/">
                <InputClassification onClassification={onClassification} />
              </Route>
              <Route path="/result">
                <ResultClassification model={model} />
              </Route>
            </Switch>
          </CardContent>
        </Card>
      </div>
    </Router>
  );
}

export default App;
