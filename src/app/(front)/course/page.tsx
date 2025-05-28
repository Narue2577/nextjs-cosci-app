import Features05Page from "@/components/features-05/features-05";

export default async function Course(){
    const data = await fetch('https://api.codingthailand.com/api/course', {cache: 'no-store'});
    const apiInfo = await data.json();

    return(
        <>
        {
         apiInfo &&   <Features05Page courses={apiInfo.data}/>
        }
            </>
    )
}