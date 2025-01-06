import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"
import { getGifs } from "../helpers/getGif"



export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)

  }

  useEffect(() => {
    getImages()
  }, [])


  return (
    <div className="card-grid" >
      <h3>{category}</h3>
      <div>
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          )
          )
        }
      </div>

    </div>
  )
}
