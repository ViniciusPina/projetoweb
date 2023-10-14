import React from 'react';
import { Link } from 'react-router-dom';

function Pedido() {
    return (
        <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '30px' }}>
            <div style={{ gridRow: '1', gridColumn: '1 / span 4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <h1>Cardapio</h1>
                <p>Fazer um Pedido</p>
                <Link to="/produtos" style={{ textDecoration: 'none' }}>
                    <span style={{ color: 'red' }}>Ver Produtos</span>
                </Link>
            </div>
            {renderProduct("/src/assets/img1.jpg", "Image 1", "$10.99")}
            {renderProduct("/src/assets/imagem2.jpg", "Image 2", "$12.99")}
            {renderProduct("/src/assets/imagem3.webp", "Image 3", "$9.99")}
            {renderProduct("/src/assets/peixe-cru.jpg", "Image 4", "$14.99")}
            {renderProduct("/src/assets/ramen.jpg", "Image 5", "$8.99")}
            {renderProduct("/src/assets/tofu.jpg", "Image 6", "$11.99")}
            {renderProduct("/src/assets/file.webp", "Image 7", "$7.99")}
            {renderProduct("/src/assets/meguro.jpg", "Image 8", "$13.99")}
        </div>
    );
}

function renderProduct(src, alt, price) {
    return (
        <Link to="/produtos" style={{ textDecoration: 'none' }}>
            <div className="image-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '20px', width: '100%', padding: '10px' }}>
                <Link to="/produtos" style={{ textDecoration: 'none' }}>
                    <img src={src} alt={alt} className="image" style={{ width: '50%', height: '50%', borderRadius: '20px', border: '2px solid red' }} />
                </Link>
                <span style={{ color: 'green', fontSize: '1.2rem', marginTop: '10px' }}>{price}</span>
            </div>
        </Link>
    );
}

export default Pedido;
