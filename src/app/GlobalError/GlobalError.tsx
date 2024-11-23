import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../store.ts'
import { selectAppError } from '../app-selectors.ts'
import { setAppErrorAC } from '../app-reducer.ts'

import 'react-toastify/dist/ReactToastify.css'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectAppError)
  console.log(errorMessage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={5000} />
}
