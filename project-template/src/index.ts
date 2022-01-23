import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import {User, getFavoritesAmount, getUserData} from './infoUser.js'
import { getTodosByCount } from './todosCount.js'


window.addEventListener('DOMContentLoaded', () => {
  const user: User = getUserData();
  renderUserBlock(getFavoritesAmount(), user.username, user.avatarUrl)
  getUserData()
  getFavoritesAmount()
  renderSearchFormBlock()
  renderSearchStubBlock()
  getTodosByCount(0)
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
