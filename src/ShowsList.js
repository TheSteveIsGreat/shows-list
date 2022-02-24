import { useState } from "react";
import React from "react";

//Function to add input, add button, 
const ShowsList = (props) => {
  const [list, setList] = useState(props.initialList || [])
  const [show, setShow] = useState('')
  const [edit, setEdit] = useState('')
  const [editing, setEditing] = useState(false)

  const renderShowsList = () => {
    return list.map((x) => {
      return (
        <div
          key={x.id}
          style={{ textDecoration: x.watched ? "line-through" : "" }}>
          <p onClick={() => toggleShow(x.id)}>{x.show}</p>
          <button onClick={() => deleteShow(x.id)}>Delete</button>
          
          {/* Trying to update but it isn't working */}
          <button onClick={() => setEditing(true)}>
            Edit
          </button>
          {editing && <form onSubmit={handleEdit}>
            <input placeholder={x.show} value={edit} onChange={(event) => { setEdit(event.target.value) }}></input>
            <button onClick={()=>setEditing(false)}>Update</button>
          </form>}
        </div>
      )
    })
  }


  const toggleShow = (id) => {
    const updatedList = list.map((show) => {
      if (show.id === id) {
        return { ...show, watched: !show.watched }
      }
      return show
    })
    setList(updatedList)
  }

  const deleteShow = (id) => {
    let filteredList = list.filter((x) => {
      return x.id !== id
    })
    setList(filteredList)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('show:', show)

    const newList = [...list, { id: Math.random(), show: show, watched: false }]
    setList(newList)
    setShow('')
  }

  const handleEdit = (event, id) => {
    event.preventDefault()
    const newEdit = list.map((x) => {
      if (id === x.id) {
        return {...x, name: x.name}
      }
      return newEdit
    })
    setEdit(newEdit)
  }

  //CREATE
  return (
    <div>
      <h1>{props.name}</h1>
      <form onSubmit={handleSubmit}>
        <input value={show} onChange={(event) => { setShow(event.target.value) }}></input>
        <button type="submit">Add</button>
      </form>
      <div>{renderShowsList()}</div>
    </div>
  )
}

export default ShowsList;