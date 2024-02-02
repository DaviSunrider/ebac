// nomes e notas
const alunos = [
  { nome: 'Han Solo', nota: 7 },
  { nome: 'Leia Organa', nota: 5 },
  { nome: 'Obi Wan', nota: 8 },
  { nome: 'Boba Fett', nota: 6 },
  { nome: 'Cassian Andor', nota: 9 },
  { nome: 'Mom Mothama', nota: 3 },
  { nome: 'Anakin Skywalker', nota: 10 },
  { nome: 'Qui Gon Jinn', nota: 4 },
  { nome: 'Yoda', nota: 2 },
  { nome: 'Jar Jar Binks', nota: 1 },
  { nome: 'Mace Windu', nota: 0},
  { nome: 'Ahsoka Tano', nota: 6 }
];

// função de retorno nota > 6
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

// resultado
const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);