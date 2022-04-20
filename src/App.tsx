import './App.css';
import MyTable from "./components/MyTable"
import PopUpTable from "./components/PopUpTable"
import {BrowserRouter ,Route, Routes} from "react-router-dom"
import * as React from 'react'
import { DATA } from './data/data';
import {useEffect, useState } from 'react';
import { Letter, PopupItem, Region, Year } from './types/DataType';

function App() {

  const [state, setState] = useState(DATA)
  const [cellId, setCellId] = useState(0)
  const [isNew, setIsNew] = useState(false)
  const [selectedCell, setSelectedCell] = useState<Letter>()
  const [editedCell, setEditedCell] = useState<Letter>()

  const handleCellId = (id: number, item: Letter) => {
    setCellId(id)
    if (!Object.keys(item).length) return
    setSelectedCell(item)
    localStorage.setItem('item', JSON.stringify(item))
    setIsNew(true)
  }

  useEffect(() => {
    if (isNew) {
      window.open(`/popup/:${cellId}`, 'pop-up', 'width=800,height=800')
      setIsNew(false)
    }
  }, [cellId, isNew])

  const getMessege = (e: MessageEvent) => {
    if (e.data.messege === 'OK!') setEditedCell(e.data.value);
  }

  useEffect(() => {
    if (selectedCell !== undefined && editedCell !== undefined) {
      selectedCell.popupData = editedCell.popupData
    }
  }, [editedCell])

  useEffect(() => {
    window.addEventListener('message', getMessege)
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyTable state={state} handleCellId={handleCellId}/>}/>
        <Route path={`/popup/:${cellId}`} element={<PopUpTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
