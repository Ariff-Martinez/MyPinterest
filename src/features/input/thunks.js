import { searchInputValue } from './inputSlice'

export const getImages = (inputImage = 'nature') => {
  // Peticion a la Api que recibe el valor del input que coloca el usuario
  return async (dispatch, getState) => {
    const url = `https://api.pexels.com/v1/search?query=${inputImage}&size=small&per_page=50`
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: '563492ad6f917000010000014374cc239e1f41f295983895ce13bb88'
      } // Esta api requiere autenticacion por API Key
    })
      .then(response => response.json())
      // Este es llamado del Slice y solo llena el arreglo vacio convirtiendose en nuestra data
      .then(data => dispatch(searchInputValue(data)))
      .catch((error) => {
        console.log('Error', error)
      })
  }
}
