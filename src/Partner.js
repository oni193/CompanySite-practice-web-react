import React , { useState }from 'react';

const Partner = () => {
    
    const partnerStyle = {
        height: '500px',
        backgroundColor: '#ffe8cc'
    };

    const content = [
        {
            tab: '고객사',
            content: '블라블라 1번 창'
        },
        {
            tab: '협력사',
            content: '블라블라 2번 창'
        },
        {
            tab: '계열사',
            content: '울라불라 3번 창'
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
        <div style={partnerStyle} className="Partner">
            {content.map((section, index)=>(
                <button onClick={() => contentChange(index)}>{section.tab}</button>
                ))}
            <br/>
            {contentItem.content}           
        </div>
    );
};
export default Partner;
