import { useState } from "react"
import { AddCategory, GifGrid } from "./components/index.js"



export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState([])

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    setCategorias([newCategory, ...categorias])
  }



  return (
    <>
      <h1>GifExpertApp1</h1>


      <AddCategory onNewCategory={onAddCategory} />

      {
        categorias.map((category) => {
          return (
            <GifGrid key={category} category={category} />
          )
        })
      }
    </>
  )
}


// CdoCvUwWWCA9a0CEVxNSI6ZltSiOCCYm