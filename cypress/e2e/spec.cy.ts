describe('Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve renderizar todos os campos do formulário', () => {
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="phone"]').should('be.visible');
    cy.get('input[name="age"]').should('be.visible');
  });

  it('deve renderizar o componente ImageInput em telas pequenas', () => {
    cy.viewport('iphone-6');
    cy.get('.md\\:hidden').find('input[type="file"]').should('exist');
  });

  it('deve renderizar o componente ImageInput em telas grandes', () => {
    cy.viewport('macbook-15');
    cy.get('.hidden.md\\:block').find('input[type="file"]').should('exist');
  });

  it('deve preencher e enviar o formulário corretamente', () => {
    cy.viewport('macbook-15');
  
    cy.get('input[name="name"]').type('Bernardo Cerqueira');
    cy.get('input[name="email"]').type('bernardocerqcontato@gmail.com');
    cy.get('input[name="phone"]').type('(21) 99760-1998');
    cy.get('input[name="age"]').type('26');

    const imageFile = 'public/avatar-teste.png';

    cy.get('.hidden.md\\:block').find('input[type="file"]').selectFile(imageFile);
    cy.get('button[type="submit"]').click();

    cy.get('.Vue-Toastification__container').should('contain.text', 'Usuário cadastrado com sucesso');
  });
});