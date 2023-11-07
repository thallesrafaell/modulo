const alunos = [
  { nome: "Thalles", curso: "Full-Stack Java", nota: 8 },
  { nome: "Harry", curso: "Full-Stack Java", nota: 6 },
  { nome: "Gina", curso: "Full-Stack Java", nota: 7 },
  { nome: "Naruto", curso: "Full-Stack Java", nota: 3 },
  { nome: "Monk D. Luffy", curso: "Full-Stack Java", nota: 2 },
  { nome: "Frank", curso: "Full-Stack Java", nota: 10 },
  { nome: "Sasuske", curso: "Full-Stack Java", nota: 8 },
  { nome: "Gabriel", curso: "Full-Stack Java", nota: 4 },
];

const aprovados = alunos.filter( alunos => {
  if (alunos.nota >= 6) {
    console.log(
      `O aluno ${alunos.nome} foi aprovado no curso ${alunos.curso} com a nota ${alunos.nota}`
    );
  }
});