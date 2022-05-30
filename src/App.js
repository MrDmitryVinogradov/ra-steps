import './App.css';

import React, { useState } from "react";

import AddWalkForm from './components/AddWalkForm'

import WalksList from './components/WalksList'

import WalkObj from './components/walkObj'

function App() {

  const [walks, setWalks] = useState([
  ])

  const [form, setForm] = useState({
    date: '',
    range: ''
  })

  function handleDate(ev) {
    setForm(prevForm => ({...prevForm, date: ev.target.value}))
  }
  function handleRange(ev) {
    setForm(prevForm => ({ ...prevForm, range: ev.target.value }))
  }

  function newWalk(evt) {
    evt.preventDefault();
    if (form.date && form.range) {
      const walk = new WalkObj(form.date, form.range);
      let match = false;
      walks.map(el => {
        if (el.date === walk.date) {
          el.range = Number(el.range) + Number(walk.range);
          match = true;
        }
      })
      if (match) {
        setWalks(prevWalks => {
          return [...prevWalks]
        })
      }
      if (!match) {
        setWalks(prevWalks => {
          return [...prevWalks, walk]
        })
      }
      setForm({ date: '', range: '' })
    }
  }

  function onRemove(evt) {
    evt.preventDefault();
    const id = evt.target.closest('.walk').id;
    setWalks(prevWalks => prevWalks.filter(el => el.id != id))

  }
  function onEdit(evt) {
    const id = evt.target.closest('.walk').id;
    let date = '';
    let range = '';
    walks.forEach((el) => {
      if (el.id === id) {
        date = el.date;
        range = el.range;
      }
      setForm(prevForm => ({ ...prevForm, date: date }))
      setForm(prevForm => ({...prevForm, range: range}))
    })
   
  }

  return (
    <div className="App">
      <h1> УЧЕТ ПРОГУЛОК</h1>
      <AddWalkForm handleSubmit={newWalk}
        handleDate={handleDate}
        handleRange={handleRange}
        form={form}/>
      <WalksList walks={walks}
        onEdit={onEdit}
        onRemove={onRemove}/>
    </div>
  );
}

export default App;
