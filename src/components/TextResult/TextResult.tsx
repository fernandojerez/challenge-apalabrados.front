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
import { Text } from "../../models/Text";
import styles from "./TextResult.module.scss";

interface TextResultProps {
  model: Text;
}

export const TextResult: FC<TextResultProps> = ({ model }) => (
  <>
    <Typography variant="h6">{`El texto '${model.text}' es de tipo texto`}</Typography>
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
            <TableCell>Texto</TableCell>
            <TableCell>{model.text}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carácter inicial</TableCell>
            <TableCell>{model.start}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carácter final</TableCell>
            <TableCell>{model.end}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>
);
