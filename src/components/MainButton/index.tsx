import './styles.css';

type Props = {
    text: string;
}

const MainButton = ( {text}: Props ) => {
    return (
        <button className='btn bg-primary'>{text}</button>
    );
}

export default MainButton;