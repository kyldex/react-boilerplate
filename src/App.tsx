import './App.css';

interface Props {
  title: string;
}

const App = ({ title }: Props) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
    </div>
  );
};

export default App;
