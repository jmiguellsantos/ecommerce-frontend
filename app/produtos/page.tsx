// app/produtos/page.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { getProdutos } from "@/services/produtos";
import Image from 'next/image';

const ProdutosPage: React.FC = () => {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
       const fetchProdutos = async () => {
         try{
            const produtosData = await getProdutos();
            setProdutos(produtosData);
           } catch (error: any) {
            setError(error.message)
           } finally {
             setLoading(false)
           }
      };

      fetchProdutos();
    }, [])

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="bg-gray-100 min-h-screen">
          <header className="bg-primary p-4 text-white">
              <div className="container mx-auto flex items-center justify-between">
                  <div className="flex items-center">
                      <Image src="/join_ti_logo.jpg" alt="Logo da loja" width={40} height={40} className="mr-2"/>
                      <h1 className="text-2xl font-bold text-black">Minha Loja</h1>
                   </div>
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        className="bg-white text-black px-3 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-white"
                    />
               </div>
          </header>
          <main className="container mx-auto mt-8 p-4">
              <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {produtos.map((produto: any) => (
                    <div key={produto.id} className="bg-white rounded shadow p-4">
                         <p><strong className="block mb-1">Nome:</strong> {produto.nome}</p>
                          <p><strong className="block mb-1">Descrição:</strong> {produto.descricao}</p>
                          <p><strong className="block mb-1">Preço:</strong> R${produto.preco}</p>
                           <p><strong className="block mb-1">Categoria:</strong> {produto.categoria.nome}</p>
                      </div>
                 ))}
             </div>
          </main>
             <footer className="bg-gray-800 text-white p-4 text-center mt-8">
                <p> © {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default ProdutosPage;