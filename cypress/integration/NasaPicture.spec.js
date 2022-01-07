/// <reference types="cypress" />

describe('Testing NasaPicture component', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('Check the element modal exists', () => {
        cy.get('.pictures-grid .element-modal')
          .first()
          .should('be.visible');
    });

    it('Check the title, date, and description of a modal', () => {
        cy.get('.pictures-grid .element-modal')
          .first()
          .get('#picture-title')
          .should('exist');
        cy.get('.pictures-grid .element-modal')
          .first()
          .contains('Date:');
        cy.get('.pictures-grid .element-modal')
          .first()
          .contains('Description:');
    });

    it('Check the element image', () => {
        cy.get('.pictures-grid .element-modal img')
          .should('be.visible')
          .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    });

    it('Check like and unlike buttons', () => {
        cy.get('.pictures-grid .element-modal .like-toggle button')
          .first()
          .should('have.text', 'Like')
          .click();
        cy.get('.pictures-grid .element-modal .like-toggle button')
          .last()
          .should('have.text', 'Unlike')
    });
});