import React from 'react';

function Hero() {
  return (
    <div className="bg-[#00001a] text-white p-4 border border-gray-500 rounded-xl m-2 md:m-4 flex-1 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center p-8">
        Your reliable <span className="text-yellow-400">USSD</span> enabled payment gateway for <span className="text-yellow-400">Solana</span>
      </h1>
      <div>
        <p className="text-lg md:text-xl text-center p-4">
          We specialize in pioneering solutions tailored for the Solana blockchain community.
        </p>
        <p className="text-lg md:text-xl text-center p-4">
          Our services include Stable Coins Settlement, ensuring businesses have access to stablecoin and fiat liquidity seamlessly.
        </p>
        <p className="text-lg md:text-xl text-center p-4">
          Whether you're managing day-to-day transactions or planning for long-term growth, our platform simplifies liquidity management with secure and reliable settlements.
        </p>
        <p className="text-lg md:text-xl text-center p-4">
          Furthermore, our SMS Wallet service revolutionizes blockchain accessibility by enabling full functionality without the need for internet connectivity. Experience the future of digital payments with SOLPAY, where innovation meets reliability for businesses across the Solana blockchain.
        </p>
      </div>
    </div>
  );
}

export default Hero;
