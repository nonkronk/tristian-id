import ImageOutput from '../../components/output/ImageOutput';
// import TxtOutput from '../../components/output/TxtOutput';
// import RegularOutput from '../../components/output/RegularOutput';

const k8sAtHome = () => {
    return <ImageOutput src={process.env.PUBLIC_URL + '/k8s-at-home.gif'} alt='k8s-at-home'/>
}

const resume = () => {
    const pdfWindow = window.open();
    pdfWindow.location.href = "https://cloud.tristian.id/s/LHwz5girfZFBCdt"
}

// const cowsay = (args) => {
//     if (args.length < 2) {
//         return <TxtOutput lines={[`'cowsay' needs an argument. Try 'cowsay "hello".'`]}/>
//     }
//     return (
//         <RegularOutput output={
//                 <Cowsay text={args.slice(1).join(' ')}/>
//             }
//         />
//     )
// }

const execs = {
    'k8s-at-home': k8sAtHome,
    'resume': resume,
}

export default execs;
