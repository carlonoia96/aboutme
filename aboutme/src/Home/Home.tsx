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
                                    Negli anni io crescevo ed insieme a me anche il mio sogno si veniva a delineare
                                    sempre di più.
                                </p>
                                <p>
                                    La mia situazione economica non mi consentì di intraprendere questo percorso.
                                    Iniziai così a lavorare come commessa di abbigliamento in un centro commerciale.
                                </p>
                            </div>
                        </div>
                        <div className={"text-box bk-gary"}>
                            <div className={"container bk-darkGray white text-align-center"}>
                                <p>
                                    Nonostante il lavoro impegnasse gran parte delle mie giornate, sentivo la necessità
                                    di continuare a studiare e allora mi iscrissi all'università di Economia, che era
                                    nella mia città e andai avanti di borse di studio.
                                </p>
                                <p>
                                    Da lì a poco compresi che il mio sogno non era del tutto irrealizzabile...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"block-4"}>
                    <div className={"container-1"}>
                        <div>
                            <p className={"text-align-center"}>
                                Mi sono laureata in Economia e gestione delle imprese in pieno Covid-19 sviluppando la tesi
                                sulle strategie per l'acquisizione e il mantenimento del potere di mercato.
                            </p>
                            <p className={"text-align-center"}>
                                Ho maturato una spiccata propensione per l'<span
                                className={"bold"}>imprenditorialità</span> ed un conseguente avvicinamento
                                allo studio del <span className={"bold"}>Digital Marketing</span>.
                            </p>
                            <p className={"text-align-center"}>
                                Conseguita la Laurea vedevo aprirsi <br/>davanti a me un'idea: <br/>diventare imprenditrice.<br/>
                                Sì, ma di che cosa?
                            </p>
                            <p className={"text-align-center red"}>
                                Imprenditrice della mia passione!
                            </p>
                        </div>
                    </div>
                    <div className={"container-2"}>
                        <div>
                            <p className={"text-align-center"}>
                                Grazie al supporto del mio fidanzato, dopo quasi setti anni ho capito che era giunto il
                                momento di cambiare vita. Volevo <span className={"red"}>sentirmi</span> finalmente <span
                                className={"red"}>realizzata</span>!
                            </p>
                            <p className={"text-align-center"}>
                                Non ne potevo più di tornare a casa sempre priva di energia ed entusiasmo e di avere la vita
                                sempre gestita da qualcun altro, così ho deciso di lasciare il posto fisso per <span
                                className={"red"}>inseguire il
                            sogno di una vita</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
