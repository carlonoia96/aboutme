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
            </div>
        );
    }
}

export default Home;
