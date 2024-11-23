export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET_APP_STATUS': {
      return { ...state, status: action.payload.status }
    }
    case 'APP/SET_ERROR': {
      return { ...state, error: action.payload.error }
    }
    default:
      return state
  }
}

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: 'APP/SET_APP_STATUS',
    payload: { status },
  } as const
}

export const setAppErrorAC = (error: string | null) => {
  return {
    type: 'APP/SET_ERROR',
    payload: { error },
  } as const
}

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetErrorActionType = ReturnType<typeof setAppErrorAC>

type ActionsType = SetAppStatusActionType | SetErrorActionType
