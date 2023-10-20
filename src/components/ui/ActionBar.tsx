import React from 'react';

type ActionBarProps = {
    title: string
    children: React.ReactElement | React.ReactNode
}

const ActionBar = ({ title, children }: ActionBarProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <div className='flex justify-between items-center my-4'>
                {children}
            </div>
        </div>
    );
};

export default ActionBar;