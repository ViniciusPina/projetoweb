import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Pratos } from '../components/Pratos';

function ExcluirProduto() {
    /* Hooks - useParams e Navigate */
    const { id } = useParams();
    const navigate = useNavigate();

    // Filtra o produto com o ID correspondente
    const recProdutoListaById = Pratos.filter((item) => item.id == id);

    // Verifica se o produto foi encontrado
    if (recProdutoListaById.length === 0) {
        // Redirecione ou exiba uma mensagem de erro, caso o produto não exista.
        navigate('/produtos');
        return null;
    }

    // Obtenha o primeiro (e único) produto da lista filtrada
    const produto = recProdutoListaById[0];

    /* Função para excluir o produto */
    const handleExclude = (event) => {
        event.preventDefault();

        // Encontre o índice do produto na lista original de Pratos
        const indice = Pratos.findIndex((item) => item.id == produto.id);

        if (indice !== -1) {
            // Remova o produto da lista original
            Pratos.splice(indice, 1);
        }

        // Navegue de volta para a tela de produtos
        navigate('/produtos');
    };

    return (
        <section>
            <h1>Excluir Produto</h1>
            <div>
                <p>Nome: {produto.nome}</p>
                <p>Desc: {produto.desc}</p>
                <p>Valor: {produto.valor}</p>
            </div>
            <div>
                {/* Chamando a função handleExclude dentro do botão */}
                <button onClick={handleExclude}>
                    EXCLUIR
                </button>
                {/* Chamando o navigate para voltar para a tela de produtos */}
                <button onClick={() => navigate('/produtos')}>
                    CANCELAR
                </button>
            </div>
        </section>
    );
}

export default ExcluirProduto;