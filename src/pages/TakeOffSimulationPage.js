import TakeOffSimulationGoal from '../components/TakeOffSimulationPage/TakeOffSimulationGoal';
import TakeOffSimulationLiteratureReview from '../components/TakeOffSimulationPage/TakeOffSimulationLiteratureReview';
import TakeOffSimulationModeling from '../components/TakeOffSimulationPage/TakeOffSimulationModeling';

function TakeOffSimulationPage() {
  return (
    <div className="Page">
      <h1>Simulasi Take-Off</h1>
      <div className='Section'>
        <h2>Tujuan</h2>
        <TakeOffSimulationGoal />
      </div>
      <div className='Section'>
        <h2>Tinjauan Pustaka</h2>
        <TakeOffSimulationLiteratureReview />
      </div>
      <div className='Section'>
        <h2>Pemodelan Pesawat</h2>
        <TakeOffSimulationModeling />
      </div>

    </div>
  );
}

export default TakeOffSimulationPage;