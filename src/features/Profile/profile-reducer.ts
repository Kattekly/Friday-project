const initialState = {}

type initialStateType = typeof initialState

export const profileReducer = (
  state: initialStateType = initialState,
  action: AppActionsType
): initialStateType => {
  switch (action.type) {
    case '': {
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

export type AppActionsType = any
