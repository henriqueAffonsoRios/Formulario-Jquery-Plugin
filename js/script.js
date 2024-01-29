$(document).ready(function(){

  $('#telefone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');

  $('form').on('submit', function(e){
    e.preventDefault();

    $('form').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        cpf: {
          required: true
        },
        telefone: {
          required: true
        },
        endereco: {
          required: true
        },
        cep: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Por favor, Insira o nome no campo',
        },
        email: {
          required: 'Por favor, Insira o e-mail no campo',
          email: 'Por favor, Insira um e-mail válido'
        },
        cpf: 'Por favor, Insira o CPF no campo',
        telefone: 'Por favor, Insira o telefone no campo',
        endereco: 'Por favor, Insira o endereço no campo',
        cep: 'Por favor, Insira o CEP no campo'
      }
    })
  })
});
