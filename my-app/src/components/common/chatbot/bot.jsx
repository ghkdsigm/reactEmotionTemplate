import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const ChatBotWrapper = styled.div`
	position: fixed;
	bottom: 5vw;
	right: 14vw;
	z-index: 9999;
`

const ChatBotButton = styled.div`
	background-color: #007bff;
	color: white;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const ChatPopup = styled.div`
	position: fixed;
	bottom: 5vw;
	right: 18vw;
	width: 18vw;
	height: 61vh;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	display: flex;
	flex-direction: column;
`

const ChatHeader = styled.div`
	background-color: #00b0b9;
	color: white;
	padding: 10px;
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const RefreshWrapper = styled.div`
	background-color: #fff;
	padding: 10px;
	display: flex;
	justify-content: right;
	border-top: 1px solid #ccc;
	box-shadow: 0px 2px 4px 0px #00000014;
	button {
		font-size: 1rem;
	}
`

const ChatBody = styled.div`
	flex-grow: 1;
	padding: 10px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const ChatMessage = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	.avatar {
		width: 40px;
		height: 40px;
		background-color: #ccc;
		border-radius: 50%;
	}

	.message {
		max-width: 70%;
		padding: 8px;
		background-color: ${({ isUser }) => (isUser ? '#007bff' : '#f1f1f1')};
		color: ${({ isUser }) => (isUser ? 'white' : 'black')};
		border-radius: 10px;
		word-wrap: break-word;
	}
`

const ChatInputWrapper = styled.div`
	display: flex;
	padding: 10px;
	background-color: #f8f8f8;
	border-top: 1px solid #ccc;
`

const InputWrapper = styled.div`
	position: relative;
	flex-grow: 1;
`

const Input = styled.input`
	width: 100%;
	padding: 8px 30px 8px 10px; /* 오른쪽에 여백을 추가하여 아이콘 위치 확보 */
	border-radius: 4px;
	border: 1px solid #ccc;
`

const SendButton = styled.button`
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 8px;
`

const SendIcon = styled.span`
	font-size: 20px;
	color: #007bff;
`

const InitialMessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	flex-direction: column;
	gap: 10px;
	text-align: center;
`

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [messages, setMessages] = useState([])
	const [newMessage, setNewMessage] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const handleToggleChat = () => {
		setIsOpen(!isOpen)
	}

	const handleSendMessage = () => {
		if (newMessage.trim()) {
			setMessages([...messages, { isUser: true, text: newMessage }])

			// AI 응답 예시
			setMessages(prevMessages => [...prevMessages, { isUser: false, text: `AI의 응답: ${newMessage}` }])

			setNewMessage('')
		}
	}

	const handleRefresh = () => {
		setMessages([{ isUser: false, text: '안녕하세요! 챗봇입니다. 무엇을 도와드릴까요?' }])
	}

	useEffect(() => {
		if (isOpen) {
			// 대화 시작 전에 잠깐 보여줄 안내 메시지
			setTimeout(() => {
				setMessages([{ isUser: false, text: '안녕하세요. 수요예측기반 Chatbot 입니다. 무엇이든 물어보세요.' }])
				setIsLoading(false) // 대화 시작 후 로딩 상태 변경
			}, 2000) // 2초 후 안내 메시지 표시
		}
	}, [isOpen])

	return (
		<>
			<ChatBotWrapper>
				<ChatBotButton onClick={handleToggleChat}>
					<span
						role="img"
						aria-label="chat"
					>
						💬
					</span>
				</ChatBotButton>
			</ChatBotWrapper>

			{isOpen && (
				<ChatPopup>
					<ChatHeader>
						<span>Chatbot</span>
						<button onClick={handleToggleChat}>닫기</button>
					</ChatHeader>

					<RefreshWrapper>
						<button onClick={handleRefresh}>새 대화</button>
					</RefreshWrapper>

					<ChatBody>
						{isLoading ? (
							<InitialMessageWrapper>
								<div>💬</div>
								<div>안녕하세요. 수요예측기반 Chatbot 입니다.</div>
								<div>무엇이든 물어보세요.</div>
							</InitialMessageWrapper>
						) : (
							messages.map((message, index) => (
								<ChatMessage key={index}>
									<div className="avatar"></div>
									<div className="message">{message.text}</div>
								</ChatMessage>
							))
						)}
					</ChatBody>

					<ChatInputWrapper>
						<InputWrapper>
							<Input
								type="text"
								value={newMessage}
								onChange={e => setNewMessage(e.target.value)}
								placeholder="메시지를 입력하세요"
							/>
							<SendButton onClick={handleSendMessage}>
								<SendIcon
									role="img"
									aria-label="send"
								>
									✈️
								</SendIcon>
							</SendButton>
						</InputWrapper>
					</ChatInputWrapper>
				</ChatPopup>
			)}
		</>
	)
}

export default ChatBot
