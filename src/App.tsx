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

  const handleCellId = (id: number, item: Letter) => {
    setCellId(id)
    if (!Object.keys(item).length) return
    localStorage.setItem('item', JSON.stringify(item))
    setIsNew(true)
  }

  useEffect(() => {
    if (isNew) {
      window.open(`/popup/:${cellId}`, 'pop-up', 'width=800,height=800')
      setIsNew(false)
    }
  }, [cellId, isNew])



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyTable state={state} handleCellId={handleCellId}/>}/>
        <Route path={`/popup/:${cellId}`} element={<PopUpTable />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
