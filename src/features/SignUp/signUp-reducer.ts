const initialState = {}
type initialStateType = typeof initialState

export const signUpReducer = (state: initialStateType = initialState, action: AppActionsType) => {
    switch (action.type) {
        case '': {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}



export type AppActionsType = any