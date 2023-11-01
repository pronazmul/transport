import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: 'life-insurance',
    label: 'Life Insurance',
    children: <div id='life-insurance' style={{ height: '100vh', background: '#61b1bc' }} />,
  },
  {
    key: '2',
    label: 'Travel Insurance',
    children: <div id='travel-insurance' style={{ height: '100vh', background: '#9ab88c' }} />,
  },
  {
    key: 'term-insurance',
    label: 'Term Insurance',
    children: <div id='term-insurance' style={{ height: '100vh', background: '#ed8b08' }} />,
  },
];
const ResourcesPage = () => {
  return (
    <div className="bg-[#61b1bc] pt-48 relative top-[-165px]">
      <div className='container mx-auto'>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />

      </div>
    </div>
  );
};

export default ResourcesPage;
