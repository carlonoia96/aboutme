import React, { FC } from 'react';
import './Home.css';

interface HomeProps {}
interface HomeState {}

/*const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
    Home Component
  </div>
);*/

class Home extends React.Component<HomeProps, HomeState>{
    render() {
        return (
            <div className={"home"}>
                Home Component
            </div>
        );
    }
}

export default Home;
