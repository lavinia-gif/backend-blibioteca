class Livro{

    private titulo: string;
    private autor: string;
    private paginas: string;

    constructor(
        _titulo:string,
        _autor:string,
        _paginas:string,
        ) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
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

}


