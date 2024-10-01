import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/Card";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:8080/messages/api');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMessages(data);
        setIsLoading(false);
      } catch (e) {
        console.error("메시지를 가져오는 중 오류 발생:", e);
        setError("메시지를 불러오는 데 실패했습니다. 나중에 다시 시도해 주세요.");
        setIsLoading(false);
      };
    }

    fetchMessages();
  }, [])

  if (isLoading) {
    return <div className="text-center p-4">로딩 중...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">메시지 목록</h1>
      {messages.length === 0 ? (
        <p>메시지가 없습니다.</p>
      ) : (
        messages.map((msg) =>  (
          <Card key={msg.id} className="mb-2">
            <CardContent className="p-4">
              <p className="text-lg">{msg.message} <span>( {msg.id} )</span></p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

export default MessageList;