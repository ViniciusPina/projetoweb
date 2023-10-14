import '../routes/login.css'
import { useRef, useState } from 'react';
import Produtos from './Produtos';

function Login() {
    const user = useRef();
    const password = useRef();
    const getUser = sessionStorage.getItem('userData');
    const getSenha = sessionStorage.getItem('senhaData');
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleSubmit = () => {
        if (user.current.value === 'admin' && password.current.value === '12345') {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem('userData', 'admin');
            sessionStorage.setItem('senhaData', token);
        } else {
            alert('Usuário e senha inválidos !!!');
        }
        setButtonClicked(true);
    };

    return (
        <section className="login-container">
            <h1>Login</h1>
            {getUser && getSenha ? (
                <Produtos />
            ) : (
                <form onSubmit={handleSubmit}>
                    <p className="red-text">USUÁRIO:</p>
                    <input type="text" ref={user} className="input-field" />
                    <p className="red-text">SENHA:</p>
                    <input type="password" ref={password} className="input-field" />
                    <button type="submit" className={`login-button ${buttonClicked ? 'clicked' : ''}`}>
                        {buttonClicked ? 'Logado' : 'Login'}
                    </button>
                </form>
            )}
        </section>
    );
}

export default Login;
