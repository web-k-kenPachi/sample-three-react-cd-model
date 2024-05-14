import EmergingImage from '../helper//EmergingImage';
import Scene from '../helper/Scene';
import Noise from './Noise';
function InterfaceTest() {
  // const [type, setType] = useState(0);

  // useEffect(() => {
  //   const nav = [...document.querySelectorAll('.frame__demos-item')];
  //   nav.forEach((el) => el.classList.remove('is-active'));
  //   nav[type].classList.add('is-active');
  // }, [type]);

  // typeは0〜4で指定

  return (
    <div className="absolute top-0 -z-[1] h-screen w-screen">
      <Scene />
      <div>
        <EmergingImage
          type={4}
          url="./assets/images/main-screen.jpg"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

export default InterfaceTest;
