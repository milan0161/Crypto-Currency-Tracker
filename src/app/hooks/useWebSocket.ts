import { useEffect, useState } from 'react';
const webSocketUrl = import.meta.env.VITE_REACT_APP_WEB_SOCKET_URL;

const useWebSocket = (symbol: string) => {
  const [connection, setConnection] = useState<WebSocket>();
  // const ws = new WebSocket(webSocketUrl);
  const [currencyState, setCurrencyState] = useState<number[]>([]);

  let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: symbol.toUpperCase(),
  });

  useEffect(() => {
    const connect = new WebSocket(webSocketUrl);
    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        // console.log(data.channel);
        // if (data.channel === 'ticker') {
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
        // }
      };

      connection!.onopen = () => connection!.send(msg);
    }

    return () => {
      connection?.close();
    };
  }, [connection]);

  return currencyState;
};

export default useWebSocket;
