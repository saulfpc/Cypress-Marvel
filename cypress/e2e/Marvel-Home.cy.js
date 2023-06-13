describe('Marvel Home Test Suite', () => {
  /**
   * The visit to https://www.marvel.com
   * takes almost a minute for the website
   * to trigger the load state, to prevent failure
   * increase time for page to load
   */
  it('Visit Home PAge', () => {
    cy.visit('https://www.marvel.com')
  })
})