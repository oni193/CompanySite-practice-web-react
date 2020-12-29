import React , { useState }from 'react';
import Title from './components/textSize/Title';
import Customer from './components/partner/Customer';
import Contractor from './components/partner/Contractor';
import Affiliate from './components/partner/Affiliate';


const Partner = () => {


    const partnerStyle = {
        height: '500px',
        textAlign: 'center',
        paddingTop: '70px'
    };

    const buttonStyle = {
        float: 'right',
        marginRight: '300px',
        marginTop: '10px',
        border: '1px solid black',
        width: '250px',
        height: '60px',
        textAlign: 'center',
    };

    const tabStyle = {
        width: '100px',
        height: '30px',
        marginRight: '10px'
    }

    const content = [
        {
            tab: '고객사',
            content: <Customer/>
        },
        {
            tab: '협력사',
            content: <Contractor/>
        },
        {
            tab: '계열사',
            content: <Affiliate/>
        }  
    ];

    const data = {
        title: '파트너'
    };

    const useTabs =(initialTabs, allTabs) => {
        const [contentIndex, setContentIndex] = useState(initialTabs);
        return {
            contentItem: allTabs[contentIndex], 
            contentChange: setContentIndex
        };
    };
    


    const { contentItem, contentChange } = useTabs(0, content);
        return(
        <div>
            <div style={partnerStyle} >
                <Title text={data.title}/>
                {content.map((section, index)=>(
                    <button onClick={() => contentChange(index)} style={tabStyle}>{section.tab }</button>
                    ))}
                <br/>
                <br/>
                
                {contentItem.content} 
            </div>
        </div>
    );
};
export default Partner;
