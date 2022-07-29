import React, {FC} from 'react';
import './Home.css';

interface HomeProps {
}

interface HomeState {
}

/*const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
    Home Component
  </div>
);*/

class Home extends React.Component<HomeProps, HomeState> {
    render() {
        return (
            <div>
                <div className={"start full-screen"}>
                    <div className={"title text-align-center"}>
                        <p>Ciao, sono <span className={"red"}>Ambra</span><br/><br className={"hide-on-desktop"}/>
                            <span className={"bold"}> interior & social <br className={"hide-on-desktop"}/> designer specialist</span>
                        </p>
                    </div>
                    <div className={"image"}>
                        <div className={"img"}/>
                    </div>
                </div>
                <div className={"block-2"}>
                    <div className={"image"}>
                        <div className={"img"}/>
                    </div>
                    <div className={"text text-align-center"}>
                        <p>
                            Fin da così piccina avevo le idee chiarissime su quello che avrei voluto fare da grande:
                            volevo essere una <br/> <span className={"red"}>Interior designer di successo!</span>
                        </p>
                    </div>
                </div>
                <div className={"block-3"}>
                    <div className={"image"}>
                        <div className={"img"}/>
                        <div className={"img-2 hide-on-desktop"}/>
                    </div>
                    <div className={"box-container"}>
                        <div className={"text-box"}>
                            <div className={"container bk-red white text-align-center"}>
                                <p>
                                    Negli anni io crescevo ed insieme a me anche il mio sogno si veniva a delineare sempre di più.
                                </p>
                                <p>
                                    La mia situazione economica non mi consentì di intraprendere questo percorso. Iniziai così a lavorare come commessa di abbigliamento in un centro commerciale.
                                </p>
                            </div>
                        </div>
                        <div className={"text-box bk-gary"}>
                            <div className={"container bk-darkGray white text-align-center"}>
                                <p>
                                    Nonostante il lavoro impegnasse gran parte delle mie giornate, sentivo la necessità di continuare a studiare e allora mi iscrissi all'università di Economia, che era nella mia città e andai avanti di borse di studio.
                                </p>
                                <p>
                                    Da lì a poco compresi che il mio sogno non era del tutto irrealizzabile...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
