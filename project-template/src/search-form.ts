import { renderBlock } from './lib.js'
import { FormInc, searchFormArg } from './intrSearchForm.js';
import { format, getLastDayNextMonth, changeDate } from './date-utils.js';

export function renderSearchFormBlock (dateArrival?: Date, dateDeparture?: Date):void {
  dateArrival = dateArrival || changeDate(new Date(), 1)
  const arrival = format(dateArrival);
  const departure = format(dateDeparture || changeDate(dateArrival, 2));
  const now = format(new Date());
  const LastDayOfNextMonth = format(getLastDayNextMonth(new Date()));
  
  type typesName = 'checkin' | 'checkout' | 'price'
  const formEvent = (event: SubmitEvent, values: typesName[]): void => {
    event.preventDefault()
    if (event.target) {
      const formData = new FormData(event.target as HTMLFormElement)
      const formValue: FormInc = {};
      values.forEach(k => {
        formValue[k] = <typesName>formData.get(k)
      })
      searchFormArg(formValue)
    }
  }
  const formAction = document.querySelector('#form');
  if(formAction) {
    const inputes:typesName[] = ['checkin', 'checkout', 'price']
    formAction.addEventListener('submit', (emit) => formEvent(emit, inputes))
  }
  
  renderBlock(
    'search-form-block',
    `
    <form id="form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrival}" min="${now}" max="${LastDayOfNextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departure}" min="${arrival}" max="${LastDayOfNextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
