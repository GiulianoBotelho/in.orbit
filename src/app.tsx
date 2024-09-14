
import { Dialog} from './components/ui/dialog';

import { CreateGoal } from './components/ui/create-goal';
import { EmptyGoals } from './components/empty-goals';
import { Summary } from './components/ui/Summary';
const App: React.FC = () => {
  return (
    <Dialog>
      {/* <EmptyGoals/> */}
      <Summary/>
    <CreateGoal/>
    </Dialog>
  );
};

export default App;
