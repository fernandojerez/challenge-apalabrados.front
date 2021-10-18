import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Characters } from "../../models/Characters";
import styles from "./CharactersResult.module.scss";

interface CharactersResultProps {
  input: string;
  model: Characters;
}

export const CharactersResult: FC<CharactersResultProps> = ({
  input,
  model,
}) => (
  <>
    <Typography variant="h6">{`El texto '${input}' contiene carácteres no alpha numericos`}</Typography>
    <TableContainer component={Paper} className={styles.Table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Carácter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(model.character).map((c, ix) => (
            <TableRow key={ix}>
              <TableCell>{c}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);
