import TakeOffSimulationGoal from '../components/TakeOffSimulationPage/TakeOffSimulationGoal';
import TakeOffSimulationLiteratureReview from '../components/TakeOffSimulationPage/TakeOffSimulationLiteratureReview';
import TakeOffSimulationModeling from '../components/TakeOffSimulationPage/TakeOffSimulationModeling';
import TakeOffSimulationResult from '../components/TakeOffSimulationPage/TakeOffSimulationResult';
import TakeOffSimulationAnalysis from '../components/TakeOffSimulationPage/TakeOffSimulationAnalysis';
import TakeOffSimulationConclusion from '../components/TakeOffSimulationPage/TakeOffSimulationConclusion';

function TakeOffSimulationPage() {
  return (
    <div className="Page">
      <h1>Simulasi Take-Off</h1>
      <p>oleh Ahmad Fariz</p>
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
      <div className='Section'>
        <h2>Hasil Simulasi</h2>
        <TakeOffSimulationResult />
      </div>
      <div className='Section'>
        <h2>Analisis</h2>
        <TakeOffSimulationAnalysis />
      </div>
      <div className='Section'>
        <h2>Kesimpulan</h2>
        <TakeOffSimulationConclusion />
      </div>
    </div>
  );
}

export default TakeOffSimulationPage;