import Head from 'next/head'

function About() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>About | Casino Website</title>
      </Head>
      <h1 className="text-3xl font-bold my-4">About Us</h1>
      <p className="my-4">
        Welcome to the Casino Website, where you can play your favorite casino games and win big! Our website offers a wide variety of games, including slots, blackjack, poker, and more. We strive to provide the best gaming experience possible for our players, with exciting graphics, fast payouts, and excellent customer service.
      </p>
      <p className="my-4">
        Our team is composed of experienced professionals in the gaming industry, who are dedicated to ensuring the fairness and integrity of our games. We use the latest security technology to protect our players' information and maintain a safe and secure environment for online gaming.
      </p>
      <p className="my-4">
        Whether you're a seasoned player or a newcomer to the world of online gaming, we invite you to join us at the Casino Website and experience the thrill of the game. Sign up today to start playing and winning!
      </p>
    </div>
  )
}

export default About
