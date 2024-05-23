import { Collapse } from "antd";

function TakeOffSimulationLiteratureReview() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  const takeOffPerformanceItems = [
    {
      key: '1',
      label: 'CASR 23.51 Take-off speeds',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'CASR 23.55 Accelerate-stop distance',
      children: <p>{text}</p>,
    },
  ];

  const takeOffChallengeItems = [
    {
      key: '1',
      label: 'Kemiringan Runway',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'Lokasi Runway',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Arah dan Besar Kecepatan Angin',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'Pengaruh Thrust',
      children: <p>{text}</p>,
    },
  ];

  const items = [
    {
      key: '1',
      label: 'Performa Take-off',
      children: (
        <div>
          <p>Basis: Civil Aviation Safety Regulation (CASR) part 23 oleh Departemen perhubungan.</p>
          <Collapse defaultActiveKey="1" items={takeOffPerformanceItems} />
        </div>
      ),
    },
    {
      key: '2',
      label: 'Tantangan pada Take-off',
      children: <Collapse defaultActiveKey="1" items={takeOffChallengeItems} />,
    }
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
}

export default TakeOffSimulationLiteratureReview;