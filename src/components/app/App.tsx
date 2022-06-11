import { Footer } from '../footer/footer';
import { Header } from '../header/header';

function App() {
    const appTitle = 'Learning React';
    const company = 'ISDI Coders';

    return (
        <>
            <Header appTitle={appTitle}></Header>
            <main>Página Home</main>
            <Footer company={company}></Footer>
        </>
    );
}

export default App;
