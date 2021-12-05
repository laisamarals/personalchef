export class Usuario {
  id: string;
  email: string;
  senha: string;
  is_chef: boolean;
  descricao_chef: string;
  foto: string;
  nome: string;
  sexo: string;
  endereco: string;
  complemento: string;
  telefone: string;
  nascimento: string;
  estrelas: number;

  constructor() {
    this.email = '';
    this.senha = '';
    this.is_chef = false;
    this.descricao_chef = '';
    this.foto = '';
    this.nome = '';
    this.sexo = 'M';
    this.endereco = '';
    this.complemento = '';
    this.telefone = '';
    this.nascimento = '';
    this.estrelas = null;
  }
}
