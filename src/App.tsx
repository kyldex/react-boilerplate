import './App.scss';

import { SM_BREAKPOINT_NUMBER } from './utils/constants';

const MOBILE_IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/5/59/L%C3%A1szl%C3%B3_moholy-nagy%2C_D_IV._1922.jpg';
const DESKTOP_IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/d/dc/L%C3%A1szl%C3%B3_Moholy-Nagy%2C_LIS_1922.jpg';

type Props = {
  title: string;
};

const App = ({ title }: Props) => {
  return (
    <div className="app-container">
      <header>HEADER</header>
      <main>
        <h1>{title}</h1>

        <div className="image-container">
          <picture>
            <source
              srcSet={MOBILE_IMG_URL}
              media={`(max-width: ${SM_BREAKPOINT_NUMBER - 1}px)`}
            />
            <source
              srcSet={DESKTOP_IMG_URL}
              media={`(min-width: ${SM_BREAKPOINT_NUMBER}px)`}
            />
            <img srcSet={DESKTOP_IMG_URL} loading="lazy" alt="Plante macro" />
          </picture>
        </div>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default App;
