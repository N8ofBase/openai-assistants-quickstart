"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    
    "Start Chat": "function-calling",
    
  };

  return (
    <main className={styles.main}>
      <div className={styles.pchead}>        
      <a href="https://prismcortex.net" target="_blank" rel="noopener noreferrer">
        <img src="https://s3.amazonaws.com/prismcortex.net/logos/PCLogoSupportblk.png" alt="Prism Cortex Logo" />
      </a>
    </div>
      <div className={styles.title}>      
      <h3>UrantiaBot</h3>
      <p>a helpful tool for knowledge and information in<br></br>
      </p>The Urantia Book
      </div>
      
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>

      <div className={styles.disclaim}>
        <p>The information provided by this chatbot, powered by OpenAI, is for general informational purposes only. While we strive to offer accurate and up-to-date information, please be aware that the responses generated may not always reflect the most current news, developments, or expert opinions.

This chatbot does not constitute professional advice, and it should not be relied upon as a substitute for specific advice or information from qualified professionals in relevant fields. Users are encouraged to conduct their own research and consult appropriate experts before making decisions based on the information provided here.

Furthermore, the chatbot's responses are generated using artificial intelligence and may include inaccuracies or errors. By using this chatbot, you acknowledge and accept these limitations.

For any urgent inquiries or support, please reach out to our customer service team directly.</p>
      </div>
    </main>
  );
};

export default Home;
