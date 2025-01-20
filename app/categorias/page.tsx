import React from "react";

const categoriasMock = [
    { id: '1', nome: 'Eletrônicos', descricao: 'Produtos eletrônicos em geral' },
    { id: '2', nome: 'Livros', descricao: 'Livros de todos os gêneros' },
    { id: '3', nome: 'Roupas', descricao: 'Roupas masculinas e femininas' },
];

const CategoriasPage: React.FC = () => {
    return (
        <div>
            <h1>Lista de Categorias</h1>
            <ul>
                {categoriasMock.map((categoria) => (
                    <li key={categoria.id}>
                        <strong>{categoria.nome}</strong> - {categoria.descricao}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriasPage;