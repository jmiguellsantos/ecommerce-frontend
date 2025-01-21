// app/categorias/page.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { getCategorias, createCategoria } from "@/services/categorias";
import Image from 'next/image';
import FormModal from "@/components/forms/FormModal";
import CategoriaForm from "@/components/forms/CategoriaForm";

const CategoriasPage: React.FC = () => {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false)


    useEffect(() => {
       const fetchCategorias = async () => {
         try{
            const categoriasData = await getCategorias();
             setCategorias(categoriasData);
          } catch (error: any) {
            setError(error.message)
           } finally {
             setLoading(false)
            }
      };

      fetchCategorias();
    }, [])

    const handleCreateCategoria = async (data: { nome: string, descricao: string }) => {
      try{
          await createCategoria(data)
           fetchCategorias()
           setIsModalOpen(false)
       } catch (error:any) {
           setError(error.message)
       }
    }

   const fetchCategorias = async () => {
        try {
            const categoriasData = await getCategorias();
            setCategorias(categoriasData);
          } catch (error: any) {
            setError(error.message);
        } finally {
             setLoading(false);
        }
    };

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
                <div className="flex justify-between items-center mb-4">
                     <h1 className="text-2xl font-bold">Lista de Categorias</h1>
                       <button
                            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none"
                           onClick={() => setIsModalOpen(true)}>Criar Categoria
                       </button>
                </div>
                <ul className="space-y-4">
                    {categorias.map((categoria: any) => (
                        <li key={categoria.id} className="border border-gray-200 rounded p-4">
                            <strong className="block mb-1">{categoria.nome}</strong>
                            <span className="block text-gray-600">{categoria.descricao}</span>
                        </li>
                    ))}
                </ul>
            </main>
             <footer className="bg-gray-800 text-white p-4 text-center mt-8">
                <p> © {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
            </footer>
            <FormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Criar Categoria"
                onSubmit={() => {}}
            >
                <CategoriaForm onSubmit={handleCreateCategoria} />
            </FormModal>
        </div>
    );
};

export default CategoriasPage;