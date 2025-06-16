import React from 'react';
const ResponseChat = () => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
                </div>
            </div>
            <div className="chat-header">
                ChatBridge
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">Response!</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>
    );
};
export default React.memo(ResponseChat);
