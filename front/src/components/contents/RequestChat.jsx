import React from 'react';

const RequestChat = ({create_at}) => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                </div>
            </div>
            <div className="chat-header">
                User
                <time className="text-xs opacity-50">{create_at}</time>
            </div>
            <div className="chat-bubble">Request!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
    );
};
export default React.memo(RequestChat);
