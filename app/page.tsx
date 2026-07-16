import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
        <div className="header" style={{ marginBottom: '5px' }}>
          <Image src="/logo.svg" alt="Codédex Logo" width={48} height={48} />
          <h1>Codédex</h1>
        </div>
        <div className="header-subtitle">welcome to the curiosity webring</div>
      </div>
      
      <div className="subtitle">
        a community of builders at <a href="#">Codédex</a>.
      </div>

      <div style={{ margin: '3rem 0 2rem 0', display: 'flex', justifyContent: 'center' }}>
        <Image src="/Keyboard.svg" alt="Keyboard illustration" width={900} height={281} />
      </div>

      <h2>webring</h2>
      <p>
        This is a webring for the curious people of Codédex—those who love learning, building, and turning ideas into something real through the magic of code.
      </p>
      <p>
        Whether you&apos;re writing your first line of code, shipping your hundredth project, or exploring a new technology just because it looked interesting, this ring is for you. It&apos;s a place to discover fellow builders, explore personal websites, share projects, and celebrate the joy of creating.
      </p>
      
      <div className="nav-links">
        <p style={{ margin: 0 }}>here, try it yourself (you'll find something similar on each site):</p>
        <div style={{ marginTop: '12px', textAlign: 'center' }}>
          <a href="#">&larr; prev</a> 
          <a href="#">random</a> 
          <a href="#">next &rarr;</a>
        </div>
      </div>

      <h2>members</h2>
      
      <div className="members-grid">
        <div className="member-card">
          <div className="member-info">
            <div className="member-name-container">
              <a href="https://ctfp1.vercel.app" target="_blank" rel="noopener noreferrer" className="member-name">pynthamil</a>
              <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </div>
            <div className="member-url">ctfp1.vercel.app</div>
          </div>
        </div>
      </div>

      <h2>join</h2>
      <p>
        want to join the webring? just open a pull request on our <a href="https://github.com/Pynthamil/curiosityring" target="_blank" rel="noopener noreferrer">github repository</a> with your website details. once merged, you'll be officially part of the ring!
      </p>
    </div>
  );
}
