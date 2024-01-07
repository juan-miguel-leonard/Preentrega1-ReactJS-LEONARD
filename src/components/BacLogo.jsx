import Logo from "../assets/BacLogo.png";

const BacLogo = ({tamanio}) => {
    return (
        <img src={Logo} alt="Buenos Aires Customs" width={tamanio} />
    )
}

export default BacLogo;
