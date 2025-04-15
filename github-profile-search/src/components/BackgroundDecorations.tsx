import TopRightEllipse from '../assets/images/Elipse_1.svg'
import BottomLeftEllipse  from '../assets/images/Elipse_2.svg'
import DottedLayer from '../assets/images/DottedLayer.svg'
export function BackgroundDecorations() {
    return (
        <>
            <img src={DottedLayer} alt="Camada" className="absolute top-7 left-5 lg:left-16 z-0" />
            <img src={TopRightEllipse } alt="Elipse" className="absolute -top-20 -right-30 z-0" />
            <img src={BottomLeftEllipse} alt="Elipse" className="absolute -bottom-1/12 left-0 z-0" />
        </>
    )
}