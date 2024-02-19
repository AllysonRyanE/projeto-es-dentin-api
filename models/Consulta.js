import {DataTypes} from 'sequelize';
import {sequelize} from '../config/database.js';

import {Paciente} from './Paciente.js';
import {Dentista} from './Dentista.js';
import {Consultorio} from './Consultorio.js';

export const Consulta = sequelize.define('Consulta', {
  pkConsulta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  fkPaciente: {
      type: DataTypes.INTEGER,
      allowNull: true, 
  },
  dataConsulta: {
      type: DataTypes.DATE,
      allowNull: false
  },
  fkDentista: {
      type: DataTypes.INTEGER,
      allowNull: true,
  },
  tipo: {
      type: DataTypes.STRING(45),
      allowNull: false
  },
  orientacoes: {
      type: DataTypes.STRING(200),
      allowNull: false
  },
  preco: {
      type: DataTypes.DOUBLE,
      allowNull: false
  },
  sala: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
  },
  status: {
      type: DataTypes.STRING(10),
      allowNull: false
  },
  fkConsultorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
  }
}, {
  tableName: 'consultas',
  timestamps: false
});


Consulta.belongsTo(Paciente, { foreignKey: 'fkPaciente', targetKey: 'pkPaciente' });
Consulta.belongsTo(Dentista, { foreignKey: 'fkDentista', targetKey: 'pkDentista' });
Consulta.belongsTo(Consultorio, { foreignKey: 'fkConsultorio', targetKey: 'pkConsultorio' });


//module.exports = Consulta;