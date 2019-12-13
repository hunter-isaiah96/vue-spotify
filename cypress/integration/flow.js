describe('User Browing the website', () => {
  it('Spotify Login Works', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/auth')

    cy.get('button')
      .click()
      .should(() => {
        assert.isNotNull(localStorage.getItem('vuex'), 'is not null')
      })
    cy.url().should('include', '/browse/genres')
    cy.get('[data-cy=genre-list] > div')
      .its('length')
      .should('be.gt', 0)
  })

  it('New Releases Appear on Screen', () => {
    cy.get('[data-cy=new-releases-button]').click()
    cy.url().should('include', '/browse/newreleases')
    cy.get('[data-cy=new-releases-list]')
      .its('length')
      .should('be.gt', 0)
  })

  it('Artist is clicked', () => {
    let artist_name = ''
    console.log(cy.get('[data-cy=artist-link]')
      .first()
      .invoke('text'))

    cy.get('[data-cy=artist-link]')
      .first()
      .click()

    cy.contains(artist_name)
  })
})
