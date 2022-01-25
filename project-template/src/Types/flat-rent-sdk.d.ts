export function cloneDate(date: Date): void
  
export function addDays(date: Date, days: number): void

export const backendPort = 3040
export const localStorageKey = 'flat-rent-db'

export class FlatRentSdk {
  private _generateDateRange(checkInDate: Date, checkOutDate: Date): void

  /**
     * Get flat by ID.
     * 
     * @param {string} id Flat ID.
     * @returns {Promise<Object|null>} Flat.
     */
    
  get(id: string): void

  /**
     * Search for flats.
     * 
     * @param {Object} parameters Search parameters
     * @param {string}parameters.city City name
     * @param {Date} parameters.checkInDate Check-in date
     * @param {Date} parameters.checkOutDate Check-out date
     * @param {number} [parameters.priceLimit] Max price for a night
     * @returns {Object[]} List of suitable flats.
     */
  search(parameters: { city: string; checkInDate: Date; checkOutDate: Date; priceLimit: number }): void

  /**
     * Book flat.
     * 
     * @param {number} flatId 
     * @param {Date} checkInDate 
     * @param {Date} checkOutDate
     * @returns {number}
     */

  book(flatId: number, checkInDate: Date, checkOutDate: Date): void
        
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): number

  _resetTime(date: number): number

  _calculateDifferenceInDays(startDate: { getTime: () => number }, endDate: { getTime: () => number }): void

  _areAllDatesAvailable(flat: number, dateRange: number[]): void

  _formatFlatObject(flat: number, nightNumber: number): void

  _readDatabase(): void

  _writeDatabase(database: string): string

  _syncDatabase(database: string): string
}

declare function nightNumber(flat: number, nightNumber: number): void

