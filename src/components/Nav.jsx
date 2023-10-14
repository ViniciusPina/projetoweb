import { } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
    /*Hook- useNavigate */
    const navigate = useNavigate();

    //criando a função logout

    const handleLogout = async () => {
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('senhaData');
        alert("SAINDO DA SESSÃO");
        navigate('/');

    }

    return (

        <>
            <header>
                <h2>Sakura</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/produtos">produtos</Link>
                        </li>
                        <li>
                            <Link to="/pedido">pedido</Link>
                        </li>

                        <li>
                            <Link to="sobre">Sobre nos</Link>
                        </li>
                        <li>
                            <Link to="/inserirproduto/produto">Cadastrar Produto</Link>
                        </li>
                        <li>
                            <Link to="/inserirpedido">Inserir Pedido</Link>
                        </li>
                        <li>
                            <Link to="/login">LOGIN</Link>
                        </li>
                        <button onClick={handleLogout}>Logout</button>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Nav;