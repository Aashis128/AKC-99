import HomeItemList from './components/HomeItemList.js';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Sundarbari,Guwahati City',
      description:
        '5000+18%gst',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'AEC Campus,Guwahati City',
      description:
        '9000+18%gst',
    },
  ];
function Home(){
    return(
        <section>
            <h2>HomePage</h2>
            <HomeItemList homeitems={DUMMY_DATA}/>
      
    </section>
        
           
        
    )
}
export default Home;