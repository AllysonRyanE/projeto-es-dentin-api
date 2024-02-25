import yup from 'yup';

export const DentistaSchemaBase = yup.object().shape({
    nome: yup.string().required(),
    user: yup.string().required(),
    email: yup.string().email().required(),
    senha: yup.string().required().min(6),
    cpf: yup.string().required().matches(/^[0-9]+$/).min(11),
    rg: yup.string().required().matches(/^[0-9]+$/).min(7),
    cro: yup.string().required().matches(/^[0-9]+$/).min(12),
    especialidadeNN: yup.string().required(),
    especialidade2: yup.string().nullable(),
    especialidade3: yup.string().nullable(),
    telefone: yup.string().required().matches(/^[0-9]+$/).min(10),
    dataNasc: yup.date().required(),
    sexo: yup.string().oneOf(['M', 'F', 'N']).default('N'),
    cidade: yup.string().required(),
    uf: yup.string().required(),
    bairro: yup.string().required(),
    rua: yup.string().required(),
    endereco: yup.number().required(),
    fkConvenio: yup.number().required(),
  });
  