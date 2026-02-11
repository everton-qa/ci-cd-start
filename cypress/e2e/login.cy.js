describe('Login - Cenários de Sucesso', () => {
  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/login');
  });

  it('Deve realizar login com sucesso com dados válidos', () => {
    // Preencher e-mail
    cy.get('#user').type('teste@example.com');

    // Preencher senha
    cy.get('#password').type('senha12345');

    // Clicar no botão de login
    cy.get('#btnLogin').click();

    // Verificar se a mensagem "Login realizado" é exibida
    cy.get('#swal2-title')
      .should('be.visible')
      .and('contain', 'Login realizado');
  });

  it('Deve realizar login com sucesso e verificar a classe swal2-title', () => {
    cy.get('#user').type('usuario@test.com');
    cy.get('#password').type('password123');

    cy.get('#btnLogin').click();

    // Verificar a presença da mensagem com múltiplas validações
    cy.get('h2.swal2-title')
      .should('exist')
      .should('have.id', 'swal2-title')
      .should('be.visible')
      .and('have.text', 'Login realizado');
  });

  it('Deve exibir alerta de sucesso após o login', () => {
    cy.get('#user').type('admin@automation.com');
    cy.get('#password').type('admin@123');

    cy.get('#btnLogin').click();

    // Aguardar o elemento ser visível
    cy.get('#swal2-title', { timeout: 5000 }).should('be.visible');

    // Validar o conteúdo exato
    cy.get('#swal2-title').invoke('text').should('equal', 'Login realizado');
  });

  it('Deve permitir marcar "Lembrar de mim" antes de fazer login com sucesso', () => {
    // Marcar o checkbox de "Lembrar de mim"
    cy.get('#materialUnchecked').check();

    // Preencher credenciais
    cy.get('#user').type('teste.user@email.com');
    cy.get('#password').type('senhaForte123');

    // Fazer login
    cy.get('#btnLogin').click();

    // Confirmar mensagem de sucesso
    cy.get('#swal2-title')
      .should('be.visible')
      .and('contain', 'Login realizado');

    // Verificar se o checkbox permanece marcado
   // cy.get('#materialUnchecked').should('be.checked');
  });

//  it('Deve fazer login com sucesso usando Enter key na senha', () => {
 //   cy.get('#user').type('teste@email.com');
//    cy.get('#password').type('senhaCorreta456{enter}');
//
//    // Verificar mensagem de sucesso
//    cy.get('#swal2-title')
//      .should('be.visible')
//      .and('contain', 'Login realizado');


  it('Deve validar elementos da tela de login antes da submissão', () => {
    // Validar elementos da tela
    cy.get('section#login_area').should('be.visible');
    cy.get('.account_form h3').should('contain', 'Login');
    cy.get('#user').should('have.value', '');
    cy.get('#password').should('have.attr', 'minlength', '8');
    cy.get('#btnLogin').should('be.visible');

    // Fazer login
    cy.get('#user').type('valido@test.com');
    cy.get('#password').type('password@123');
    cy.get('#btnLogin').click();

    // Confirmar sucesso
    cy.get('#swal2-title').should('contain', 'Login realizado');
  });
});
