  'use client'
type AppWelcomeProps = {
    headTitle: string;
    isShow: boolean;
}
export default function AppWelcome({ headTitle, isShow }: AppWelcomeProps) {
    const title = 'Welcome to COSCI';
    const currentYear = <p>2025</p>;
    const handleClick = () => {
        alert('Hello TypeScript');
    }

  return (
    <>
    <h1>{headTitle}</h1>
    <p>{title.toUpperCase()}</p>
    <button className="bg-blue-500 p-3 m-3 text-white rounded-3xl" onClick={handleClick}>กดได้เลย!</button>
    {currentYear}
    {
        isShow && <p>Date: 10/10/1998</p>
    }
    {
        isShow ? <p>Hello Next.js</p> : <p>Hello Javascript</p>
    }
    </>
  );
}