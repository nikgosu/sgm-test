import React, {useEffect, useState} from 'react'
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
import Paper from "@mui/material/Paper"
import {Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material"
import {nanoid} from "nanoid"
import { PopUpData } from '../data/data'

const setId = () => {
  return nanoid();
};

const PopUpTable = () => {

  const [tableData, setTableData] = useState(PopUpData)

  const [value, setValue] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [currentUser, setCurrentUser] = useState('Roman')
  const [comment, setComment] = useState('')

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleChangeUser = (e: SelectChangeEvent) => {
    setCurrentUser(e.target.value)
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const addTableData = () => {
    setCurrentDate((new Date()).toString())
    setTableData([...tableData, {
      value: value,
      date: currentDate,
      user: currentUser,
      comment: comment
    }])
    console.log(`
		value ${value!== '' ? value : '0'},
		 ${currentUser}, 
		 ${ comment !== '' ? comment : 'default comment'}
		 `)
    setValue('0')
    setCurrentDate((new Date()).toString())
    setCurrentUser('Roman')
    setComment('')
  }

  useEffect(() => {
    setCurrentDate((new Date()).toString())
  }, [])

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={1}>value</TableCell>
              <TableCell colSpan={1}>date</TableCell>
              <TableCell colSpan={1}>user</TableCell>
              <TableCell colSpan={1}>comment</TableCell>
              <TableCell>
                <Button onClick={addTableData}>Add</Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  window.close()
                }}>Close</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tableData.map(user => (
                <TableRow key={setId()}>
                  <TableCell key={setId()}>{user.value}</TableCell>
                  <TableCell key={setId()}>{user.date.toString()}</TableCell>
                  <TableCell key={setId()}>{user.user}</TableCell>
                  <TableCell key={setId()}>{user.comment}</TableCell>
                </TableRow>
              ))
            }
            <TableRow>
              <TableCell>
                <InputLabel>Value</InputLabel>
                <TextField
                  value={value}
                  type='number'
                  onChange={handleChangeValue}
                />
              </TableCell>
              <TableCell>
                <InputLabel>Date</InputLabel>
                <TextField value={currentDate}/>
              </TableCell>
              <TableCell sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-select-small">User</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-simple-select"
                  value={currentUser}
                  label="User"
                  onChange={handleChangeUser}
                >
                  <MenuItem value='Petro'>Petro</MenuItem>
                  <MenuItem value='Roman'>Roman</MenuItem>
                  <MenuItem value='Anna'>Anna</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <InputLabel>Comment</InputLabel>
                <TextField
                  value={comment}
                  type='text'
                  onChange={handleCommentChange}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default PopUpTable