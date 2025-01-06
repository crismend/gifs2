import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onImputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    // setCategorias((categories) => [inputValue, ...categories])
    onNewCategory(inputValue.trim())
    setInputValue('')
  }


  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={onImputChange}
      />
    </form>
  )
}
