import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock, renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(0, 'Wade Warren', './img/avatar.png')
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderEmptyOrErrorSearchBlock('Ничего не найдено..')
  renderSearchResultsBlock()
  renderToast(
    { 
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
      name: ''
    },
    {
      name: 'Понял',
      handler: () => {console.log('Уведомление закрыто')}}
  )
})
