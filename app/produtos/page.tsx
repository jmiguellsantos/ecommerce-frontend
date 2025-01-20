import React from 'react';

 const produtosMock = [
    { id: '1', nome: 'Notebook', descricao: 'Notebook i7', preco: 5000.00, categoria: 'Eletrônicos' },
    { id: '2', nome: 'A Culpa é das Estrelas', descricao: 'Livro de ficção', preco: 30.00, categoria: 'Livros' },
    { id: '3', nome: 'Camiseta', descricao: 'Camiseta Branca', preco: 50.00, categoria: 'Roupas' },
];

const ProdutosPage: React.FC = () => {
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtosMock.map((produto) => (
                    <li key={produto.id}>
                        <strong>{produto.nome}</strong> - {produto.descricao} - Preço: R${produto.preco} - Categoria: {produto.categoria}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProdutosPage;