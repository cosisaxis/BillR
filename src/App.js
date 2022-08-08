import "./styles/App.scss"
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar"; 

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Navbar />
      </PageContainer>
    </div>
  );
}

export default App;
