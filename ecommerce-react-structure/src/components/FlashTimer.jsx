import { useEffect, useState } from "react";

function FlashTimer() {
  const saleEndTime = new Date("2026-02-10T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(saleEndTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(saleEndTime - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft <= 0) {
    return <p className="text-danger fw-bold">Sale Ended</p>;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="d-flex gap-4 align-items-center">
      <TimeBox label="Days" value={days} />
      <TimeBox label="Hours" value={hours} />
      <TimeBox label="Minutes" value={minutes} />
      <TimeBox label="Seconds" value={seconds} />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="text-center">
      <small className="text-muted">{label}</small>
      <h4 className="fw-bold mb-0">{String(value).padStart(2, "0")}</h4>
    </div>
  );
}

export default FlashTimer;
