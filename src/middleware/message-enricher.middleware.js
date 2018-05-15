import { SET_USER_TYPING, CREATE_NEW_MESSAGE } from '../constants/internal-action-types.const'

export default store => next => action => {
  if (action.type === CREATE_NEW_MESSAGE) {
    const activeUser = store.getState().user

    return next({
      ...action,
      payload: {
        ...action.payload,
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
