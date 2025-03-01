import { useEffect, useRef, useState } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
  const scannerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            facingMode: "environment", // Use rear camera
          },
          target: scannerRef.current, // The div where the camera feed will be displayed
        },
        decoder: {
          readers: ["ean_reader", "code_128_reader"], // Add barcode types as needed
        },
        locate: true,
      },
      (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          setError("Error initializing scanner");
          return;
        }
        Quagga.start();
      }
    );

    // Listen for barcode detection
    Quagga.onDetected((data) => {
      if (onDetected) {
        onDetected(data.codeResult.code);
      }
    });

    return () => {
      Quagga.stop();
    };
  }, [onDetected]);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <div ref={scannerRef} className="w-full h-[300px]"></div>
    </div>
  );
};

export default BarcodeScanner;
