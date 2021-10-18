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
import { Numbers } from "../../models/Numbers";
import styles from "./NumberResult.module.scss";

interface NumberResultProps {
  model: Numbers;
}

export const NumberResult: FC<NumberResultProps> = ({ model }) => (
  <>
    <Typography variant="h6">{`El texto '${model.number}' es de tipo numero entero`}</Typography>
    <TableContainer component={Paper} className={styles.Table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Número</TableCell>
            <TableCell>{model.number}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Acumulado</TableCell>
            <TableCell>{model.sum}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>
);
