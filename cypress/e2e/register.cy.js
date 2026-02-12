describe('Cadastro - Cenários de Teste', () => {
  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/register');
  });

  it('01 - Cenario de testes 1: Deve realizar cadastro com sucesso', () => {
    cy.get('#user').type('Nome Teste');
    // email único para evitar conflitos
    cy.get('#email').type(`teste+${Date.now()}@example.com`);
    cy.get('#password').type('senha123456');

    cy.get('#btnRegister').click();

    // Confirmar sucesso via alerta
    cy.get('#swal2-title', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Cadastro realizado!');
  });

  it('02 - Cenario de testes 2: Deve validar nome vazio/inválido', () => {
    // nome vazio
    cy.get('#user').clear();
    cy.get('#email').type('valido@example.com');
    cy.get('#password').type('senha123456');

    cy.get('#btnRegister').click();

    // Mensagem de validação esperada
    cy.contains('O campo nome deve ser prenchido').should('be.visible');
  });

  it('03 - Cenario de testes 3: Deve validar email vazio/inválido', () => {
    cy.get('#user').type('Nome Teste');
    // email inválido
    cy.get('#email').clear().type('email-invalido');
    cy.get('#password').type('senha123456');

    cy.get('#btnRegister').click();

    cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible');
  });

  it('04 - Cenario de testes 4: Deve validar senha vazia ou com menos de 6 dígitos', () => {
    cy.get('#user').type('Nome Teste');
    cy.get('#email').type('valido2@example.com');
    // senha curta
    cy.get('#password').clear().type('12345');

    cy.get('#btnRegister').click();

    cy.contains('O campo senha deve ter pelo menos 6 dígitos').should('be.visible');
  });
});
