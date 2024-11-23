import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer.ts'

type ServerError = {
  errorMessages: Array<{ field: string; message: string }>
}

export const handleAppError = (error: unknown, dispatch: Dispatch) => {
  //backend error
  //errorMessage = err.response.data.errorMessages[0].message

  // network error
  //errorMessage = err.message

  //native error

  let errorMessage: string

  if (isAxiosError<ServerError>(error)) {
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errorMessage = (error as Error).message
  }

  dispatch(setAppErrorAC(errorMessage))
}
