import { Block } from 'src/shared/ui/Block';
import UserFormPage from 'src/pages/UserFormPage/ui/UserFormPage.tsx';

function App() {
  return (
    <div className={'app'}>
      <Block>
        <UserFormPage />
      </Block>
    </div>
  );
}

export default App;
