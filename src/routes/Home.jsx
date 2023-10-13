import { } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div>
            <section id="intro" class="intro second-bg section">
                <div class="main-content intro-content">
                    <div class="intro-text-content">
                        <h2>Bem vindo ao restaurante Sakura</h2>
                        <p>é uma verdadeira joia da culinária japonesa, situado no coração da cidade. Dentre a infinidade de opções gastronômicas disponíveis, o Sakura se destaca por sua abordagem autêntica e apaixonada à cozinha japonesa.</p>
                    </div>
                    
                </div>
            </section>

            <section id="title" class="white-bg section">
                <div class="main-content title-content">
                    <h2>Diferencial</h2>
                    <p>O que diferencia o Sakura dos demais restaurantes é a sua dedicação incansável à qualidade dos ingredientes e à preparação dos pratos.</p>
                    <p>Os chefs do Sakura são verdadeiros mestres na arte do sushi, sashimi e outros pratos tradicionais japoneses, com anos de experiência e um compromisso inabalável com a perfeição.</p>
                    <p>Além disso, o Sakura oferece uma atmosfera única que combina a elegância e a simplicidade do Japão, criando um ambiente acolhedor e sofisticado para os clientes. A decoração, com toques tradicionais e modernos, reflete a autenticidade da cultura japonesa, e a atenção aos detalhes é evidente em cada aspecto do restaurante..</p>
                </div>
            </section>
            <section id='costumes' class='white-bg section'>
                <h1>Culinaria</h1>
                <table>
                    <tr>
                        <th>Costumes Japoneses</th>
                        <th>Culinária Japonesa</th>
                    </tr>
                    <tr>
                        <td>Tea Ceremony (Cerimônia do Chá)</td>
                        <td>Sushi</td>
                    </tr>
                    <tr>
                        <td>Kimono</td>
                        <td>Sashimi</td>
                    </tr>
                    <tr>
                        <td>Ikebana (Arranjo de Flores)</td>
                        <td>Tofu</td>
                    </tr>
                    <tr>
                        <td>Onsen (Fontes Termais)</td>
                        <td>Ramen</td>
                    </tr>
                    <tr>
                        <td>Cherry Blossom Viewing (Hanami)</td>
                        <td>Tempura</td>
                    </tr>
                </table>
            </section>

            


            
        </div>
    )
}

export default Home