
import { Dialog} from './components/ui/dialog';
import { CreateGoal } from './components/ui/create-goal';
import { Summary } from './components/ui/Summary';
const App: React.FC = () => {
  return (
    <Dialog>
      
      <Summary/>
    <CreateGoal/>
    </Dialog>
  );
};

export default App;
