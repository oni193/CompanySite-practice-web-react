import React , { useState }from 'react';

const Partner = () => {
    
    const partnerStyle = {
        height: '500px',
        textAlign: 'center',
        backgroundColor: '#ffe8cc'
    };

    const tabStyle = {
        width: '100px',
        height: '30px',
        marginRight: '10px'
    }

    const content = [
        {
            tab: '고객사',
            content: '1번 창'
        },
        {
            tab: '협력사',
            content: '2번 창'
        },
        {
            tab: '계열사',
            content: '3번 창'
        }  
    ];

    const useTabs =(initialTabs, allTabs) => {
        const [contentIndex, setContentIndex] = useState(initialTabs);
        return {
            contentItem: allTabs[contentIndex], 
            contentChange: setContentIndex
        };
    };

    const { contentItem, contentChange } = useTabs(0, content);
        return(
        <div style={partnerStyle} className="Partner" >

            {content.map((section, index)=>(
                <button onClick={() => contentChange(index)} style={tabStyle}>{section.tab }</button>
                ))}
            <br/>
            <br/>
            
            {contentItem.content} 

        </div>
    );
};
export default Partner;
