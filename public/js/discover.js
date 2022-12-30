$(document)
.ready(function() {
    $('.ui.form')
    .form({
        fields: {
            name: {
                identifier  : 'name',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Por favor digite seu nome.'
                    }
                ]
            },
            surname: {
                identifier  : 'surname',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Por favor digite seu sobrenome.'
                    }
                ]
            },
            email: {
                identifier  : 'email',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Por favor digite seu email.'
                    },
                    {
                        type   : 'email',
                        prompt : 'Por favor digite um endereço de email válido.'
                    }
                ]
            },
        }
    });
});