import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Pratos } from '../components/Pratos';

function EditarProduto() {
    // Recuperando o ID do produto selecionado com useParams()
    const { id } = useParams();
    // Utilizando useNavigate para fazer um redirecionamento
    const navigate = useNavigate();

    // Filtrando o produto pelo ID
    const recProdutoListaById = Pratos.filter((item) => item.id == id);

    // Verificando se o produto foi encontrado
    if (recProdutoListaById.length === 0) {
        // Redirecionando o usuário ou exibindo uma mensagem de erro caso o produto não exista.
        navigate('/produtos');
        return null;
    }

    // Obtendo o primeiro (e único) produto da lista filtrada
    const produto = recProdutoListaById[0];

    /* Hook - useState */
    const [produtoAtualizado, setProdutoAtualizado] = useState({ ...produto });

    /* Funções */
    const handleSubmit = (event) => {
        event.preventDefault();
        let indice;
        Pratos.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });
        /* Usando o método splice para atualizar o produto */
        Pratos.splice(indice, 1, produtoAtualizado);
        /* Redirecionar de volta para a tela de produtos */
        navigate('/produtos');
    };

    const handleChange = (event) => {
        /* Desestruturando o evento */
        const { name, value } = event.target;
        /* Atualizando o estado do produto atualizado */
        setProdutoAtualizado({ ...produtoAtualizado, [name]: value });
    };

    return (
        <section>
            <h1>EDITAR PRODUTO</h1>
            {/* Chamando a função handleSubmit dentro do form */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>PRODUTO SELECIONADO</legend>
                    <div>
                        <input
                            type="hidden"
                            name="id"
                            value={produtoAtualizado.id}
                            /* Chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idNome">Nome do Produto:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"
                            value={produtoAtualizado.nome}
                            /* Chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição do Produto:</label>
                        <input
                            type="text"
                            name="desc"
                            id="idDesc"
                            value={produtoAtualizado.desc}
                            /* Chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idValor">Valor do Produto:</label>
                        <input
                            type="text"
                            name="valor"
                            id="idValor"
                            value={produtoAtualizado.valor}
                            /* Chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">EDITAR</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default EditarProduto;
