/// <reference types="cypress" />

describe('Testing Home Page', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('Check the home page main title', () => {
        cy.get('#main-page-title')
          .should('have.text', 'Make Commerce Better for Everyone');
    });

    it('Check page header', () => {
        cy.get('header')
          .should('be.visible');
    });

    it('Check if elements exists with default value of 5', () => {
        cy.get('.pictures-grid .element-modal')
          .should('have.length', 5);
    });
});