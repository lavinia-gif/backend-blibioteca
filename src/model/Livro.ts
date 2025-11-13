import { DatabaseModel } from "./DatabaseModel.js";
import type{LivroDTO} from "../interface/LivroDTO.js";

const database=new DatabaseModel().pool;

class Livro{
    private idLivro: number;
    private titulo: string;
    private autor: string;
    private paginas: string;

    constructor(
        _idLivro:number,
        _titulo:string,
        _autor:string,
        _paginas:string,
        ) {
        this.idLivro = _idLivro;
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    }
    public getId(): number {
        return this.idLivro;
      }
    
       public setId(_idLivro: number): void{
        this.idLivro = _idLivro;
       }
    
    public getTitulo():string{
        return this.titulo;
    }
    public setTitulo(_titulo:string):void{
        this.titulo = _titulo;
    }
    public getpaginas():string{
        return this.paginas;
    }
    public setpaginas(_paginas:string):void{
        this.paginas = _paginas;
    }
    public getAutor():string{
        return this.autor;
    }
    public setAutor(_autor:string):void{
        this.autor = _autor;
    }

    public ler(paginaslidas:number):void{
        console.log(`o Livro ${this.titulo} do autor ${this.autor} está sendo lido .`);
    }

    public terminar ():void{
        console.log(`o livro ${this.titulo} do autor ${this.autor} foi terminado de ler.`);
    }
    static async listarLivro(): Promise<Array<Livro> | null> {
        try {
            // Cria uma lista vazia que irá armazenar os objetos do tipo Cliente
            let listaDeLivro: Array<Livro> = [];

            // Define a consulta SQL que irá buscar todos os registros da tabela 'clientes'
            const querySelectLivro = `SELECT * FROM livro;`;

            // Executa a consulta no banco de dados e aguarda a resposta
            const respostaBD = await database.query(querySelectLivro);

            // Percorre cada linha retornada pela consulta
            respostaBD.rows.forEach((LivroBD) => {
                // Cria um novo objeto Cliente usando os dados da linha atual (nome, cpf, telefone)
                const novoLivro: Livro= new LivroBD(
                    LivroBD.cor,
                    LivroBD.modelo,
                    LivroBD.ano,
                    LivroBD.marca
                );

                // Define o ID do cliente usando o valor retornado do banco
                novoLivro.setId(LivroBD.id_livro);

                // Adiciona o novo cliente à lista de clientes
                listaDeLivro.push(novoLivro);
            });

            // Retorna a lista completa de clientes
            return listaDeLivro;
        } catch (error) {
            // Em caso de erro na execução da consulta, exibe uma mensagem no console
            console.error(`Erro na consulta ao banco de dados. ${error}`);

            // Retorna null para indicar que houve uma falha na operação
            return null;
        }
    
}
    
    }

  


export default Livro;



