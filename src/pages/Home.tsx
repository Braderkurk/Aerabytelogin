import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aerabyte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            <IonButton routerLink="/login" color='primary'>Login</IonButton>
            <IonButton routerLink="/register" color='secondary'>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
