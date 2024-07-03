import React from 'react';

function Hero() {
  return (
    <div className="bg-[#00001a] text-white p-4 flex-1 border border-gray-500 rounded-xl m-1">
      <div className="md:flex md:flex-col md:items-center"> {/* Flexbox for responsive layout */}
        <h1 className="text-4xl font-bold text-center py-8 md:py-16"> {/* Padding adjusted for mobile and desktop */}
          Your reliable <span className="text-yellow-400">USSD</span> enabled payment gateway for <span className="text-yellow-400">Solana</span>
        </h1>
        <p className="text-center px-4 md:px-8">
          We specialize in pioneering solutions tailored for the Solana blockchain community. Our services include Stable Coins Settlement, ensuring businesses have access to stablecoin and fiat liquidity seamlessly. Whether you're managing day-to-day transactions or planning for long-term growth, our platform simplifies liquidity management with secure and reliable settlements. Additionally, our API integration service enables DAPP wallets and blockchain networks to connect effortlessly with local payment channels across Africa. This integration not only enhances accessibility but also fosters a thriving ecosystem where innovation meets practicality. Furthermore, our SMS Wallet service revolutionizes blockchain accessibility by enabling full functionality without the need for internet connectivity. Experience the future of digital payments with SOLPAY, where innovation meets reliability for businesses across the Solana blockchain.
        </p>
      </div>
    </div>
  );
}

export default Hero;
