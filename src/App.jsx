import "./App.css";
import Header from "./components/header";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";

function App() {
  return (
    <div>
      <Header />
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
