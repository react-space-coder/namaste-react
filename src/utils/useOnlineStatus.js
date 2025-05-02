import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    addEventListener("online", () => setOnlineStatus(true)); // also handle coming back online

  }, [onlineStatus]);
  return onlineStatus 
};
export default useOnlineStatus;
