import { SET_USER_TYPING, CREATE_NEW_MESSAGE } from '../constants/internal-action-types.const'

// pun intended :D
const emojizz = text => (
  text
    .replace(':)', '\u{1F642}')
    .replace(';)', '\u{1F609}')
)

export default store => next => action => {
  if (action.type === CREATE_NEW_MESSAGE) {
    const activeUser = store.getState().user

    return next({
      ...action,
      payload: {
        ...action.payload,
        text: emojizz(action.payload.text),
        userId: activeUser.id,
      },
    })
  }

  if (action.type === SET_USER_TYPING) {
    const activeUser = store.getState().user

    return next({
      ...action,
      payload: {
        ...action.payload,
        userId: activeUser.id,
      },
    })
  }

  return next(action)
}
