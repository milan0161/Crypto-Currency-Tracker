import { useEffect, useState } from 'react';
const webSocketUrl = import.meta.env.VITE_REACT_APP_WEB_SOCKET_URL;

const useWebSocket = (symbol: string) => {
  const ws = new WebSocket(webSocketUrl);
  const [currencyState, setCurrencyState] = useState<number[]>([]);

  let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: symbol.toUpperCase(),
  });

  useEffect(() => {
    ws!.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (Array.isArray(data) && data[1].length === 10) {
        let finalData: number[] = [
          data[1][6],
          data[1][4],
          data[1][5],
          data[1][8],
          data[1][9],
        ];
        setCurrencyState(finalData);
      }
    };

    ws!.onopen = () => ws!.send(msg);
  }, []);

  return currencyState;
};

export default useWebSocket;
