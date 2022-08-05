import React, {FC} from 'react';
import './Home.css';

interface HomeProps {
}

interface HomeState {
}

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

/*const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
    Home Component
  </div>
);*/

class Home extends React.Component<HomeProps, HomeState> {
    render() {
        return (
            <div className={"home"}>
                <div className={"debug"}>
                    w: {getWindowDimensions().width}
                    <br/>
                    h: {getWindowDimensions().height}
                </div>
                <div className={"background-container"}>
                    <div className={"background"}/>
                    <div className={"background-2 hide-on-desktop"}/>
                </div>
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
                <div className={"block-4 bk-gray"}>
                    <div className={"container-1"}>
                        <div>
                            <p className={"text-align-center"}>
                                Mi sono laureata in Economia e gestione delle imprese in pieno Covid-19 sviluppando la
                                tesi
                                sulle strategie per l'acquisizione e il mantenimento del potere di mercato.
                            </p>
                            <p className={"text-align-center"}>
                                Ho maturato una spiccata propensione per l'<span
                                className={"bold"}>imprenditorialità</span> ed un conseguente avvicinamento
                                allo studio del <span className={"bold"}>Digital Marketing</span>.
                            </p>
                            <p className={"text-align-center"}>
                                Conseguita la Laurea vedevo aprirsi <br/>davanti a me un'idea: <br/>diventare
                                imprenditrice.<br/>
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
                                momento di cambiare vita. Volevo <span
                                className={"red"}>sentirmi</span> finalmente <span
                                className={"red"}>realizzata</span>!
                            </p>
                            <p className={"text-align-center"}>
                                Non ne potevo più di tornare a casa sempre priva di energia ed entusiasmo e di avere la
                                vita
                                sempre gestita da qualcun altro, così ho deciso di lasciare il posto fisso per <span
                                className={"red"}>inseguire il
                            sogno di una vita</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"block-5 bk-gray"}>
                    <div className={"box-container"}>
                        <div className={"text-box"}>
                            <div className={"container bk-red white text-align-center"}>
                                <p>
                                    Volutamente non ho scelto un corso di laurea in architettura perché la mia passione
                                    e il mio obiettivo
                                    è
                                    da sempre quello di arredare abitazioni private. Perciò, avendo già, piena
                                    consapevolezza di quello
                                    che
                                    volevo fare, ho deciso di seguire degli studi mirati nel settore d'interni.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"text-container"}>
                        <p className={"text-align-center"}>
                            Per il mio percorso formativo ho scelto un <span className={"red"}>corso di studi professionalizzante e intensivo</span>,
                            che potesse fornirmi tutte le competenze necessarie per iniziare fin da subito a lavorare
                            con i clienti.
                        </p>
                    </div>
                    <div className={"text-container-2"}>
                        <p className={"text-align-center bk-darkGray white"}>
                            Decisi di mettere da parte tutti i miei risparmi per andare a studiare interior design a
                            Milano.
                            Chiaramente non era sufficiente e dunque scelsi di aprire un finanziamento per pagarmi gli
                            studi.
                        </p>
                    </div>
                </div>
                <div className={"block-6 bk-gray"}>
                    <div className={"box-container"}>
                        <div className={"postCard bk-white"}>
                            <div className={"container bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <p className={"text-align-center"}>
                                Oggi sono contenta di aver avviato il mio business di successo e di avere Carlo, che mi
                                aiuta in questo
                                progetto, gestendomi tutta la parte legata al sito web e appoggiandomi in ogni mia
                                scelta.
                            </p>
                        </div>
                    </div>
                    <div className={"box-container-2"}>
                        <div className={"img"}/>
                        <p className={"text-align-center"}>
                            Nonostante la distanza di questi anni, entrambi crediamo nelle potenzialità di questo
                            progetto e non
                            vediamo l'ora di andare a vivere insieme
                            !</p>
                    </div>
                </div>
                <div className={"block-7"}>
                    <div className={"box-container text-align-center"}>
                        <p>
                            La mia <span className={"red"}>mission</span> è <span className={"bold"}>insegnare</span> a
                            home lovers o
                            aspiranti interior designer i <span className={"bold"}>segreti di un buon progetto
              d'interni</span>, per rendere ogni abitazione super confortevole e di forte impatto estetico.
                        </p>
                        <p>
                            <span className={"bold"}>Aiuto</span>, inoltre, questa figura professionale <span
                            className={"bold"}>ad emergere nel mercato</span> per
                            creare una solida rete di clienti
                            e gestire al meglio ogni futura richiesta di lavoro.
                        </p>
                    </div>
                    <div className={"img"}/>
                    <div className={"box-container-2 bk-darkGray"}>
                        <div className={"postCard bk-white"}>
                            <div className={"container bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <p className={"text-align-center"}>
                                Ottenere le linee guida per una casa più funzionale non è mai stato così semplice.<br/>
                                Scarica le tue <span className={"bold"}>guide gratuite!</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"block-8"}>
                    <div className={"box-container"}>
                        <p className={"text-align-center"}>
                            Ho molto a cuore che anche tu riesca ad imparare e a conoscere più da vicino il fantastico
                            mondo
                            dell'Interior Design, ecco perché qui troverai <span
                            className={"bold"}>tantissimi contenuti</span>, che
                            ho creato appositamente per te.<br/> <br/>
                            Cosa aspetti?!?<br/>
                            Lascia che abbia finalmente inizio la tua formazione!
                        </p>
                        <div className={"btn bk-red"}>
                            <p className={"white"}>Link a e-commerce</p>
                        </div>
                    </div>
                    <div className={"box-container-2 bk-darkGray"}>
                        <div className={"container"}>
                            <div className={"social ig bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <div className={"social yt bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <div className={"social tg bk-red"}>
                                <div className={"img"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
