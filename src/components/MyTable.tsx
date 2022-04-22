import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { nanoid } from "nanoid";
import {Data, Letter, PopupItem, Region, Year} from "../types/DataType";
import {FC, useState} from "react";

interface Props {
  state: Data
  handleCellId: (id: number, item: Letter) => void
}

const setId = () => {
  return nanoid();
};

const MyTable:FC<Props> = (props: Props) => {
  const regions = Object.entries(props.state)
  const letters = ['xx', 'yy', 'zz', 'ww', 'xx', 'yy', 'zz', 'ww', 'xx', 'yy', 'zz', 'ww']

  const getResultObj = (id: number, value: number, dateRelease: string) => {
    return {
      id,
      value,
      dateRelease
    }
  }

  const getValueCell = (yearsObj: Region): Letter[] => {

    let result = []

    if (Object.entries(yearsObj)[0][0] === '2017') {
      const items:Letter[] = Object.values(Object.entries(yearsObj)[0][1])
      items.forEach((item, i) => {
        result.push(item)
      })
      result.push(getResultObj(22, items[1].value * items[2].value, `${items[1].dateRelease} - ${items[2].dateRelease}`))
    } else {
      result.push({id: 28, value: false}, {id: 29, value: false}, {id: 30, value: false})
    }

    if (Object.entries(yearsObj)[1][0] === '2018') {
      const items:Letter[] = Object.values(Object.entries(yearsObj)[1][1])
      items.forEach(item => {
        result.push(item)
      })
      result.push(getResultObj(23, items[1].value * items[2].value, `${items[1].dateRelease} - ${items[2].dateRelease}`))
    } else {
      result.push({id: 24, value: false}, {id: 25, value: false}, {id: 26, value: false}, {id: 27, value: false})
    }

    if (Object.entries(yearsObj)[2] !== undefined) {
      const items:Letter[] = Object.values(Object.entries(yearsObj)[2][1])
      items.forEach(item => {
        result.push(item)
      })
      result.push(getResultObj(28, items[1].value * items[2].value, `${items[1].dateRelease} - ${items[2].dateRelease}`))
    }

    if (Object.entries(yearsObj)[1][0] === '2019') {
      const items:Letter[] = Object.values(Object.entries(yearsObj)[1][1])
      items.forEach(item => {
        result.push(item)
      })
      result.push(getResultObj(27, items[1].value * items[2].value, `${items[1].dateRelease} - ${items[2].dateRelease}`))
    }
    return result
  }

  const handlerCell = (id: number | undefined, item: Letter) => {
    if (id !== undefined) {
      props.handleCellId(id, item)
    }
  }

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2}>Regions</TableCell>
              <TableCell colSpan={4} align="center">
                2017
              </TableCell>
              <TableCell colSpan={4} align="center">
                2018
              </TableCell>
              <TableCell colSpan={4} align="center">
                2019
              </TableCell>
            </TableRow>
            <TableRow>
              {
                letters.map(letter => (
                  <TableCell key={setId()}>{letter}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              regions.map(({...region}) => (
                <TableRow key={setId()}>
                  <TableCell>{region[0]}</TableCell>
                  {
                    getValueCell(region[1].G).map((item) => (
                      item.value !== false
                        ?
                        <TableCell onClick={() => {
                          handlerCell(item.id, item)
                        }} key={item.id}>{item.value} <br/> {item.dateRelease}</TableCell>
                        :
                        <TableCell key={setId()}/>
                    ))
                  }
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MyTable;
