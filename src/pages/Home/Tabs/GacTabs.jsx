
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './GacTabs.css'; // Import a separate CSS file for custom styles
import { useEffect, useState } from 'react';
import GacTabsCard from './GacTabsCard';





const GacTabs = () => {
    const [allData, setAllData] = useState([])
  const [activeTab, setActiveTab] = useState('sports');
    useEffect(() => {
        fetch(`https://toy-market-server-puce.vercel.app/allgacdata/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [activeTab])

    // const result = allData.filter(data => data.category == activeTab)
    // console.log(result)

    const handleTab = tabName => {
        setActiveTab(tabName)
    }


    return (
        <div className="MyTabs my-10">
            <h2 className='text-4xl text-center font-semibold mb-10'>Sub Category</h2>
            <Tabs>
                <TabList className="TabList">
                    <Tab onClick={() => handleTab('sports')}>Sport</Tab>
                    <Tab onClick={() => handleTab('truck')}>Truck</Tab>
                    <Tab onClick={() => handleTab('police')}>Police</Tab>
                </TabList>
            </Tabs>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    allData.map(data => <GacTabsCard
                    key={data._id}
                    data={data}
                    ></GacTabsCard>)
                }
            </div>
        </div>
    );
};

export default GacTabs;