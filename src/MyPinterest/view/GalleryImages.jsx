import { useSelector } from 'react-redux'

export const GalleryImages = () => {
  const { dataImages } = useSelector(state => state.input)

  return (
    <div className='columns-2 gap-0 md:columns-7'>
      {dataImages.map(image => {
        return (
          <div key={image.id} className='w-full aspect-video pb-4 '>
            <img src={image.src.original} alt={image.alt} className='rounded-3xl px-2' loading='lazy' />
          </div>
        )
      })}
    </div>
  )
}
