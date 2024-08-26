import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderHome from './assets/components/headerHome'
import Navigation from './assets/components/Navigation'
import PageBody from './assets/components/pageBody'
import Timeline from './assets/components/timeline';
import CardSection from './assets/components/CardSection';
import Footer_ from './assets/components/Footer_';



function App() {

  return (
    <>
    <Navigation></Navigation>
    <HeaderHome></HeaderHome>
    <PageBody></PageBody>
    <Timeline></Timeline>
    <CardSection></CardSection>
    <Footer_></Footer_>
    </>
  )
}

export default App
