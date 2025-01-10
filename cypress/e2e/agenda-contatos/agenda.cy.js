/// <reference types="cypress" />

describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    
    cy.get('input[placeholder="Nome"]').type('Bruno');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('input[placeholder="E-mail"]').type('brunoalves@example.com');
    
    cy.contains('button', 'Adicionar').click();
    
    cy.contains('Bruno').should('exist');
    cy.contains('123456789').should('exist');
    cy.contains('brunoalves@example.com').should('exist');
    });
});
describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    
    cy.get('input[placeholder="Nome"]').type('João');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('input[placeholder="E-mail"]').type('joaodasilva@example.com');
    
    cy.contains('button', 'Adicionar').click();
    
    cy.contains('João').should('exist');
    cy.contains('123456789').should('exist');
    cy.contains('joaodasilva@example.com').should('exist');
    });
    describe('Agenda de Contatos - Inclusão', () => {
        it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        
        cy.get('input[placeholder="Nome"]').type('Renata');
        cy.get('input[placeholder="Telefone"]').type('123456789');
        cy.get('input[placeholder="E-mail"]').type('renatasantos@example.com');
        
        cy.contains('button', 'Adicionar').click();
        
        cy.contains('Renata').should('exist');
        cy.contains('123456789').should('exist');
        cy.contains('renatasantos@example.com').should('exist');
        });
    });
});
describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    
    cy.get('input[placeholder="Nome"]').type('Natalia');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('input[placeholder="E-mail"]').type('nataliaandrade@example.com');
    
    cy.contains('button', 'Adicionar').click();
    
    cy.contains('Natalia').should('exist');
    cy.contains('123456789').should('exist');
    cy.contains('nataliaandrade@example.com').should('exist');
    });
});
describe('Agenda de Contatos - Alteração', () => {
    it('Deve editar o terceiro contato na lista', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.wait(1000);

        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('input[placeholder="Nome"]').clear().type('Paulo');
        cy.get('input[placeholder="E-mail"]').clear().type('paulocosta@example.com');
        cy.get('input[placeholder="Telefone"]').clear().type('1234567890');
        
        cy.contains('button', 'Salvar').click();
        
        cy.contains('Paulo').should('exist');
        cy.contains('paulocosta@example.com').should('exist');
        cy.contains('1234567890').should('exist');
    });
});



describe('Agenda de Contatos - Remoção', () => {
    it('Deve remover o quinto contato na lista', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.wait(1000);


        cy.on('window:confirm', () => true);

    
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();


        cy.wait(1000);
        cy.contains('Nome do Contato').should('not.exist');
    });
});