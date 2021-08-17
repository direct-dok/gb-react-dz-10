import { profileReducer } from './profileReducer'
import isAuthProfileAction from '../../store/actionCreators/is_auth_profile_action'
import toggleOnlineAction from '../actionCreators/toggle_online_action'

const state = {
  profile: {
    name: 'John',
    age: 23,
    online: true, 
    isAuthed: false
  }
}

describe('Profile reducer Test', () => {

  it('Toggle online profile', () => {

    let copyObj = Object.assign({}, state.profile)
    copyObj.online = !state.profile.online

    let action = toggleOnlineAction(copyObj)
    let newState = profileReducer(state, action)

    expect(newState.profile.online).toBeFalsy()

  })

  it('successful authentication test', () => {

    let action = isAuthProfileAction(true)
    let newState = profileReducer(state, action)

    expect(newState.profile.isAuthed).toBeTruthy()

  })

})