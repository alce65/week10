import './header.css';
export function Header({ appTitle }: { appTitle: string }) {
    const logo = './logo.svg';

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{appTitle}</h1>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}
