import { IoSearch } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { handleInputChange } from '../../features/input/inputSlice'
import { getImages } from '../../features/input/thunks'

export const Search = () => {
  const { value } = useSelector(state => state.input)
  const dispatch = useDispatch()
  const onChange = (e) => {
    const inputValue = e.target.value
    dispatch(handleInputChange(inputValue))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getImages(value))
  }
  // Search
  // Todo: Falta hacerlo funcionar con la api
  return (
    <>
      <form
        onSubmit={onSubmit}
        className='flex justify-center items-center bg-gray-200 h-12  rounded-full'
        onChange={onChange}
      >
        <IoSearch className='text-1xl text-zinc-500' />
        <input
          className='bg-gray-200 w-3/4 pl-1 placeholder:pl-1 placeholder:text-zinc-500 focus:outline-none'
          type='text'
          placeholder='Buscar'
        />
      </form>
    </>

  )
}
